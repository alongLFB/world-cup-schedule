function convertToUAE(dateStr, timeStr) {
    const dateMatch = dateStr.match(/\((\d{4}-\d{2}-\d{2})\)/);
    if (!dateMatch) return null;
    const isoDate = dateMatch[1];
    
    const timeRegex = /(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)\s*UTC[−-](\d)/i;
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
    
    return { time: `${formatHours}:${formatMins}`, displayDate, idDate, utcTimestamp: absoluteUtcDate };
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
        
        let html = `<h2 class="date-header">${group.display}</h2><div class="schedule-grid">`;
        
        filteredMatches.forEach(m => {
            const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
            const scoreDisplay = isFinished ? `<div class="score-badge">${m.score}</div>` : `<div class="vs">VS</div>`;
            const statusHtml = isFinished ? `<span class="status-badge finished">FT</span>` : `<span class="status-badge">Upcoming</span>`;
            
            let detailsHtml = '';
            if(m.events.length > 0) {
                let eventsList = '';
                m.events.forEach(e => {
                    const icon = e.isOwnGoal ? '⚽ (OG)' : '⚽';
                    const extra = e.isPenalty ? ' <span class="pen-text">(pen.)</span>' : (e.isOwnGoal ? ' <span class="og-text">(o.g.)</span>' : '');
                    if(e.team === 'home') {
                        eventsList += `<div class="event-row"><div class="event-home">${e.player} ${e.time}${extra} <span class="event-icon">${icon}</span></div><div class="event-away"></div></div>`;
                    } else {
                        eventsList += `<div class="event-row"><div class="event-home"></div><div class="event-away"><span class="event-icon">${icon}</span> ${e.time} ${e.player}${extra}</div></div>`;
                    }
                });
                detailsHtml = `
                    <button class="btn-details" onclick="toggleDetails('details-${m.id}')">Toggle Match Details ▾</button>
                    <div class="match-details" id="details-${m.id}">${eventsList}</div>
                `;
            }

            html += `
                <div class="match-card">
                    <div class="match-header-row">
                        <div class="match-time">${m.uaeTime} <span style="font-size:0.8rem; font-weight:400; color:#94a3b8">GST</span></div>
                        ${statusHtml}
                    </div>
                    <div class="stadium">Match ${m.id} • FIFA World Cup 2026</div>
                    <div class="match-teams">
                        <div class="team ${m.home === filterTeam ? 'highlight' : ''}" style="${m.home === filterTeam ? 'color: var(--primary)' : ''}">${m.home}</div>
                        ${scoreDisplay}
                        <div class="team team-right ${m.away === filterTeam ? 'highlight' : ''}" style="${m.away === filterTeam ? 'color: var(--primary)' : ''}">${m.away}</div>
                    </div>
                    ${detailsHtml}
                </div>
            `;
        });
        html += `</div>`;
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
    a.download = `WC2026_Schedule${filterTeam !== 'all' ? '_' + filterTeam.replace(/\s+/g, '') : ''}.ics`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

init();
