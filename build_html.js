const fs = require('fs');

const matches = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

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
            --timeline-w: 200px;
        }

        html { scroll-behavior: smooth; }
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
        }

        .layout {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Sidebar & Layout styles same as before */
        .sidebar {
            width: var(--timeline-w);
            padding: 40px 20px;
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            border-right: 1px solid rgba(255,255,255,0.1);
        }
        .sidebar::-webkit-scrollbar { width: 6px; }
        .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
        .sidebar h3 { color: var(--primary); margin-bottom: 20px; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; }
        .timeline-links { display: flex; flex-direction: column; gap: 10px; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 15px; }
        .timeline-links a { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; position: relative; }
        .timeline-links a::before { content: ''; position: absolute; left: -21px; top: 50%; transform: translateY(-50%); width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); transition: background 0.2s; }
        .timeline-links a:hover, .timeline-links a.active { color: #fff; font-weight: 600; }
        .timeline-links a:hover::before, .timeline-links a.active::before { background: var(--primary); }

        .main-content { flex: 1; padding: 40px; position: relative; }
        header { margin-bottom: 40px; }
        h1 { font-size: 2.5rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; background: linear-gradient(to right, var(--primary), #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
        p.subtitle { font-size: 1.1rem; color: var(--text-muted); font-weight: 300; }
        .timezone-badge { display: inline-block; background: rgba(0, 255, 135, 0.1); color: var(--primary); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-top: 10px; border: 1px solid rgba(0, 255, 135, 0.2); }

        .controls { display: flex; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; align-items: center; }
        select { padding: 10px 15px; background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; font-size: 1rem; outline: none; cursor: pointer; backdrop-filter: blur(10px); }
        select:focus { border-color: var(--primary); }
        select option { background: var(--bg-dark); }
        .btn-export { padding: 10px 20px; background: linear-gradient(45deg, var(--primary), var(--primary-dark)); color: #000; border: none; border-radius: 8px; font-size: 1rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: opacity 0.2s; }
        .btn-export:hover { opacity: 0.9; }

        .date-section { margin-bottom: 50px; scroll-margin-top: 100px; }
        .date-header { font-size: 1.5rem; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid rgba(255, 255, 255, 0.1); color: #fff; padding-top: 20px; }
        
        .schedule-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
        
        .match-card {
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, border-color 0.3s ease;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .match-card:hover { transform: translateY(-2px); border-color: rgba(0, 255, 135, 0.5); }
        .match-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--primary), #00d4ff); opacity: 0; transition: opacity 0.3s ease; }
        .match-card:hover::before { opacity: 1; }

        .match-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .match-time { font-size: 1.2rem; font-weight: 800; color: var(--primary); }
        .status-badge { font-size: 0.75rem; background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; color: #fff; }
        .status-badge.finished { background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid rgba(0, 212, 255, 0.4); }

        .match-teams { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .team { font-size: 1.1rem; font-weight: 600; width: 38%; }
        .team-right { text-align: right; }
        .vs { font-size: 0.8rem; color: var(--text-muted); font-weight: 800; background: rgba(255, 255, 255, 0.1); padding: 4px 8px; border-radius: 6px; }
        .score-badge { font-size: 1.4rem; font-weight: 800; background: rgba(255, 255, 255, 0.15); padding: 4px 12px; border-radius: 8px; color: #fff; border: 1px solid rgba(255,255,255,0.3); letter-spacing: 1px; }

        .stadium { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 15px; }

        /* Match Details Panel */
        .btn-details {
            margin-top: auto;
            width: 100%;
            padding: 8px;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 6px;
            color: #fff;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background 0.2s;
        }
        .btn-details:hover { background: rgba(255,255,255,0.1); }
        
        .match-details {
            display: none;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        .match-details.open { display: block; animation: fadeIn 0.3s ease; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }

        .event-row { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px; }
        .event-home { width: 45%; text-align: right; color: #ddd; }
        .event-away { width: 45%; text-align: left; color: #ddd; }
        .event-icon { font-size: 0.8rem; margin: 0 4px; }
        .pen-text { color: var(--accent); font-size: 0.7rem; font-style: italic; }
        .og-text { color: #ffae00; font-size: 0.7rem; font-style: italic; }

        @media (max-width: 900px) {
            .layout { flex-direction: column; }
            .sidebar { width: 100%; height: auto; position: sticky; top: 0; z-index: 100; background: var(--bg-dark); border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 15px; }
            .sidebar h3 { display: none; }
            .timeline-links { flex-direction: row; flex-wrap: nowrap; overflow-x: auto; border-left: none; padding-left: 0; padding-bottom: 5px; gap: 8px; -webkit-overflow-scrolling: touch; }
            .timeline-links::-webkit-scrollbar { display: none; }
            .timeline-links a::before { display: none; }
            .timeline-links a { background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 20px; white-space: nowrap; }
            .timeline-links a.active { background: var(--primary); color: #000; }
            .main-content { padding: 20px; }
            .date-header { padding-top: 0; }
        }
        
        .ios-hint {
            font-size: 0.85rem;
            color: #ffae00;
            background: rgba(255, 174, 0, 0.1);
            padding: 8px 12px;
            border-radius: 6px;
            margin-top: -25px;
            margin-bottom: 30px;
            display: none;
            border: 1px solid rgba(255, 174, 0, 0.2);
        }
    </style>
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
    const rawMatches = ${JSON.stringify(matches)};

    function convertToUAE(dateStr, timeStr) {
        const dateMatch = dateStr.match(/\\((\\d{4}-\\d{2}-\\d{2})\\)/);
        if (!dateMatch) return null;
        const isoDate = dateMatch[1];
        
        const timeRegex = /(\\d{1,2}):(\\d{2})\\s*(a\\.m\\.|p\\.m\\.)\\s*UTC[−-](\\d)/i;
        const timeMatch = timeStr.match(timeRegex);
        if (!timeMatch) return null;
        
        let hours = parseInt(timeMatch[1], 10);
        const mins = parseInt(timeMatch[2], 10);
        const ampm = timeMatch[3].toLowerCase();
        const utcOffset = parseInt(timeMatch[4], 10);
        
        if (ampm === 'p.m.' && hours !== 12) hours += 12;
        if (ampm === 'a.m.' && hours === 12) hours = 0;
        
        const totalOffset = utcOffset + 4; 
        
        let uaeDateObj = new Date(isoDate + "T00:00:00Z");
        uaeDateObj.setUTCHours(hours + totalOffset, mins, 0, 0); 
        
        const formatHours = uaeDateObj.getUTCHours().toString().padStart(2, '0');
        const formatMins = uaeDateObj.getUTCMinutes().toString().padStart(2, '0');
        
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const displayDate = uaeDateObj.toLocaleDateString('en-US', { timeZone: 'UTC', ...options});
        const idDate = uaeDateObj.toISOString().split('T')[0]; 
        
        let absoluteUtcDate = new Date(isoDate + "T00:00:00Z");
        absoluteUtcDate.setUTCHours(hours + utcOffset, mins, 0, 0); 
        
        return { time: \`\${formatHours}:\${formatMins}\`, displayDate, idDate, utcTimestamp: absoluteUtcDate };
    }

    const matchesData = [];
    const teamsSet = new Set();
    
    rawMatches.forEach((m, idx) => {
        if (!m.date || !m.home || !m.away) return;
        const uae = convertToUAE(m.date, m.time);
        if (!uae) return;
        
        teamsSet.add(m.home);
        teamsSet.add(m.away);

        // Normalize goal events to a single timeline
        let events = [];
        if(m.homeGoals) {
            m.homeGoals.forEach(g => {
                g.times.forEach(t => events.push({ team: 'home', player: g.player, time: t, isPenalty: g.isPenalty, isOwnGoal: g.isOwnGoal }));
            });
        }
        if(m.awayGoals) {
            m.awayGoals.forEach(g => {
                g.times.forEach(t => events.push({ team: 'away', player: g.player, time: t, isPenalty: g.isPenalty, isOwnGoal: g.isOwnGoal }));
            });
        }
        
        // Sort events by minute
        events.sort((a,b) => {
            const getMin = (t) => parseInt(t.replace(/[^0-9]/g, '')) || 0;
            return getMin(a.time) - getMin(b.time);
        });
        
        matchesData.push({
            id: idx + 1,
            home: m.home,
            away: m.away,
            score: m.score,
            events: events,
            uaeTime: uae.time,
            displayDate: uae.displayDate,
            idDate: uae.idDate,
            utcTimestamp: uae.utcTimestamp
        });
    });

    const groupedMatches = {};
    matchesData.forEach(m => {
        if(!groupedMatches[m.idDate]) { groupedMatches[m.idDate] = { display: m.displayDate, matches: [] }; }
        groupedMatches[m.idDate].matches.push(m);
    });
    const sortedDates = Object.keys(groupedMatches).sort();

    const scheduleContainer = document.getElementById('schedule-container');
    const timelineContainer = document.getElementById('timeline');
    const teamFilter = document.getElementById('team-filter');
    const exportBtn = document.getElementById('export-btn');

    function init() {
        const sortedTeams = Array.from(teamsSet).sort();
        sortedTeams.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t; opt.textContent = t; teamFilter.appendChild(opt);
        });

        teamFilter.addEventListener('change', () => renderSchedule(teamFilter.value));
        exportBtn.addEventListener('click', () => exportICS(teamFilter.value));
        
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            document.getElementById('ios-hint').style.display = 'block';
        }
        
        renderSchedule('all');
        scrollToCurrentDay();
    }

    function renderSchedule(filterTeam) {
        scheduleContainer.innerHTML = '';
        timelineContainer.innerHTML = '';
        let hasVisibleMatches = false;

        sortedDates.forEach(dateKey => {
            const group = groupedMatches[dateKey];
            const filteredMatches = filterTeam === 'all' 
                ? group.matches 
                : group.matches.filter(m => m.home === filterTeam || m.away === filterTeam);
                
            if (filteredMatches.length === 0) return;
            hasVisibleMatches = true;

            const link = document.createElement('a');
            link.href = '#' + dateKey;
            link.textContent = group.display.replace(', 2026', ''); 
            timelineContainer.appendChild(link);

            const section = document.createElement('div');
            section.className = 'date-section';
            section.id = dateKey;
            
            let html = \`<h2 class="date-header">\${group.display}</h2><div class="schedule-grid">\`;
            
            filteredMatches.forEach(m => {
                const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
                const scoreDisplay = isFinished ? \`<div class="score-badge">\${m.score}</div>\` : \`<div class="vs">VS</div>\`;
                const statusHtml = isFinished ? \`<span class="status-badge finished">FT</span>\` : \`<span class="status-badge">Upcoming</span>\`;
                
                let detailsHtml = '';
                if(m.events.length > 0) {
                    let eventsList = '';
                    m.events.forEach(e => {
                        const icon = e.isOwnGoal ? '⚽ (OG)' : '⚽';
                        const extra = e.isPenalty ? ' <span class="pen-text">(pen.)</span>' : (e.isOwnGoal ? ' <span class="og-text">(o.g.)</span>' : '');
                        if(e.team === 'home') {
                            eventsList += \`<div class="event-row"><div class="event-home">\${e.player} \${e.time}\${extra} <span class="event-icon">\${icon}</span></div><div class="event-away"></div></div>\`;
                        } else {
                            eventsList += \`<div class="event-row"><div class="event-home"></div><div class="event-away"><span class="event-icon">\${icon}</span> \${e.time} \${e.player}\${extra}</div></div>\`;
                        }
                    });
                    detailsHtml = \`
                        <button class="btn-details" onclick="toggleDetails('details-\${m.id}')">Toggle Match Details ▾</button>
                        <div class="match-details" id="details-\${m.id}">\${eventsList}</div>
                    \`;
                }

                html += \`
                    <div class="match-card">
                        <div class="match-header-row">
                            <div class="match-time">\${m.uaeTime} <span style="font-size:0.8rem; font-weight:400; color:#94a3b8">GST</span></div>
                            \${statusHtml}
                        </div>
                        <div class="stadium">Match \${m.id} • FIFA World Cup 2026</div>
                        <div class="match-teams">
                            <div class="team \${m.home === filterTeam ? 'highlight' : ''}" style="\${m.home === filterTeam ? 'color: var(--primary)' : ''}">\${m.home}</div>
                            \${scoreDisplay}
                            <div class="team team-right \${m.away === filterTeam ? 'highlight' : ''}" style="\${m.away === filterTeam ? 'color: var(--primary)' : ''}">\${m.away}</div>
                        </div>
                        \${detailsHtml}
                    </div>
                \`;
            });
            html += \`</div>\`;
            section.innerHTML = html;
            scheduleContainer.appendChild(section);
        });

        if (!hasVisibleMatches) scheduleContainer.innerHTML = '<div class="empty-state">No matches found for the selected filter.</div>';
        setupScrollSpy();
    }

    window.toggleDetails = function(id) {
        const el = document.getElementById(id);
        if(el.classList.contains('open')) el.classList.remove('open');
        else el.classList.add('open');
    }

    function scrollToCurrentDay() {
        const todayStr = new Date().toISOString().split('T')[0];
        const targetElement = document.getElementById(todayStr);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
        else if (sortedDates.length > 0) {
            const nextDate = sortedDates.find(d => d > todayStr);
            if (nextDate) document.getElementById(nextDate).scrollIntoView({ behavior: 'smooth' });
        }
    }

    function setupScrollSpy() {
        const sections = document.querySelectorAll('.date-section');
        const navLinks = document.querySelectorAll('.timeline-links a');
        if(sections.length === 0) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + entry.target.getAttribute('id')) {
                            link.classList.add('active');
                            link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px' });
        sections.forEach(sec => observer.observe(sec));
    }

    function exportICS(filterTeam) {
        let matchesToExport = filterTeam !== 'all' ? matchesData.filter(m => m.home === filterTeam || m.away === filterTeam) : matchesData;
        if (matchesToExport.length === 0) return alert('No matches to export');
        
        let icsContent = "BEGIN:VCALENDAR\\nVERSION:2.0\\nPRODID:-//2026 World Cup Schedule//EN\\nCALSCALE:GREGORIAN\\n";
        matchesToExport.forEach(m => {
            const dtstart = m.utcTimestamp.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
            const dtend = new Date(m.utcTimestamp.getTime() + 2 * 3600000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
            icsContent += "BEGIN:VEVENT\\nDTSTART:" + dtstart + "\\nDTEND:" + dtend + "\\nSUMMARY:World Cup: " + m.home + " vs " + m.away + "\\nLOCATION:FIFA World Cup Venue\\nUID:wc-" + m.id + "\\nEND:VEVENT\\n";
        });
        icsContent += "END:VCALENDAR";

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = \`WC2026_Schedule\${filterTeam !== 'all' ? '_' + filterTeam.replace(/\\s+/g, '') : ''}.ics\`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }

    init();
</script></body></html>`;

fs.writeFileSync('schedule.html', html);
console.log('Done generating schedule.html with match scores and details.');
