const { JSDOM } = require('jsdom');
const fs = require('fs');

(async () => {
    try {
        const urls = [
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_A',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_B',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_C',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_D',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_E',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_F',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_G',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_H',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_I',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_J',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_K',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_L',
            'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup'
        ];

        const matches = [];

        for (const url of urls) {
            console.log('Fetching', url);
            const response = await fetch(url);
            const html = await response.text();
            const dom = new JSDOM(html);
            const document = dom.window.document;
            
            // Try to extract global timezone offset
            const tzMatch = document.body.textContent.match(/All times listed are local,\s*(UTC[−-]\d+)/i);
            const globalTz = tzMatch ? tzMatch[1] : null;
            
            const matchBoxes = document.querySelectorAll('.footballbox');
            matchBoxes.forEach(box => {
            try {
                const dateElem = box.querySelector('.fdate');
                const timeElem = box.querySelector('.ftime');
                const homeElem = box.querySelector('.fhome');
                const awayElem = box.querySelector('.faway');
                const scoreElem = box.querySelector('.fscore');
                
                // Goals
                const homeGoalElem = box.querySelector('.fhgoal');
                const awayGoalElem = box.querySelector('.fagoal');
                
                if (dateElem && timeElem && homeElem && awayElem) {
                    
                    const extractGoals = (elem) => {
                        if(!elem) return [];
                        const goals = [];
                        // Find all <li> items which usually contain the player name and the time span
                        const listItems = elem.querySelectorAll('li');
                        listItems.forEach(li => {
                            // Extract player name (usually the text content before the span)
                            const playerNode = li.querySelector('a') || li.firstChild;
                            const playerName = playerNode ? playerNode.textContent.trim() : '';
                            
                            // Extract times (usually in spans inside .fb-goal)
                            const timeSpans = li.querySelectorAll('.fb-goal span:not([title="Goal"]):not([title="Penalty kick"]):not([title="Own goal"])');
                            // Also need to know if it's a penalty.
                            const hasPenalty = !!li.querySelector('img[alt="Penalty"]');
                            const hasOwnGoal = !!li.querySelector('img[alt="Own goal"]');
                            
                            let timeText = [];
                            timeSpans.forEach(span => {
                                if(span.textContent.trim()) timeText.push(span.textContent.trim());
                            });
                            
                            if (!timeText.length) {
                                // sometimes time is just in the text content
                                const match = li.textContent.match(/(\\d+['+]?[\\d]*')/g);
                                if(match) timeText = match;
                            }

                            if(playerName && timeText.length) {
                                goals.push({
                                    player: playerName,
                                    times: timeText,
                                    isPenalty: li.innerHTML.includes('Penalty') || li.innerHTML.includes('pen.'),
                                    isOwnGoal: li.innerHTML.includes('Own goal') || li.innerHTML.includes('o.g.')
                                });
                            }
                        });
                        return goals;
                    };

                    let score = scoreElem ? scoreElem.textContent.trim() : null;
                    if(score && score.includes('v')) score = null; // "v" means not played yet

                    const locationElem = box.querySelector('.fright [itemprop="location"]');
                    const venue = locationElem ? locationElem.textContent.trim().replace(/\s+/g, ' ') : '';

                    let penaltyScore = null;
                    let homePenalties = [];
                    let awayPenalties = [];

                    const ths = box.querySelectorAll('th');
                    let penHeader = null;
                    ths.forEach(th => {
                        if (th.textContent.includes('Penalties')) penHeader = th;
                    });
                    
                    if (penHeader) {
                        const penTr = penHeader.parentElement.nextElementSibling;
                        if (penTr && penTr.classList.contains('fgoals')) {
                            const scoreTh = penTr.querySelector('th');
                            penaltyScore = scoreTh ? scoreTh.textContent.trim() : null;
                            
                            const parsePenalties = (td) => {
                                const pens = [];
                                if (!td) return pens;
                                td.querySelectorAll('li').forEach(li => {
                                    const playerNode = li.querySelector('a') || li.firstChild;
                                    const playerName = playerNode ? playerNode.textContent.trim() : '';
                                    const isScored = li.innerHTML.includes('check') || li.innerHTML.includes('scored');
                                    if (playerName) {
                                        pens.push({ player: playerName, scored: isScored });
                                    }
                                });
                                return pens;
                            };
                            
                            homePenalties = parsePenalties(penTr.querySelector('.fhgoal'));
                            awayPenalties = parsePenalties(penTr.querySelector('.fagoal'));
                        }
                    }

                    let timeStr = timeElem.textContent.trim();
                    if (globalTz && !timeStr.includes('UTC')) {
                        timeStr += ' ' + globalTz;
                    }

                    matches.push({
                        date: dateElem.textContent.trim(),
                        time: timeStr,
                        home: homeElem.textContent.trim(),
                        away: awayElem.textContent.trim(),
                        score: score,
                        venue: venue,
                        homeGoals: extractGoals(homeGoalElem),
                        awayGoals: extractGoals(awayGoalElem),
                        penaltyScore,
                        homePenalties,
                        awayPenalties
                    });
                }
            } catch (e) {}
        });
        }
        
        fs.writeFileSync('matches.json', JSON.stringify(matches, null, 2));
        console.log('Total found:', matches.length);
        console.log('Sample Match:', JSON.stringify(matches.find(m => m.score), null, 2));
    } catch (e) {
        console.error(e);
    }
})();
