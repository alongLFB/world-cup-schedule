const fs = require('fs');
let code = fs.readFileSync('build_html.js', 'utf8');

const cssMatch = code.match(/<style>([\s\S]*?)<\/style>/);
const cssContent = cssMatch[1];

const jsMatch = code.match(/<script>\s*const rawMatches = \$\{JSON\.stringify\(matches\)\};\s*([\s\S]*?)<\/script>/);
const jsContent = jsMatch[1];

const newBuildHtml = `const fs = require('fs');

const matches = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

// Generate version timestamp YYYYMMDDHHMMSS
const now = new Date();
const pad = n => n.toString().padStart(2, '0');
const version = \`\${now.getFullYear()}\${pad(now.getMonth()+1)}\${pad(now.getDate())}\${pad(now.getHours())}\${pad(now.getMinutes())}\${pad(now.getSeconds())}\`;

const cssContent = \`${cssContent.replace(/`/g, '\\`')}\`;

const jsContent = \`${jsContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`;

fs.writeFileSync('style.css', cssContent);
fs.writeFileSync('app.js', jsContent);

const html = \`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 FIFA World Cup Schedule (UAE Time)</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css?v=\${version}">
</head>
<body>

<div class="layout">
    <aside class="sidebar">
        <h3>Timeline</h3>
        <div class="timeline-links" id="timeline"></div>
    </aside>

    <main class="main-content">
        <header>
            <h1>2026 World Cup Schedule</h1>
            <p class="subtitle">Live Scores & Official Match Schedule</p>
            <div class="timezone-badge">📍 All Times in UAE Time (GST / UTC+4)</div>
        </header>

        <div class="controls">
            <select id="team-filter"><option value="all">All Teams</option></select>
            <button class="btn-export" id="export-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Export to Calendar (iOS/.ics)
            </button>
        </div>
        <div class="ios-hint" id="ios-hint">
            💡 <strong>Tip for iOS Users:</strong> Please open this page in the built-in <strong>Safari</strong> browser to seamlessly import events into your calendar.
        </div>

        <div id="schedule-container"></div>
    </main>
</div>

<script>
    const rawMatches = \${JSON.stringify(matches)};
</script>
<script src="app.js?v=\${version}"></script>
</body></html>\`;

fs.writeFileSync('build_html.js', newBuildHtml);
console.log('Successfully refactored build_html.js');
