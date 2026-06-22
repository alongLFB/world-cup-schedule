const i18n = {
    en: {
        timeline: "Timeline",
        title: "2026 World Cup Schedule",
        subtitle: "Live Scores & Official Match Schedule",
        tzBadge: () => `📍 Local Time (${Intl.DateTimeFormat().resolvedOptions().timeZone})`,
        allTeams: "All Teams",
        exportBtn: "Export to Calendar",
        shareBtn: "Share",
        langToggle: "🌐 中文",
        upcoming: "Upcoming",
        finished: "FT",
        matchText: (id) => `Match ${id} • FIFA World Cup 2026`,
        toggleDetails: "Toggle Match Details ▾",
        noMatches: "No matches found for the selected filter.",
        iosHint: "💡 <strong>Tip for iOS Users:</strong> Please open this page in the built-in <strong>Safari</strong> browser to seamlessly import events into your calendar.",
        shareText: "🏆 Check out the 2026 World Cup Live Schedule & Scores (Local Time)! https://worldcup2026.alonglfb.com/",
        copied: "Copied to clipboard!"
    },
    zh: {
        timeline: "时间轴",
        title: "2026 世界杯赛程",
        subtitle: "实时比分与官方赛程表",
        tzBadge: () => `📍 本地时间 (${Intl.DateTimeFormat().resolvedOptions().timeZone})`,
        allTeams: "所有球队",
        exportBtn: "导出到日历",
        shareBtn: "分享",
        langToggle: "🌐 English",
        upcoming: "未开赛",
        finished: "完场",
        matchText: (id) => `第 ${id} 场 • 2026 FIFA 世界杯`,
        toggleDetails: "查看对局详情 ▾",
        noMatches: "未找到符合条件的比赛。",
        iosHint: "💡 <strong>iOS 用户提示：</strong> 请使用系统自带的 <strong>Safari</strong> 浏览器打开本页面，以便无缝导入日历。",
        shareText: "🏆 2026美加墨世界杯赛程与实时比分 (自动适配本地时区)！快来看看吧：https://worldcup2026.alonglfb.com/",
        copied: "已复制到剪贴板！"
    }
};

const teamNamesZH = {
    "Mexico": "墨西哥", "South Africa": "南非", "United States": "美国", "Argentina": "阿根廷",
    "Canada": "加拿大", "Brazil": "巴西", "France": "法国", "England": "英格兰",
    "Spain": "西班牙", "Portugal": "葡萄牙", "Germany": "德国", "Italy": "意大利",
    "Netherlands": "荷兰", "Belgium": "比利时", "Croatia": "克罗地亚", "Uruguay": "乌拉圭",
    "Japan": "日本", "South Korea": "韩国", "Morocco": "摩洛哥", "Senegal": "塞内加尔",
    "Iran": "伊朗", "Saudi Arabia": "沙特阿拉伯", "Australia": "澳大利亚", "Ecuador": "厄瓜多尔",
    "Switzerland": "瑞士", "Denmark": "丹麦", "Colombia": "哥伦比亚", "Serbia": "塞尔维亚",
    "Poland": "波兰", "Cameroon": "喀麦隆", "Ghana": "加纳", "Tunisia": "突尼斯",
    "Costa Rica": "哥斯达黎加", "Wales": "威尔士", "Qatar": "卡塔尔", "Nigeria": "尼日利亚",
    "Egypt": "埃及", "Algeria": "阿尔及利亚", "Mali": "马里", "Ivory Coast": "科特迪瓦",
    "Peru": "秘鲁", "Chile": "智利", "Sweden": "瑞典", "Norway": "挪威", "Czech Republic": "捷克",
    "Austria": "奥地利", "Hungary": "匈牙利", "Turkey": "土耳其", "Ukraine": "乌克兰",
    "Winner": "胜者", "Runner-up": "第二名", "Third place": "第三名"
};

let currentLang = localStorage.getItem('lang') || 'en';

function translateTeam(teamEn) {
    if (currentLang === 'en') return teamEn;
    // Handle partial matches for unconfirmed teams like "Winner Match 1"
    if (teamEn.includes('Winner Match')) return teamEn.replace('Winner Match', '胜者场次');
    if (teamEn.includes('Runner-up Group')) return teamEn.replace('Runner-up Group', '小组第二');
    if (teamEn.includes('Winner Group')) return teamEn.replace('Winner Group', '小组第一');
    return teamNamesZH[teamEn] || teamEn;
}

function formatDate(dateObj) {
    if (currentLang === 'zh') {
        const options = { month: 'short', day: 'numeric', weekday: 'short' };
        return dateObj.toLocaleDateString('zh-CN', options);
    } else {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    }
}

function convertToLocal(dateStr, timeStr) {
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
    
    // Calculate precise UTC Date based on original string
    let absoluteUtcDate = new Date(isoDate + "T00:00:00Z");
    absoluteUtcDate.setUTCHours(hours + utcOffset, mins, 0, 0); 
    
    // JS automatically computes local representation via native methods
    const formatHours = absoluteUtcDate.getHours().toString().padStart(2, '0');
    const formatMins = absoluteUtcDate.getMinutes().toString().padStart(2, '0');
    
    const idDate = absoluteUtcDate.getFullYear() + "-" + 
                   (absoluteUtcDate.getMonth() + 1).toString().padStart(2, '0') + "-" +
                   absoluteUtcDate.getDate().toString().padStart(2, '0');
    
    return { 
        time: `${formatHours}:${formatMins}`, 
        idDate, 
        utcTimestamp: absoluteUtcDate,
        dateObj: absoluteUtcDate
    };
}

const matchesData = [];
const teamsSet = new Set();

rawMatches.forEach((m, idx) => {
    if (!m.date || !m.home || !m.away) return;
    const localTimeData = convertToLocal(m.date, m.time);
    if (!localTimeData) return;
    
    teamsSet.add(m.home);
    teamsSet.add(m.away);

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
    events.sort((a,b) => {
        const getMin = (t) => parseInt(t.replace(/[^0-9]/g, '')) || 0;
        return getMin(a.time) - getMin(b.time);
    });
    
    matchesData.push({
        id: idx + 1,
        homeEn: m.home,
        awayEn: m.away,
        score: m.score,
        events: events,
        localTime: localTimeData.time,
        idDate: localTimeData.idDate,
        utcTimestamp: localTimeData.utcTimestamp,
        dateObj: localTimeData.dateObj
    });
});

const scheduleContainer = document.getElementById('schedule-container');
const timelineContainer = document.getElementById('timeline');
const teamFilter = document.getElementById('team-filter');
const exportBtn = document.getElementById('export-btn');
const shareBtn = document.getElementById('share-btn');
const langToggle = document.getElementById('lang-toggle');
const toast = document.getElementById('toast');

function initStaticI18n() {
    const t = i18n[currentLang];
    document.getElementById('sidebar-title').textContent = t.timeline;
    document.getElementById('title-main').textContent = t.title;
    document.getElementById('title-sub').textContent = t.subtitle;
    document.getElementById('tz-badge').textContent = t.tzBadge();
    document.getElementById('opt-all').textContent = t.allTeams;
    document.getElementById('btn-export-text').textContent = t.exportBtn;
    document.getElementById('btn-share-text').textContent = t.shareBtn;
    langToggle.textContent = t.langToggle;
    document.getElementById('ios-hint-text').innerHTML = t.iosHint;
}

function init() {
    const sortedTeams = Array.from(teamsSet).sort();
    sortedTeams.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t; 
        opt.textContent = t; // Will be updated on render based on lang
        teamFilter.appendChild(opt);
    });

    teamFilter.addEventListener('change', () => renderSchedule(teamFilter.value));
    exportBtn.addEventListener('click', () => exportICS(teamFilter.value));
    
    shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(i18n[currentLang].shareText).then(() => {
            toast.textContent = i18n[currentLang].copied;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        });
    });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('lang', currentLang);
        initStaticI18n();
        renderSchedule(teamFilter.value);
    });
    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        document.getElementById('ios-hint').style.display = 'block';
    }
    
    initStaticI18n();
    renderSchedule('all');
    scrollToCurrentDay();
}

function renderSchedule(filterTeam) {
    scheduleContainer.innerHTML = '';
    timelineContainer.innerHTML = '';
    
    // Update select options language dynamically
    Array.from(teamFilter.options).forEach(opt => {
        if (opt.value === 'all') opt.textContent = i18n[currentLang].allTeams;
        else opt.textContent = translateTeam(opt.value);
    });

    const groupedMatches = {};
    matchesData.forEach(m => {
        if(!groupedMatches[m.idDate]) { groupedMatches[m.idDate] = { display: formatDate(m.dateObj), matches: [] }; }
        groupedMatches[m.idDate].matches.push(m);
    });
    const sortedDates = Object.keys(groupedMatches).sort();

    let hasVisibleMatches = false;

    sortedDates.forEach(dateKey => {
        const group = groupedMatches[dateKey];
        const filteredMatches = filterTeam === 'all' 
            ? group.matches 
            : group.matches.filter(m => m.homeEn === filterTeam || m.awayEn === filterTeam);
            
        if (filteredMatches.length === 0) return;
        hasVisibleMatches = true;

        const link = document.createElement('a');
        link.href = '#' + dateKey;
        // Keep timeline concise
        link.textContent = currentLang === 'zh' ? group.display : group.display.split(',')[0] + ' ' + group.display.split(',')[1]; 
        timelineContainer.appendChild(link);

        const section = document.createElement('div');
        section.className = 'date-section';
        section.id = dateKey;
        
        let html = `<h2 class="date-header">${group.display}</h2><div class="schedule-grid">`;
        
        filteredMatches.forEach(m => {
            const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
            const scoreDisplay = isFinished ? `<div class="score-badge">${m.score}</div>` : `<div class="vs">VS</div>`;
            const statusHtml = isFinished ? `<span class="status-badge finished">${i18n[currentLang].finished}</span>` : `<span class="status-badge">${i18n[currentLang].upcoming}</span>`;
            
            const hTeam = translateTeam(m.homeEn);
            const aTeam = translateTeam(m.awayEn);

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
                    <button class="btn-details" onclick="toggleDetails('details-${m.id}')">${i18n[currentLang].toggleDetails}</button>
                    <div class="match-details" id="details-${m.id}">${eventsList}</div>
                `;
            }

            html += `
                <div class="match-card">
                    <div class="match-header-row">
                        <div class="match-time">${m.localTime}</div>
                        ${statusHtml}
                    </div>
                    <div class="stadium">${i18n[currentLang].matchText(m.id)}</div>
                    <div class="match-teams">
                        <div class="team ${m.homeEn === filterTeam ? 'highlight' : ''}" style="${m.homeEn === filterTeam ? 'color: var(--primary)' : ''}">${hTeam}</div>
                        ${scoreDisplay}
                        <div class="team team-right ${m.awayEn === filterTeam ? 'highlight' : ''}" style="${m.awayEn === filterTeam ? 'color: var(--primary)' : ''}">${aTeam}</div>
                    </div>
                    ${detailsHtml}
                </div>
            `;
        });
        html += `</div>`;
        section.innerHTML = html;
        scheduleContainer.appendChild(section);
    });

    if (!hasVisibleMatches) scheduleContainer.innerHTML = `<div class="empty-state">${i18n[currentLang].noMatches}</div>`;
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
    else if (matchesData.length > 0) {
        // Just scroll to first available date element if future match
        const sortedDates = Array.from(new Set(matchesData.map(m=>m.idDate))).sort();
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
    let matchesToExport = filterTeam !== 'all' ? matchesData.filter(m => m.homeEn === filterTeam || m.awayEn === filterTeam) : matchesData;
    if (matchesToExport.length === 0) return alert('No matches to export');
    
    let icsContent = "BEGIN:VCALENDAR\\nVERSION:2.0\\nPRODID:-//2026 World Cup Schedule//EN\\nCALSCALE:GREGORIAN\\n";
    matchesToExport.forEach(m => {
        const dtstart = m.utcTimestamp.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const dtend = new Date(m.utcTimestamp.getTime() + 2 * 3600000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const hTeam = translateTeam(m.homeEn);
        const aTeam = translateTeam(m.awayEn);
        icsContent += "BEGIN:VEVENT\\nDTSTART:" + dtstart + "\\nDTEND:" + dtend + "\\nSUMMARY:World Cup: " + hTeam + " vs " + aTeam + "\\nLOCATION:FIFA World Cup Venue\\nUID:wc-" + m.id + "\\nEND:VEVENT\\n";
    });
    icsContent += "END:VCALENDAR";

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `WC2026_Schedule${filterTeam !== 'all' ? '_' + filterTeam.replace(/\s+/g, '') : ''}.ics`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

init();
