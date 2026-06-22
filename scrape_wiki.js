const { JSDOM } = require('jsdom');
const fs = require('fs');

(async () => {
    try {
        const response = await fetch('https://en.wikipedia.org/wiki/2026_FIFA_World_Cup');
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
        const matchBoxes = document.querySelectorAll('.footballbox');
        const matches = [];
        
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

                    matches.push({
                        date: dateElem.textContent.trim(),
                        time: timeElem.textContent.trim(),
                        home: homeElem.textContent.trim(),
                        away: awayElem.textContent.trim(),
                        score: score,
                        homeGoals: extractGoals(homeGoalElem),
                        awayGoals: extractGoals(awayGoalElem)
                    });
                }
            } catch (e) {}
        });
        
        fs.writeFileSync('matches.json', JSON.stringify(matches, null, 2));
        console.log('Total found:', matches.length);
        console.log('Sample Match:', JSON.stringify(matches.find(m => m.score), null, 2));
    } catch (e) {
        console.error(e);
    }
})();
