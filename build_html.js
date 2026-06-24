const fs = require('fs');

const matches = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

// Generate version timestamp YYYYMMDDHHMMSS
const now = new Date();
const pad = n => n.toString().padStart(2, '0');
const version = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 FIFA World Cup Schedule & Live Scores</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css?v=${version}">
</head>
<body>

<div class="layout">
    <aside class="sidebar">
        <h3 id="sidebar-title">Timeline</h3>
        <div class="timeline-links" id="timeline"></div>
    </aside>

    <main class="main-content">
        <header>
            <h1 id="title-main">2026 World Cup Schedule</h1>
            <p class="subtitle" id="title-sub">Live Scores & Official Match Schedule</p>
            <div class="timezone-badge" id="tz-badge">📍 Auto-detecting Local Time...</div>
        </header>

        <div class="top-actions">
            <button class="btn-export" id="export-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span id="btn-export-text">Export to Calendar</span>
            </button>
            <button class="btn-share" id="share-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                <span id="btn-share-text">Share</span>
            </button>
            <button class="btn-export" id="btn-toggle-view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                <span id="btn-toggle-text">Bracket View</span>
            </button>
            <button class="btn-lang" id="lang-toggle">🌐 中文</button>
        </div>

        <div class="controls-wrapper">
            <div class="filter-bar">
                <div class="search-box">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="search-input" placeholder="Search a team (e.g. Brazil, ARG)">
                </div>
                <div class="stage-filters" id="stage-filters">
                    <button class="stage-btn active" data-stage="ALL">ALL</button>
                    <button class="stage-btn" data-stage="GROUP">GROUP</button>
                    <button class="stage-btn" data-stage="R32">R32</button>
                    <button class="stage-btn" data-stage="R16">R16</button>
                    <button class="stage-btn" data-stage="QF">QF</button>
                    <button class="stage-btn" data-stage="SF">SF</button>
                    <button class="stage-btn" data-stage="FINAL">FINAL</button>
                </div>
                <div class="group-filter">
                    <span id="lbl-group">GROUP</span>
                    <select id="group-select">
                        <option value="ALL">All</option>
                        <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option>
                        <option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option>
                        <option value="I">I</option><option value="J">J</option><option value="K">K</option><option value="L">L</option>
                    </select>
                </div>
            </div>
            <div class="filter-summary">
                <div id="match-count">0 matches coming up</div>
                <button id="clear-filters">CLEAR FILTERS</button>
            </div>
        </div>
        <div class="ios-hint" id="ios-hint">
            <span id="ios-hint-text">💡 <strong>Tip for iOS Users:</strong> Please open this page in the built-in <strong>Safari</strong> browser to seamlessly import events into your calendar.</span>
        </div>

        <div id="schedule-container"></div>
        <div id="bracket-view" style="display: none;">
            <div class="filter-summary" style="margin-bottom: 15px; justify-content: center; box-shadow: none; border: none; background: transparent;">
                <button id="btn-download-bracket" class="btn-export">📸 Download Bracket Image</button>
            </div>
            <div class="bracket-scroll-container">
                <div class="bracket-container" id="bracket-container">
                    <!-- Bracket gets rendered here -->
                </div>
            </div>
        </div>
    </main>
</div>

<div class="toast" id="toast">Copied to clipboard!</div>

<script>
    const rawMatches = ${JSON.stringify(matches)};
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="app.js?v=${version}"></script>
</body>
</html>`;

fs.writeFileSync('schedule.html', html);
console.log(`Done generating schedule.html with cache-busting version v=${version}`);
