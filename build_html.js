const fs = require('fs');

const matches = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

// Parse time and offset
// e.g. "1:00 p.m. UTC−6", "12:00 p.m. UTC−7"
function convertToUAE(dateStr, timeStr) {
    // Extract YYYY-MM-DD
    const dateMatch = dateStr.match(/\((\d{4}-\d{2}-\d{2})\)/);
    if (!dateMatch) return { date: dateStr, time: timeStr };
    
    const isoDate = dateMatch[1];
    
    // Extract time
    const timeRegex = /(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)\s*UTC[−-](\d)/i;
    const timeMatch = timeStr.match(timeRegex);
    
    if (!timeMatch) return { date: isoDate, time: timeStr }; // fallback
    
    let hours = parseInt(timeMatch[1], 10);
    const mins = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3].toLowerCase();
    const utcOffset = parseInt(timeMatch[4], 10);
    
    if (ampm === 'p.m.' && hours !== 12) hours += 12;
    if (ampm === 'a.m.' && hours === 12) hours = 0;
    
    // Add offset to get to UTC, then add 4 to get to UAE
    const totalOffset = utcOffset + 4;
    
    let uaeHours = hours + totalOffset;
    let uaeDateObj = new Date(isoDate);
    
    if (uaeHours >= 24) {
        uaeHours -= 24;
        uaeDateObj.setDate(uaeDateObj.getDate() + 1);
    }
    
    const formatHours = uaeHours.toString().padStart(2, '0');
    const formatMins = mins.toString().padStart(2, '0');
    
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const displayDate = uaeDateObj.toLocaleDateString('en-US', options);
    
    return {
        time: `${formatHours}:${formatMins}`,
        date: displayDate
    };
}

let cardsHtml = '';
matches.forEach((match, i) => {
    // some rows are headers or invalid, simple check
    if (!match.date || !match.home || !match.away) return;
    
    const uae = convertToUAE(match.date, match.time);
    const isTbd = match.home === 'TBD' || match.away === 'TBD';
    
    cardsHtml += `
        <div class="match-card">
            <div class="match-date">
                <span>${uae.date} (UAE)</span>
                <span style="color: #00ff87; font-size: 0.8rem">Match ${i+1}</span>
            </div>
            <div class="match-time">${uae.time || match.time} <span style="font-size:0.8rem; font-weight:400; color:#94a3b8">GST</span></div>
            <div class="match-teams">
                <div class="team">${match.home}</div>
                <div class="vs">VS</div>
                <div class="team team-right">${match.away}</div>
            </div>
            <div class="stadium">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                FIFA World Cup 2026
            </div>
        </div>
    `;
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 FIFA World Cup Schedule (UAE Time)</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #00ff87;
            --primary-dark: #00cc6a;
            --bg-dark: #0a0f1c;
            --bg-card: rgba(255, 255, 255, 0.05);
            --text-main: #ffffff;
            --text-muted: #94a3b8;
            --accent: #ff0055;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Outfit', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #050811 0%, #0a0f1c 100%);
            color: var(--text-main);
            min-height: 100vh;
            padding: 40px 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 50px;
        }

        h1 {
            font-size: 3rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: linear-gradient(to right, var(--primary), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }

        p.subtitle {
            font-size: 1.2rem;
            color: var(--text-muted);
            font-weight: 300;
        }

        .timezone-badge {
            display: inline-block;
            background: rgba(0, 255, 135, 0.1);
            color: var(--primary);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-top: 15px;
            border: 1px solid rgba(0, 255, 135, 0.2);
        }

        .stage-title {
            font-size: 1.8rem;
            margin: 40px 0 20px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            color: #fff;
        }

        .schedule-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .match-card {
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 24px;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, border-color 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .match-card:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 255, 135, 0.5);
        }

        .match-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), #00d4ff);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .match-card:hover::before {
            opacity: 1;
        }

        .match-date {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }

        .match-time {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .match-teams {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .team {
            font-size: 1.2rem;
            font-weight: 600;
            width: 40%;
        }

        .team-right {
            text-align: right;
        }

        .vs {
            font-size: 0.9rem;
            color: var(--text-muted);
            font-weight: 800;
            background: rgba(255, 255, 255, 0.1);
            padding: 5px 10px;
            border-radius: 8px;
        }

        .stadium {
            font-size: 0.85rem;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .stadium svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
        }

        /* Responsive */
        @media (max-width: 600px) {
            h1 { font-size: 2rem; }
            .schedule-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>2026 World Cup Schedule</h1>
        <p class="subtitle">Complete Official Match Schedule</p>
        <div class="timezone-badge">📍 All Times in UAE Time (GST / UTC+4)</div>
    </header>

    <h2 class="stage-title">All Matches</h2>
    <div class="schedule-grid" id="schedule-grid">
        ${cardsHtml}
    </div>

</div>

</body>
</html>
`;

fs.writeFileSync('schedule.html', html);
console.log('Done generating schedule.html');
