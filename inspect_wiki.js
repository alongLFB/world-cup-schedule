const { JSDOM } = require('jsdom');
(async () => {
    try {
        const response = await fetch('https://en.wikipedia.org/wiki/2026_FIFA_World_Cup');
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
        const firstMatch = document.querySelector('.footballbox');
        if(firstMatch) {
            console.log(firstMatch.innerHTML);
        } else {
            console.log("No footballbox found");
        }
    } catch (e) {
        console.error(e);
    }
})();
