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
        copied: "Copied to clipboard!",
        matchesComingUp: (n) => `${n} matches coming up`,
        historyMatches: "History Matches"
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
        copied: "已复制到剪贴板！",
        matchesComingUp: (n) => `即将进行 ${n} 场比赛`,
        historyMatches: "历史比赛"
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
    "Winner": "胜者", "Runner-up": "第二名", "Third place": "第三名",
    "Bosnia and Herzegovina": "波黑", "Haiti": "海地", "Scotland": "苏格兰", "Paraguay": "巴拉圭",
    "Curaçao": "库拉索", "New Zealand": "新西兰", "Cape Verde": "佛得角", "Iraq": "伊拉克",
    "Jordan": "约旦", "DR Congo": "民主刚果", "Uzbekistan": "乌兹别克斯坦", "Panama": "巴拿马"
};

const venueNamesZH = {
    "AT&T Stadium, Arlington": "AT&T体育场，阿灵顿",
    "Arrowhead Stadium, Kansas City": "箭头体育场，堪萨斯城",
    "BC Place, Vancouver": "卑诗体育馆，温哥华",
    "BMO Field, Toronto": "BMO球场，多伦多",
    "Estadio Akron, Zapopan": "阿克伦体育场，萨波潘",
    "Estadio Azteca, Mexico City": "阿兹特克体育场，墨西哥城",
    "Estadio BBVA, Guadalupe": "BBVA体育场，瓜达卢佩",
    "Gillette Stadium, Foxborough": "吉列体育场，福克斯堡",
    "Hard Rock Stadium, Miami Gardens": "硬石体育场，迈阿密花园",
    "Levi's Stadium, Santa Clara": "李维斯体育场，圣克拉拉",
    "Lincoln Financial Field, Philadelphia": "林肯金融体育场，费城",
    "Lumen Field, Seattle": "流明体育场，西雅图",
    "Mercedes-Benz Stadium, Atlanta": "梅赛德斯-奔驰体育场，亚特兰大",
    "MetLife Stadium, East Rutherford": "大都会人寿体育场，东卢瑟福",
    "NRG Stadium, Houston": "NRG体育场，休斯敦",
    "SoFi Stadium, Inglewood": "SoFi体育场，英格尔伍德"
};

const groupMappings = {
    'Mexico': 'A', 'South Africa': 'A', 'South Korea': 'A', 'Czech Republic': 'A',
    'Canada': 'B', 'Bosnia and Herzegovina': 'B', 'Qatar': 'B', 'Switzerland': 'B',
    'Brazil': 'C', 'Morocco': 'C', 'Haiti': 'C', 'Scotland': 'C',
    'United States': 'D', 'Paraguay': 'D', 'Australia': 'D', 'Turkey': 'D',
    'Germany': 'E', 'Curaçao': 'E', 'Ivory Coast': 'E', 'Ecuador': 'E',
    'Netherlands': 'F', 'Japan': 'F', 'Sweden': 'F', 'Tunisia': 'F',
    'Belgium': 'G', 'Egypt': 'G', 'Iran': 'G', 'New Zealand': 'G',
    'Spain': 'H', 'Cape Verde': 'H', 'Saudi Arabia': 'H', 'Uruguay': 'H',
    'France': 'I', 'Senegal': 'I', 'Iraq': 'I', 'Norway': 'I',
    'Argentina': 'J', 'Algeria': 'J', 'Austria': 'J', 'Jordan': 'J',
    'Portugal': 'K', 'DR Congo': 'K', 'Uzbekistan': 'K', 'Colombia': 'K',
    'England': 'L', 'Croatia': 'L', 'Ghana': 'L', 'Panama': 'L'
};

const teamFlags = {
    "Mexico": "🇲🇽", "South Africa": "🇿🇦", "United States": "🇺🇸", "Argentina": "🇦🇷",
    "Canada": "🇨🇦", "Brazil": "🇧🇷", "France": "🇫🇷", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "Spain": "🇪🇸", "Portugal": "🇵🇹", "Germany": "🇩🇪", "Italy": "🇮🇹",
    "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Croatia": "🇭🇷", "Uruguay": "🇺🇾",
    "Japan": "🇯🇵", "South Korea": "🇰🇷", "Morocco": "🇲🇦", "Senegal": "🇸🇳",
    "Iran": "🇮🇷", "Saudi Arabia": "🇸🇦", "Australia": "🇦🇺", "Ecuador": "🇪🇨",
    "Switzerland": "🇨🇭", "Denmark": "🇩🇰", "Colombia": "🇨🇴", "Serbia": "🇷🇸",
    "Poland": "🇵🇱", "Cameroon": "🇨🇲", "Ghana": "🇬🇭", "Tunisia": "🇹🇳",
    "Costa Rica": "🇨🇷", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Qatar": "🇶🇦", "Nigeria": "🇳🇬",
    "Egypt": "🇪🇬", "Algeria": "🇩🇿", "Mali": "🇲🇱", "Ivory Coast": "🇨🇮",
    "Peru": "🇵🇪", "Chile": "🇨🇱", "Sweden": "🇸🇪", "Norway": "🇳🇴", "Czech Republic": "🇨🇿",
    "Austria": "🇦🇹", "Hungary": "🇭🇺", "Turkey": "🇹🇷", "Ukraine": "🇺🇦",
    "Bosnia and Herzegovina": "🇧🇦", "Haiti": "🇭🇹", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Paraguay": "🇵🇾",
    "Curaçao": "🇨🇼", "New Zealand": "🇳🇿", "Cape Verde": "🇨🇻", "Iraq": "🇮🇶",
    "Jordan": "🇯🇴", "DR Congo": "🇨🇩", "Uzbekistan": "🇺🇿", "Panama": "🇵🇦"
};

function getFlag(teamEn) {
    return teamFlags[teamEn] ? teamFlags[teamEn] + " " : "";
}

function getMatchStage(dateObj) {
    const d = dateObj.toISOString().split('T')[0];
    if (d <= '2026-06-27') return 'GROUP';
    if (d >= '2026-06-28' && d <= '2026-07-03') return 'R32';
    if (d >= '2026-07-04' && d <= '2026-07-07') return 'R16';
    if (d >= '2026-07-09' && d <= '2026-07-11') return 'QF';
    if (d >= '2026-07-14' && d <= '2026-07-15') return 'SF';
    return 'FINAL';
}

let currentLang = localStorage.getItem('lang') || 'en';

function translateTeam(teamEn) {
    if (currentLang === 'en') return teamEn;
    // Handle partial matches for unconfirmed teams like "Winner Match 1"
    if (teamEn.includes('Winner Match')) return teamEn.replace('Winner Match', '胜者场次');
    if (teamEn.includes('Loser Match')) return teamEn.replace('Loser Match', '败者场次');
    if (teamEn.includes('Runner-up Group')) return teamEn.replace('Runner-up Group', '小组第二');
    if (teamEn.includes('Winner Group')) return teamEn.replace('Winner Group', '小组第一');
    if (teamEn.includes('3rd Group')) return teamEn.replace('3rd Group', '小组第三');
    return teamNamesZH[teamEn] || teamEn;
}

function translateVenue(venueEn) {
    if (currentLang === 'en') return venueEn;
    return venueNamesZH[venueEn] || venueEn;
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
    if (m.homeGoals) {
        m.homeGoals.forEach(g => {
            g.times.forEach(t => events.push({ team: 'home', player: g.player, time: t, isPenalty: g.isPenalty, isOwnGoal: g.isOwnGoal }));
        });
    }
    if (m.awayGoals) {
        m.awayGoals.forEach(g => {
            g.times.forEach(t => events.push({ team: 'away', player: g.player, time: t, isPenalty: g.isPenalty, isOwnGoal: g.isOwnGoal }));
        });
    }
    events.sort((a, b) => {
        const getMin = (t) => parseInt(t.replace(/[^0-9]/g, '')) || 0;
        return getMin(a.time) - getMin(b.time);
    });

    matchesData.push({
        id: idx + 1,
        homeEn: m.home,
        awayEn: m.away,
        score: m.score,
        venueEn: m.venue || '',
        events: events,
        localTime: localTimeData.time,
        idDate: localTimeData.idDate,
        utcTimestamp: localTimeData.utcTimestamp,
        dateObj: localTimeData.dateObj,
        stage: getMatchStage(localTimeData.dateObj)
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
    document.getElementById('btn-export-text').textContent = t.exportBtn;
    document.getElementById('btn-share-text').textContent = t.shareBtn;
    langToggle.textContent = t.langToggle;
    document.getElementById('ios-hint-text').innerHTML = t.iosHint;

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = currentLang === 'zh' ? '搜索球队 (例如 巴西, ARG)' : 'Search a team (e.g. Brazil, ARG)';
    const lblGroup = document.getElementById('lbl-group');
    if (lblGroup) lblGroup.textContent = currentLang === 'zh' ? '组别' : 'GROUP';
    const clearFilters = document.getElementById('clear-filters');
    if (clearFilters) clearFilters.textContent = currentLang === 'zh' ? '清除过滤' : 'CLEAR FILTERS';
    const allOpt = document.querySelector('#group-select option[value="ALL"]');
    if (allOpt) allOpt.textContent = currentLang === 'zh' ? '所有' : 'All';
}

function init() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => renderSchedule());
    }

    document.querySelectorAll('.stage-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderSchedule();
        });
    });

    const groupSelect = document.getElementById('group-select');
    if (groupSelect) {
        groupSelect.addEventListener('change', () => renderSchedule());
    }

    const clearFilters = document.getElementById('clear-filters');
    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            document.getElementById('search-input').value = '';
            document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.stage-btn[data-stage="ALL"]').classList.add('active');
            document.getElementById('group-select').value = 'ALL';
            renderSchedule();
        });
    }

    exportBtn.addEventListener('click', () => exportICS());

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
        renderSchedule();
    });

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        document.getElementById('ios-hint').style.display = 'block';
    }

    initStaticI18n();
    renderSchedule();
    scrollToCurrentDay();
}

function renderSchedule() {
    scheduleContainer.innerHTML = '';
    timelineContainer.innerHTML = '';

    const searchQ = document.getElementById('search-input').value.toLowerCase().trim();
    const activeStage = document.querySelector('.stage-btn.active').getAttribute('data-stage');
    const activeGroup = document.getElementById('group-select').value;

    let upcomingMatchesCount = 0;

    const filteredMatches = matchesData.filter(m => {
        if (activeStage !== 'ALL' && m.stage !== activeStage) return false;

        if (activeGroup !== 'ALL') {
            const hGroup = groupMappings[m.homeEn];
            const aGroup = groupMappings[m.awayEn];
            if (hGroup !== activeGroup && aGroup !== activeGroup) {
                if (!m.homeEn.includes(`Group ${activeGroup}`) && !m.awayEn.includes(`Group ${activeGroup}`)) {
                    return false;
                }
            }
        }

        if (searchQ) {
            const hEn = m.homeEn.toLowerCase();
            const aEn = m.awayEn.toLowerCase();
            const hZh = translateTeam(m.homeEn).toLowerCase();
            const aZh = translateTeam(m.awayEn).toLowerCase();
            if (!hEn.includes(searchQ) && !aEn.includes(searchQ) && !hZh.includes(searchQ) && !aZh.includes(searchQ)) return false;
        }

        return true;
    });

    const groupedUpcoming = {};
    const groupedHistory = {};

    filteredMatches.forEach(m => {
        const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
        if (!isFinished) upcomingMatchesCount++;

        const targetDict = isFinished ? groupedHistory : groupedUpcoming;
        if (!targetDict[m.idDate]) { targetDict[m.idDate] = { display: formatDate(m.dateObj), matches: [] }; }
        targetDict[m.idDate].matches.push(m);
    });

    document.getElementById('match-count').textContent = i18n[currentLang].matchesComingUp(upcomingMatchesCount);

    function renderSection(grouped, titleHtml, isHistory) {
        if (Object.keys(grouped).length === 0) return;

        const sortedDates = Object.keys(grouped).sort();
        if (titleHtml) {
            const h2 = document.createElement('h2');
            h2.className = 'history-header';
            h2.textContent = titleHtml;
            scheduleContainer.appendChild(h2);
        }

        sortedDates.forEach(dateKey => {
            const group = grouped[dateKey];

            const link = document.createElement('a');
            link.href = '#' + dateKey + (isHistory ? '-hist' : '');
            link.textContent = currentLang === 'zh' ? group.display : group.display.split(',')[0] + ' ' + group.display.split(',')[1];
            if (isHistory) link.style.opacity = '0.5';
            timelineContainer.appendChild(link);

            const section = document.createElement('div');
            section.className = 'date-section' + (isHistory ? ' history-section' : '');
            section.id = dateKey + (isHistory ? '-hist' : '');

            let html = `<h2 class="date-header">${group.display}</h2><div class="schedule-grid">`;

            group.matches.forEach(m => {
                const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
                const scoreDisplay = isFinished ? `<div class="score-badge">${m.score}</div>` : `<div class="vs">VS</div>`;
                const statusHtml = isFinished ? `<span class="status-badge finished">${i18n[currentLang].finished}</span>` : `<span class="status-badge">${i18n[currentLang].upcoming}</span>`;

                const hTeam = getFlag(m.homeEn) + translateTeam(m.homeEn);
                const aTeam = getFlag(m.awayEn) + translateTeam(m.awayEn);
                const venue = translateVenue(m.venueEn);

                const groupA = groupMappings[m.homeEn];
                const groupB = groupMappings[m.awayEn];
                const matchGroup = groupA && groupA === groupB ? groupA : (groupA || groupB);
                const groupPillHtml = matchGroup && m.stage === 'GROUP' ? `<span class="group-pill">GROUP ${matchGroup}</span> ` : '';

                let detailsHtml = '';
                if (m.events.length > 0) {
                    let eventsList = '';
                    m.events.forEach(e => {
                        const icon = e.isOwnGoal ? '⚽ (OG)' : '⚽';
                        const extra = e.isPenalty ? ' <span class="pen-text">(pen.)</span>' : (e.isOwnGoal ? ' <span class="og-text">(o.g.)</span>' : '');
                        if (e.team === 'home') {
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
                        <div class="match-teams">
                            <div class="team">${hTeam}</div>
                            ${scoreDisplay}
                            <div class="team team-right">${aTeam}</div>
                        </div>
                        <div class="stadium">${groupPillHtml}${i18n[currentLang].matchText(m.id)}${venue ? ' • ' + venue : ''}</div>
                        ${detailsHtml}
                    </div>
                `;
            });
            html += `</div>`;
            section.innerHTML = html;
            scheduleContainer.appendChild(section);
        });
    }

    renderSection(groupedUpcoming, null, false);
    renderSection(groupedHistory, i18n[currentLang].historyMatches, true);

    if (filteredMatches.length === 0) scheduleContainer.innerHTML = `<div class="empty-state">${i18n[currentLang].noMatches}</div>`;
    setupScrollSpy();
}

window.toggleDetails = function (id) {
    const el = document.getElementById(id);
    if (el.classList.contains('open')) el.classList.remove('open');
    else el.classList.add('open');
}

function scrollToCurrentDay() {
    const todayStr = new Date().toISOString().split('T')[0];
    const targetElement = document.getElementById(todayStr);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    else if (matchesData.length > 0) {
        // Just scroll to first available date element if future match
        const sortedDates = Array.from(new Set(matchesData.map(m => m.idDate))).sort();
        const nextDate = sortedDates.find(d => d > todayStr);
        if (nextDate) document.getElementById(nextDate).scrollIntoView({ behavior: 'smooth' });
    }
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('.date-section');
    const navLinks = document.querySelectorAll('.timeline-links a');
    if (sections.length === 0) return;
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

function exportICS() {
    const searchQ = document.getElementById('search-input').value.toLowerCase().trim();
    const activeStage = document.querySelector('.stage-btn.active').getAttribute('data-stage');
    const activeGroup = document.getElementById('group-select').value;

    let matchesToExport = matchesData.filter(m => {
        if (activeStage !== 'ALL' && m.stage !== activeStage) return false;
        if (activeGroup !== 'ALL') {
            const hGroup = groupMappings[m.homeEn];
            const aGroup = groupMappings[m.awayEn];
            if (hGroup !== activeGroup && aGroup !== activeGroup && !m.homeEn.includes(`Group ${activeGroup}`) && !m.awayEn.includes(`Group ${activeGroup}`)) return false;
        }
        if (searchQ) {
            const hEn = m.homeEn.toLowerCase();
            const aEn = m.awayEn.toLowerCase();
            const hZh = translateTeam(m.homeEn).toLowerCase();
            const aZh = translateTeam(m.awayEn).toLowerCase();
            if (!hEn.includes(searchQ) && !aEn.includes(searchQ) && !hZh.includes(searchQ) && !aZh.includes(searchQ)) return false;
        }
        return true;
    });
    if (matchesToExport.length === 0) return alert('No matches to export');

    // 1. 使用反引号，并确保每一行结尾都是 \r
    let icsContent = `BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//2026 World Cup Schedule//EN\r
CALSCALE:GREGORIAN\r\n`;

    matchesToExport.forEach(m => {
        const dtstart = m.utcTimestamp.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const dtend = new Date(m.utcTimestamp.getTime() + 2 * 3600000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const hTeam = translateTeam(m.homeEn);
        const aTeam = translateTeam(m.awayEn);
        // ics 规范中逗号需要转义，这里保留你的逻辑
        const venue = translateVenue(m.venueEn).replace(/,/g, '\\,');

        // 2. 这里的 VEVENT 内部也全部换成模板字符串，尾部加 \r
        icsContent += `BEGIN:VEVENT\r
DTSTART:${dtstart}\r
DTEND:${dtend}\r
SUMMARY:World Cup: ${hTeam} vs ${aTeam}\r
LOCATION:${venue}\r
UID:wc-${m.id}\r
END:VEVENT\r\n`;
    });

    icsContent += "END:VCALENDAR";

    // 3. 这里的 Blob 加上特殊的 \r\n 转换配置（部分老版本浏览器兼容性优化，但主要靠上面字符串搞定）
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);

    const filterSuffix = searchQ || (activeGroup !== 'ALL' ? 'Group' + activeGroup : (activeStage !== 'ALL' ? activeStage : ''));
    a.download = `WC2026_Schedule${filterSuffix ? '_' + filterSuffix.replace(/\s+/g, '') : ''}.ics`;

    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

init();
