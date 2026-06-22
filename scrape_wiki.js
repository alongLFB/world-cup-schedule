const { JSDOM } = require('jsdom');

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
                const stadiumElem = box.nextElementSibling; // Sometimes stadium is in the following element or div
                
                if (dateElem && timeElem && homeElem && awayElem) {
                    matches.push({
                        date: dateElem.textContent.trim(),
                        time: timeElem.textContent.trim(),
                        home: homeElem.textContent.trim(),
                        away: awayElem.textContent.trim()
                    });
                }
            } catch (e) {}
        });
        
        console.log(JSON.stringify(matches.slice(0, 15), null, 2));
        require('fs').writeFileSync('matches.json', JSON.stringify(matches, null, 2));
        console.log('Total found:', matches.length);
    } catch (e) {
        console.error(e);
    }
})();
