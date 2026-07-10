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
        matchText: (id) => `Match ${id}`,
        venuePrefix: "Venue: ",
        toggleDetails: "Toggle Match Details ▾",
        noMatches: "No matches found for the selected filter.",
        iosHint: "💡 <strong>Tip for iOS Users:</strong> Please open this page in the built-in <strong>Safari</strong> browser to seamlessly import events into your calendar.",
        shareText: "🏆 Check out the 2026 World Cup Live Schedule & Scores (Local Time)! https://worldcup2026.alonglfb.com/",
        copied: "Copied to clipboard!",
        matchesComingUp: (n) => `${n} matches coming up`,
        historyMatches: "History Matches",
        bracketView: "Bracket View",
        timelineView: "Timeline View",
        downloadBracket: "📸 Download Bracket Image",
        bracketTitle: "2026 WORLD CUP MATCH SCHEDULE",
        groupStage: "GROUP STAGE",
        round32: "ROUND OF 32",
        round16: "ROUND OF 16",
        quarterFinal: "QUARTER FINAL",
        semiFinal: "SEMI FINAL",
        final: "FINAL",
        thirdPlace: "THIRD PLACE"
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
        matchText: (id) => `第 ${id} 场`,
        venuePrefix: "比赛场地: ",
        toggleDetails: "查看对局详情 ▾",
        noMatches: "未找到符合条件的比赛。",
        iosHint: "💡 <strong>iOS 用户提示：</strong> 请使用系统自带的 <strong>Safari</strong> 浏览器打开本页面，以便无缝导入日历。",
        shareText: "🏆 2026美加墨世界杯赛程与实时比分 (自动适配本地时区)！快来看看吧：https://worldcup2026.alonglfb.com/",
        copied: "已复制到剪贴板！",
        matchesComingUp: (n) => `即将进行 ${n} 场比赛`,
        historyMatches: "历史比赛",
        bracketView: "晋级图表",
        timelineView: "列表视图",
        downloadBracket: "📸 下载晋级图片",
        bracketTitle: "2026 世界杯赛程对阵图",
        groupStage: "小组赛",
        round32: "1/16 决赛",
        round16: "1/8 决赛",
        quarterFinal: "1/4 决赛",
        semiFinal: "半决赛",
        final: "决赛",
        thirdPlace: "季军赛"
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

function getMatchStage(matchId) {
    if (matchId <= 72) return 'GROUP';
    if (matchId <= 88) return 'R32';
    if (matchId <= 96) return 'R16';
    if (matchId <= 100) return 'QF';
    if (matchId <= 102) return 'SF';
    if (matchId === 103) return 'THIRD_PLACE';
    return 'FINAL';
}

function getStageLabel(stageStr) {
    const t = i18n[currentLang];
    const map = {
        'GROUP': t.groupStage,
        'R32': t.round32,
        'R16': t.round16,
        'QF': t.quarterFinal,
        'SF': t.semiFinal,
        'THIRD_PLACE': t.thirdPlace,
        'FINAL': t.final
    };
    return map[stageStr] || stageStr;
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

function translatePlayer(enName) {
    if (currentLang === 'en') return enName;
    return i18n.zh.players[enName] || enName;
}

const starHighlights = {
    'Argentina': { en: "Messi's Last Dance? The quest to defend the title", zh: "梅西的最后一舞？能否带领潘帕斯雄鹰成功卫冕" },
    'Portugal': { en: "Cristiano Ronaldo's ultimate quest", zh: "C罗的终极挑战，葡萄牙黄金一代出击" },
    'France': { en: "Mbappé leads a star-studded attack", zh: "姆巴佩领衔高卢雄鸡豪华锋线，志在夺冠" },
    'Brazil': { en: "Vinícius Jr. & Rodrygo samba magic", zh: "维尼修斯与罗德里戈演绎桑巴足球新篇章" },
    'England': { en: "Bellingham & Kane chasing glory", zh: "贝林厄姆与凯恩冲击队史第二冠" },
    'Germany': { en: "Musiala & Wirtz: The new era", zh: "穆西亚拉与维尔茨掀起日耳曼战车青春风暴" },
    'Spain': { en: "Yamal & Pedri: La Roja's young core", zh: "亚马尔与佩德里：斗牛士军团的新核展现统治力" },
    'Netherlands': { en: "Van Dijk anchors the Oranje defense", zh: "范迪克坐镇防线，全攻全守的橙衣军团蓄势待发" },
    'Japan': { en: "Samurai Blue looking for an upset", zh: "蓝武士阵营星光熠熠，无惧欧美顶级强敌" },
    'South Korea': { en: "Son Heung-min's leadership", zh: "亚洲一哥孙兴慜带队，太极虎渴望再创奇迹" },
    'United States': { en: "Pulisic leads the host nation", zh: "普利西奇领衔东道主捍卫主场荣誉，野心勃勃" },
    'Mexico': { en: "El Tri seeking the elusive fifth match", zh: "阿兹特克雄鹰坐镇主场，冲击队史最佳战绩" },
    'Canada': { en: "Alphonso Davies & Jonathan David's pace", zh: "阿方索·戴维斯与大卫的黄金双翼齐飞" },
    'Italy': { en: "Azzurri redemption arc", zh: "蓝衣军团渴望完成救赎，重返世界之巅" },
    'Belgium': { en: "De Bruyne pulls the strings", zh: "德布劳内坐镇中场，欧洲红魔的华丽进攻" },
    'Croatia': { en: "Modrić's endless magic", zh: "魔笛莫德里奇的不老传说，格子军团底蕴犹存" },
    'Uruguay': { en: "Valverde & Núñez's explosive power", zh: "巴尔韦德与努涅斯领衔，乌拉圭新一代全面崛起" },
    'Morocco': { en: "Hakimi & Ziyech's African pride", zh: "阿什拉夫与齐耶赫领衔，亚特拉斯雄狮再攀高峰" },
    'Senegal': { en: "Mané's Lions of Teranga", zh: "马内领衔特兰加雄狮，非洲霸主不容小觑" },
    'Colombia': { en: "Luis Díaz brings the flair", zh: "路易斯·迪亚斯盘带秀，哥伦比亚激情出击" },
    'Switzerland': { en: "Granit Xhaka's tactical masterclass", zh: "扎卡掌控全局，瑞士军刀依旧锋利无比" },
    'Denmark': { en: "Eriksen & Højlund's Danish dynamite", zh: "埃里克森与霍伊伦的丹麦童话新篇章" },
    'Serbia': { en: "Mitrović & Vlahović strike force", zh: "米特洛维奇与弗拉霍维奇组成的恐怖双塔" },
    'Poland': { en: "Lewandowski's final bow?", zh: "莱万多夫斯基的神锋本色，波兰铁骑的最后冲锋" },
    'Chile': { en: "La Roja's fierce intensity", zh: "美洲杯双冠王底蕴，智利红魔誓死拼杀" },
    'Peru': { en: "Inca warriors never back down", zh: "印加勇士的坚韧防守与犀利反击" },
    'Sweden': { en: "Isak & Kulusevski leading the line", zh: "伊萨克与库卢塞夫斯基的北欧海盗新风暴" },
    'Norway': { en: "Haaland's goalscoring terror", zh: "恐怖机器哈兰德登场，进球盛宴即将开启！" },
    'Ecuador': { en: "Caicedo controls the midfield", zh: "凯塞多一夫当关，厄瓜多尔高原战神出征" },
    'Saudi Arabia': { en: "Green Falcons eyeing an upset", zh: "沙特绿鹰期盼复刻爆冷神迹，展现亚洲力量" },
    'Iran': { en: "Taremi & Azmoun's deadly duo", zh: "塔雷米与阿兹蒙双剑合璧，波斯铁骑的强悍冲击" },
    'Australia': { en: "Socceroos physical dominance", zh: "袋鼠军团的强悍身体对抗，冲击力十足" },
    'Ghana': { en: "Kudus brings the magic", zh: "库杜斯的灵光乍现，黑星加纳渴望重塑辉煌" },
    'Cameroon': { en: "Indomitable Lions' raw power", zh: "喀麦隆非洲雄狮的狂野奔袭，不惧任何对手" },
    'Nigeria': { en: "Osimhen's attacking threat", zh: "奥斯梅恩的顶级锋线牵制力，非洲超级雄鹰" },
    'Egypt': { en: "Salah's Pharaonic magic", zh: "法老萨拉赫的边路走廊，埃及绝地反击的利器" },
    'Algeria': { en: "Mahrez's technical brilliance", zh: "马赫雷斯的丝滑盘带，北非之狐灵动出击" },
    'Ivory Coast': { en: "African powerhouses return", zh: "科特迪瓦大象军团众星云集，重返最高舞台" },
    'Turkey': { en: "Güler & Çalhanoğlu's creativity", zh: "居莱尔与恰尔汗奥卢的土耳其星月神剑" },
    'Ukraine': { en: "Mudryk & Dovbyk's fierce counter", zh: "穆德里克与多夫比克，乌克兰铁军的绝命反击" },
    'Scotland': { en: "Robertson & McGinn's passion", zh: "罗伯逊领衔，苏格兰风笛的顽强意志力" },
    'Wales': { en: "Johnson & Wilson's dragon fire", zh: "红龙威尔士的青春突击，永不言弃" },
    'Czech Republic': { en: "Souček's aerial dominance", zh: "绍切克坐镇中场，东欧铁骑的硬核对抗" },
    'Austria': { en: "Rangnick's heavy metal football", zh: "朗尼克挂帅，奥地利高位逼抢的重金属足球" },
    'Hungary': { en: "Szoboszlai's long range rockets", zh: "索博斯洛伊的百步穿杨，匈牙利再现魔扎特风采" },
    'Bosnia and Herzegovina': { en: "Džeko's timeless target man", zh: "老将哲科的支点作用，波黑龙之军团不屈远征" },
    'Qatar': { en: "Afif & Ali's telepathic connection", zh: "阿菲夫与阿里默契连线，亚洲杯霸主的证明之战" },
    'Uzbekistan': { en: "Shomurodov leading the Wolves", zh: "肖穆罗多夫领衔，中亚白狼首次亮相世界杯舞台" },
    'DR Congo': { en: "Leopards seeking redemption", zh: "刚果(金)黑豹军团的野性呼唤，重燃非洲希望" },
    'Paraguay': { en: "Almirón's lightning speed", zh: "阿尔米隆的闪电突破，巴拉圭坚盾利矛" },
    'New Zealand': { en: "Wood's target man presence", zh: "克里斯·伍德的绝对制空权，新西兰全白军团出击" },
    'Panama': { en: "Los Canaleros tactical discipline", zh: "巴拿马的铁血防守反击，中北美的坚韧力量" },
    'Haiti': { en: "Les Grenadiers passionate play", zh: "海地国脚的狂野足球，加勒比海的旋风" },
    'Curaçao': { en: "Caribbean dark horses", zh: "库拉索的荷兰裔技术流，加勒比头号黑马" },
    'Cape Verde': { en: "Blue Sharks making history", zh: "佛得角蓝鲨军团的奇迹之旅，小国大梦想" },
    'Iraq': { en: "Lions of Mesopotamia fierce spirit", zh: "美索不达米亚雄狮的铁血精神，不畏强敌" },
    'Jordan': { en: "Al-Taamari's dazzling runs", zh: "塔马里的梦幻舞步，约旦的亚洲杯黑马本色延续" },
    'South Africa': { en: "Bafana Bafana flair", zh: "南非足球的南非式节奏与灵动" },
    'Mali': { en: "Bissouma anchors the Eagles", zh: "比苏马坐镇中场，马里雄鹰展翅高飞" },
    'Tunisia': { en: "Eagles of Carthage tactical setup", zh: "迦太基雄鹰的严密防守，北非战术大师" }
};

const rivalryHighlights = [
    { teams: ['Argentina', 'Brazil'], en: "South American Superclásico", zh: "南美超级德比：火星撞地球的宿命之战！" },
    { teams: ['England', 'France'], en: "Historic European rivalry", zh: "英法百年恩怨：欧洲最强对决！" },
    { teams: ['Germany', 'Netherlands'], en: "Fierce neighbors clash", zh: "德荷恩怨局：水火不容的邻居！" },
    { teams: ['Spain', 'Portugal'], en: "Iberian Derby", zh: "伊比利亚半岛德比，巅峰对决！" },
    { teams: ['Japan', 'South Korea'], en: "East Asian Derby", zh: "东亚巅峰德比，绝不退让！" },
    { teams: ['United States', 'Mexico'], en: "CONCACAF Kings battle", zh: "中北美霸主之争，针锋相对！" }
];

function getHighlights(homeEn, awayEn, lang) {
    let list = [];
    
    // Check rivalries
    for (let r of rivalryHighlights) {
        if (r.teams.includes(homeEn) && r.teams.includes(awayEn)) {
            list.push(r[lang]);
        }
    }
    
    // Check star players
    if (starHighlights[homeEn]) list.push(starHighlights[homeEn][lang]);
    if (starHighlights[awayEn]) list.push(starHighlights[awayEn][lang]);
    
    // Fallback for empty highlights
    if (list.length === 0) {
        if (lang === 'zh') {
            list.push(`关键战役：${translateTeam(homeEn)} vs ${translateTeam(awayEn)} 谁能更胜一筹？`);
        } else {
            list.push(`Crucial clash: ${homeEn} vs ${awayEn}`);
        }
    }
    
    return list.slice(0, 3);
}

function renderBracket() {
    const bContainer = document.getElementById('bracket-container');
    if (!bContainer) return;

    const leftR32 = [73, 75, 74, 77, 81, 82, 83, 84];
    const leftR16 = [90, 89, 94, 93];
    const leftQF = [97, 98];
    const leftSF = [101];

    const rightR32 = [76, 78, 79, 80, 85, 87, 86, 88];
    const rightR16 = [91, 92, 96, 95];
    const rightQF = [99, 100];
    const rightSF = [102];

    const getMatchHTML = (matchId) => {
        const m = matchesData.find(x => x.id === matchId);
        if (!m) return '';
        
        const hName = translateTeam(m.homeEn);
        const aName = translateTeam(m.awayEn);
        
        let hScore = '', aScore = '';
        let hWin = false; let aWin = false;
        const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
        
        if (isFinished) {
            const parts = m.score.split(/[–-]/);
            if(parts.length === 2) {
                hScore = `<span class="bracket-score">${parts[0].trim().replace(/\s*\(.*\)/, '')}</span>`;
                aScore = `<span class="bracket-score">${parts[1].trim().replace(/\s*\(.*\)/, '')}</span>`;
                
                const hS = parseInt(parts[0].trim());
                const aS = parseInt(parts[1].trim());
                if (hS > aS) hWin = true;
                else if (aS > hS) aWin = true;
                else if (m.penaltyScore) {
                    const pParts = m.penaltyScore.split(/[–-]/);
                    if (pParts.length === 2) {
                        const hP = parseInt(pParts[0].trim());
                        const aP = parseInt(pParts[1].trim());
                        if (hP > aP) hWin = true;
                        else if (aP > hP) aWin = true;
                    }
                }
            }

            if (m.penaltyScore) {
                const pParts = m.penaltyScore.split(/[–-]/);
                if (pParts.length === 2) {
                    hScore += `<span class="bracket-pen" style="font-size:0.6rem; color:#e6c553; margin-left:2px;">(${pParts[0].trim()})</span>`;
                    aScore += `<span class="bracket-pen" style="font-size:0.6rem; color:#e6c553; margin-left:2px;">(${pParts[1].trim()})</span>`;
                }
            }
        }
        
        const hFlag = getFlag(m.homeEn);
        const aFlag = getFlag(m.awayEn);
        let shortHName = (hFlag ? hFlag + ' ' : '') + (hName.length > 12 ? hName.substring(0, 12) + '...' : hName);
        let shortAName = (aFlag ? aFlag + ' ' : '') + (aName.length > 12 ? aName.substring(0, 12) + '...' : aName);
        
        if (hWin) shortHName = `<strong style="color:var(--text);">${shortHName}</strong> <span title="Winner" style="color:#e6c553;">🏆</span>`;
        if (aWin) shortAName = `<strong style="color:var(--text);">${shortAName}</strong> <span title="Winner" style="color:#e6c553;">🏆</span>`;
        
        let displayDate = "";
        if(currentLang === 'zh') {
            displayDate = `${m.dateObj.getMonth()+1}月${m.dateObj.getDate()}日 - ${m.localTime}`;
        } else {
            const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            displayDate = `${monthNames[m.dateObj.getMonth()]} ${m.dateObj.getDate()} - ${m.localTime} UAE TIME`;
        }

        let hBadge = m.homeEn.includes('Winner Match') ? 'W' + m.homeEn.split(' ')[2] : m.homeEn.substring(0,3).toUpperCase();
        let aBadge = m.awayEn.includes('Winner Match') ? 'W' + m.awayEn.split(' ')[2] : m.awayEn.substring(0,3).toUpperCase();

        return `
            <div class="bracket-match">
                <div class="bracket-match-info">MATCH ${matchId}<br>${displayDate}</div>
                <div class="bracket-team">
                    <div class="bracket-team-left"><span class="bracket-badge">${hBadge}</span>${shortHName}</div>
                    ${hScore}
                </div>
                <div class="bracket-team">
                    <div class="bracket-team-left"><span class="bracket-badge">${aBadge}</span>${shortAName}</div>
                    ${aScore}
                </div>
            </div>
        `;
    };

    const getGroupMatchHTML = (matchId) => {
        const m = matchesData.find(x => x.id === matchId);
        if (!m) return '';
        const hName = translateTeam(m.homeEn);
        const aName = translateTeam(m.awayEn);
        const hFlag = teamFlags[m.homeEn] || '🌍';
        const aFlag = teamFlags[m.awayEn] || '🌍';
        
        let hScore = '&nbsp;', aScore = '&nbsp;';
        if (m.score && !m.score.includes('Match')) {
            const parts = m.score.split('–');
            if(parts.length === 2) {
                hScore = parts[0].trim();
                aScore = parts[1].trim();
            } else if (m.score.includes('-')) {
                const partsAlt = m.score.split('-');
                if(partsAlt.length === 2) {
                    hScore = partsAlt[0].trim();
                    aScore = partsAlt[1].trim();
                }
            }
        }

        let displayDate = "";
        if(currentLang === 'zh') {
            displayDate = `${m.dateObj.getMonth()+1}月${m.dateObj.getDate()}日 - ${m.localTime}`;
        } else {
            const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            displayDate = `${monthNames[m.dateObj.getMonth()]} ${m.dateObj.getDate()} - ${m.localTime} UAE TIME`;
        }
        
        return `
            <div class="bracket-group-match">
                <div class="bracket-group-match-info">${displayDate}</div>
                <div class="bracket-group-match-content">
                    <div class="bracket-group-team">${hFlag} ${hName}</div>
                    <div class="bracket-group-scorebox">
                        <div class="bracket-group-score">${hScore}</div>
                        <div class="bracket-group-score">${aScore}</div>
                    </div>
                    <div class="bracket-group-team right">${aName} ${aFlag}</div>
                </div>
            </div>
        `;
    };

    const buildRound = (matchIds) => {
        return `<div class="bracket-round">${matchIds.map(id => getMatchHTML(id)).join('')}</div>`;
    };

    const leftHtml = `<div class="bracket-side left">
        ${buildRound(leftR32)}
        ${buildRound(leftR16)}
        ${buildRound(leftQF)}
        ${buildRound(leftSF)}
    </div>`;

    const rightHtml = `<div class="bracket-side right">
        ${buildRound(rightR32)}
        ${buildRound(rightR16)}
        ${buildRound(rightQF)}
        ${buildRound(rightSF)}
    </div>`;

    const groups = {A:[], B:[], C:[], D:[], E:[], F:[], G:[], H:[], I:[], J:[], K:[], L:[]};
    for (let i = 1; i <= 72; i++) {
        const m = matchesData.find(x => x.id === i);
        if (!m) continue;
        const g = groupMappings[m.homeEn] || groupMappings[m.awayEn];
        if (g && groups[g]) groups[g].push(i);
    }
    
    const buildGroupCol = (groupKeys) => {
        return `<div class="bracket-group-col">
            ${groupKeys.map(g => `
                <div class="bracket-group">
                    <div class="bracket-group-letter">${g}</div>
                    <div class="bracket-group-matches">
                        ${groups[g].map(id => getGroupMatchHTML(id)).join('')}
                    </div>
                </div>
            `).join('')}
        </div>`;
    };

    const leftGroupsHtml = buildGroupCol(['A', 'B', 'C', 'D', 'E', 'F']);
    const rightGroupsHtml = buildGroupCol(['G', 'H', 'I', 'J', 'K', 'L']);

    const t = i18n[currentLang];
    const centerHtml = `<div class="bracket-center">
        <div class="bracket-trophy">🏆</div>
        <div class="bracket-match-info" style="margin-top:10px; color:#e6c553; font-weight:800; font-size:0.7rem;">${t.thirdPlace}</div>
        ${getMatchHTML(103)}
        <div class="bracket-match-info" style="margin-top:10px; color:#e6c553; font-weight:800; font-size:0.8rem;">${t.final}</div>
        ${getMatchHTML(104)}
    </div>`;

    const fullHtml = `
        <div class="bracket-wrapper">
            <div class="bracket-header-banner">
                <h1>${t.bracketTitle}</h1>
            </div>
            <div class="bracket-stage-header">
                <div class="bracket-stage-title">${t.groupStage}</div>
                <div class="bracket-stage-title">${t.round32}</div>
                <div class="bracket-stage-title">${t.round16}</div>
                <div class="bracket-stage-title">${t.quarterFinal}</div>
                <div class="bracket-stage-title">${t.semiFinal}</div>
                <div class="bracket-stage-title" style="border-right: none; color: #e6c553;">${t.final}</div>
                <div class="bracket-stage-title" style="border-left: 1px solid rgba(255,255,255,0.2);">${t.semiFinal}</div>
                <div class="bracket-stage-title">${t.quarterFinal}</div>
                <div class="bracket-stage-title">${t.round16}</div>
                <div class="bracket-stage-title">${t.round32}</div>
                <div class="bracket-stage-title">${t.groupStage}</div>
            </div>
            <div class="bracket-container" style="background:transparent; padding:0; box-shadow:none; border-radius:0; min-width:auto;">
                ${leftGroupsHtml}
                ${leftHtml}
                ${centerHtml}
                ${rightHtml}
                ${rightGroupsHtml}
            </div>
        </div>
    `;

    bContainer.innerHTML = fullHtml;
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

function convertToLocal(dateStr, timeStr, venueStr) {
    const dateMatch = dateStr.match(/\((\d{4}-\d{2}-\d{2})\)/);
    if (!dateMatch) return null;
    const isoDate = dateMatch[1];

    const timeRegex = /(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)(?:\s*UTC[−-](\d))?/i;
    const timeMatch = timeStr.match(timeRegex);
    if (!timeMatch) return null;

    let hours = parseInt(timeMatch[1], 10);
    const mins = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3].toLowerCase();

    let utcOffset = 4; // default Eastern Time
    if (timeMatch[4]) {
        utcOffset = parseInt(timeMatch[4], 10);
    } else if (venueStr) {
        if (venueStr.includes("Vancouver") || venueStr.includes("Seattle") || venueStr.includes("Santa Clara") || venueStr.includes("Inglewood")) utcOffset = 7;
        else if (venueStr.includes("Zapopan") || venueStr.includes("Mexico City") || venueStr.includes("Guadalupe")) utcOffset = 6;
        else if (venueStr.includes("Houston") || venueStr.includes("Kansas City") || venueStr.includes("Arlington")) utcOffset = 5;
    }

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
    const localTimeData = convertToLocal(m.date, m.time, m.venue);
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

    let penaltyEvents = [];
    if (m.homePenalties || m.awayPenalties) {
        const hPens = m.homePenalties || [];
        const aPens = m.awayPenalties || [];
        const maxLen = Math.max(hPens.length, aPens.length);
        for(let i = 0; i < maxLen; i++) {
            if (hPens[i]) penaltyEvents.push({ team: 'home', player: hPens[i].player, scored: hPens[i].scored, index: i+1 });
            if (aPens[i]) penaltyEvents.push({ team: 'away', player: aPens[i].player, scored: aPens[i].scored, index: i+1 });
        }
    }

    matchesData.push({
        id: idx + 1,
        homeEn: m.home,
        awayEn: m.away,
        score: m.score,
        venueEn: m.venue || '',
        events: events,
        penaltyEvents: penaltyEvents,
        penaltyScore: m.penaltyScore || '',
        localTime: localTimeData.time,
        idDate: localTimeData.idDate,
        utcTimestamp: localTimeData.utcTimestamp,
        dateObj: localTimeData.dateObj,
        stage: getMatchStage(idx + 1)
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

    const bracketViewContainer = document.getElementById('bracket-view');
    const btnToggleText = document.getElementById('btn-toggle-text');
    if (btnToggleText && bracketViewContainer) {
        const isBracket = bracketViewContainer.style.display === 'block';
        btnToggleText.textContent = isBracket ? t.timelineView : t.bracketView;
    }
    const btnDownloadBracket = document.getElementById('btn-download-bracket');
    if (btnDownloadBracket) {
        btnDownloadBracket.textContent = t.downloadBracket;
    }

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
        const textToCopy = i18n[currentLang].shareText;
        const showToast = () => {
            toast.textContent = i18n[currentLang].copied;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(showToast).catch(() => fallbackCopy(textToCopy));
        } else {
            fallbackCopy(textToCopy);
        }

        function fallbackCopy(text) {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast();
            } catch (err) {
                console.error('Copy failed', err);
            }
        }
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

    const btnToggleView = document.getElementById('btn-toggle-view');
    const scheduleContainerWrap = document.querySelector('.controls-wrapper');
    const bracketView = document.getElementById('bracket-view');
    
    if (btnToggleView) {
        btnToggleView.addEventListener('click', () => {
            const isBracket = bracketView.style.display === 'block';
            if (isBracket) {
                bracketView.style.display = 'none';
                scheduleContainerWrap.style.display = 'block';
                scheduleContainer.style.display = 'block';
                document.getElementById('btn-toggle-text').textContent = currentLang === 'zh' ? '晋级图表' : 'Bracket View';
            } else {
                bracketView.style.display = 'block';
                scheduleContainerWrap.style.display = 'none';
                scheduleContainer.style.display = 'none';
                document.getElementById('btn-toggle-text').textContent = currentLang === 'zh' ? '列表视图' : 'Timeline View';
                renderBracket();
            }
        });
    }

    const btnDownloadBracket = document.getElementById('btn-download-bracket');
    if (btnDownloadBracket) {
        btnDownloadBracket.addEventListener('click', () => {
            if (typeof html2canvas !== 'undefined') {
                const btn = btnDownloadBracket;
                const originalText = btn.textContent;
                btn.textContent = 'Generating...';
                btn.style.display = 'none';
                const target = document.getElementById('bracket-container');
                html2canvas(target, {
                    backgroundColor: '#1a1a1a',
                    scale: 2,
                    scrollX: 0,
                    scrollY: 0,
                    width: target.scrollWidth,
                    height: target.scrollHeight,
                    windowWidth: target.scrollWidth,
                    windowHeight: target.scrollHeight
                }).then(canvas => {
                    btn.style.display = 'inline-block';
                    btn.textContent = originalText;
                    
                    const link = document.createElement('a');
                    link.download = 'WorldCup2026_Bracket.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                }).catch(err => {
                    btn.style.display = 'inline-block';
                    btn.textContent = originalText;
                    console.error('Canvas error:', err);
                });
            } else {
                alert('html2canvas library not loaded yet.');
            }
        });
    }
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

            group.matches.sort((a, b) => a.utcTimestamp - b.utcTimestamp).forEach(m => {
                const isFinished = !!m.score && !m.score.toLowerCase().includes('match');
                let scoreText = m.score;
                let extraTimeText = '';
                if (scoreText && scoreText.includes('(a.e.t.)')) {
                    scoreText = scoreText.replace(/\s*\(a\.e\.t\.\)/, '');
                    extraTimeText = currentLang === 'zh' ? '(加时)' : '(a.e.t.)';
                }

                let scoreBadgeInner = `<span style="font-size:1.1rem; font-weight:800;">${scoreText}</span>`;
                if (extraTimeText) {
                    scoreBadgeInner += `<span class="aet-score" style="font-size:0.8rem; font-weight:bold; color:#fff; display:block; margin-top:2px;">${extraTimeText}</span>`;
                }
                if (m.penaltyScore) {
                    scoreBadgeInner += `<span class="pen-score" style="font-size:0.75rem; font-weight:bold; color:#e6c553; display:block; margin-top:2px;">(${m.penaltyScore} p)</span>`;
                }
                let hWin = false; let aWin = false;
                if (isFinished && scoreText) {
                    const parts = scoreText.split(/[–-]/);
                    if (parts.length === 2) {
                        const hS = parseInt(parts[0].trim());
                        const aS = parseInt(parts[1].trim());
                        if (hS > aS) hWin = true;
                        else if (aS > hS) aWin = true;
                        else if (m.penaltyScore) {
                            const pParts = m.penaltyScore.split(/[–-]/);
                            if (pParts.length === 2) {
                                const hP = parseInt(pParts[0].trim());
                                const aP = parseInt(pParts[1].trim());
                                if (hP > aP) hWin = true;
                                else if (aP > hP) aWin = true;
                            }
                        }
                    }
                }

                const scoreDisplay = isFinished ? `<div class="score-badge" style="text-align:center;">${scoreBadgeInner}</div>` : `<div class="vs">VS</div>`;
                
                const now = Date.now();
                const isLive = (!isFinished && now >= m.utcTimestamp && now <= m.utcTimestamp + 130 * 60 * 1000);
                let statusHtml = '';
                if (isLive) {
                    statusHtml = `<span class="status-badge" style="background:#e53e3e; color:#fff; border-color:#e53e3e; font-weight:bold;">🔴 ${currentLang === 'zh' ? '进行中' : 'LIVE'}</span>`;
                } else if (isFinished || now > m.utcTimestamp + 130 * 60 * 1000) {
                    statusHtml = `<span class="status-badge finished">${i18n[currentLang].finished}</span>`;
                } else {
                    statusHtml = `<span class="status-badge">${i18n[currentLang].upcoming}</span>`;
                }

                let hTeam = getFlag(m.homeEn) + translateTeam(m.homeEn);
                let aTeam = getFlag(m.awayEn) + translateTeam(m.awayEn);
                
                if (hWin) hTeam = `<strong style="color:var(--text);">${hTeam}</strong> <span title="Winner" style="color:#e6c553; font-size:1.1rem;">🏆</span>`;
                if (aWin) aTeam = `<span title="Winner" style="color:#e6c553; font-size:1.1rem;">🏆</span> <strong style="color:var(--text);">${aTeam}</strong>`;
                const venue = translateVenue(m.venueEn);

                const groupA = groupMappings[m.homeEn];
                const groupB = groupMappings[m.awayEn];
                const matchGroup = groupA && groupA === groupB ? groupA : (groupA || groupB);
                const groupLabel = currentLang === 'zh' ? `${matchGroup} 组` : `Group ${matchGroup}`;
                const groupPillHtml = matchGroup && m.stage === 'GROUP' ? `<span class="group-pill stage-pill">${groupLabel}</span>` : '';
                const stageLabel = getStageLabel(m.stage);
                const stageTagHtml = m.stage !== 'GROUP' ? `<span class="group-pill stage-pill">${stageLabel}</span>` : `<span class="group-pill stage-pill">${stageLabel}</span>`;
                
                const footerTagsHtml = `<div class="match-footer-tags">${groupPillHtml}${m.stage !== 'GROUP' ? stageTagHtml : ''}</div>`;
                
                const highlights = getHighlights(m.homeEn, m.awayEn, currentLang);
                let highlightsHtml = '';
                if (highlights.length > 0) {
                    let items = highlights.map(h => `<li><span class="highlight-icon">🔥</span> ${h}</li>`).join('');
                    highlightsHtml = `<div class="match-highlights"><ul>${items}</ul></div>`;
                }

                let detailsHtml = '';
                if (m.events.length > 0 || (m.penaltyEvents && m.penaltyEvents.length > 0)) {
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

                    if (m.penaltyEvents && m.penaltyEvents.length > 0) {
                        eventsList += `<div class="penalty-header" style="text-align:center; padding:10px 0 5px; font-weight:bold; color:rgba(255,255,255,0.7); font-size:0.85rem; border-top:1px solid rgba(255,255,255,0.1); margin-top:5px;">${currentLang === 'zh' ? '点球大战' : 'Penalty Shootout'} (${m.penaltyScore})</div>`;
                        let pRoundCount = Math.max(...m.penaltyEvents.map(p => p.index));
                        for(let i = 1; i <= pRoundCount; i++) {
                            const hPen = m.penaltyEvents.find(p => p.index === i && p.team === 'home');
                            const aPen = m.penaltyEvents.find(p => p.index === i && p.team === 'away');
                            
                            const hHtml = hPen ? `${hPen.player} <span class="event-icon">${hPen.scored ? '✅' : '❌'}</span>` : '';
                            const aHtml = aPen ? `<span class="event-icon">${aPen.scored ? '✅' : '❌'}</span> ${aPen.player}` : '';

                            eventsList += `<div class="event-row"><div class="event-home" style="${hPen && !hPen.scored ? 'opacity:0.5;' : ''}">${hHtml}</div><div class="event-away" style="${aPen && !aPen.scored ? 'opacity:0.5;' : ''}">${aHtml}</div></div>`;
                        }
                    }

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
                        ${highlightsHtml}
                        ${footerTagsHtml}
                        <div class="stadium">${i18n[currentLang].matchText(m.id)}${venue ? ' • ' + i18n[currentLang].venuePrefix + venue : ''}</div>
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

    // Trigger download without appending to body, which avoids null body errors
    a.click();
}

init();
