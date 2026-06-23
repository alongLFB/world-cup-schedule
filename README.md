# 2026 FIFA World Cup Schedule (Live Scores & Timeline)

[![Language](https://img.shields.io/badge/Language-English-blue)](#english-documentation)
[![Language](https://img.shields.io/badge/语言-中文-red)](#中文说明)

---

## English Documentation

A modern, fully interactive, and responsive web application to track the 2026 FIFA World Cup (Canada, Mexico, USA) schedule, live scores, and detailed match events.

🌐 **Demo / Live Website:** [https://worldcup2026.alonglfb.com/](https://worldcup2026.alonglfb.com/)

### Features
* **Multi-Timezone Support**: Automatically displays match times in your local timezone, with an option to manually select any other timezone.
* **Share Functionality**: Generate a shareable link that preserves your currently selected team, timezone, and language preferences.
* **Live Match Details**: Completed matches display the actual scoreline and a chronological timeline of goals (including scorers, minutes, penalties, and own goals).
* **Sticky Navigation & Timeline**: The sidebar timeline auto-scrolls to the current date, and top controls stay floating while you scroll.
* **Team Filtering**: A dropdown menu allows you to isolate and view only the path of your favorite team.
* **Calendar Export (.ics)**: Export the entire tournament or a specific team's schedule directly to your iOS/macOS Calendar app with proper UTC alignments.
* **Bilingual (i18n)**: One-click toggle between English and Simplified Chinese interfaces.
* **Cache-Busting**: The build script guarantees that the newest CSS/JS is loaded without getting stuck in browser caches.

### How to Build & Scrape
This project uses a Node.js web scraper to pull official match data directly from Wikipedia.

1. **Install Dependencies:**
   ```bash
   npm init -y
   npm install jsdom
   ```
2. **Scrape Latest Data:**
   Run the scraper to fetch the newest scores and goal timelines. This updates `matches.json`.
   ```bash
   node scrape_wiki.js
   ```
3. **Build the Frontend:**
   Inject the JSON into the web client and version-bump the static assets.
   ```bash
   node build_html.js
   ```
4. **Deploy:**
   Upload `schedule.html`, `app.js`, and `style.css` to your web server (e.g., GitHub Pages, Vercel, or Netlify).

---

## 中文说明

一个现代化、全互动式的网页应用，用于追踪 2026 美加墨 FIFA 世界杯的官方赛程、实时比分以及进球详情。

🌐 **演示网址：** [https://worldcup2026.alonglfb.com/](https://worldcup2026.alonglfb.com/)

### 核心功能
* **多时区支持**: 自动识别并使用您的本地时区，同时支持手动切换到全球任意时区。
* **一键分享**: 支持生成专属分享链接，完美保留您当前选择的球队、时区和语言设置，方便快捷地分享给好友。
* **动态赛况详情**: 针对已结束的比赛，卡片会自动展示真实比分，点击后可展开一条完整的进球时间轴（包含进球球员、分钟数、点球或乌龙球标注）。
* **智能悬浮操作区**: 在手机和电脑上向下滚动页面时，侧边栏日期时间轴会自动追踪当前进度，顶部的“球队筛选”、“导出日历”按钮也会智能吸附在屏幕顶端，随时可用。
* **一键导出日历 (.ics)**: 可将全部赛程或单支球队的赛程生成标准的日历文件，完美兼容 iOS 系统自带日历并自动适配时区。
* **中英双语切换**: 支持一键无缝切换中英文界面，涵盖球队名、日期格式及所有提示语。
* **强力缓存穿透**: 每次重构静态网页时会自动为资源文件追加时间戳版本号，彻底解决手机浏览器缓存导致的页面不刷新问题。

### 部署与数据更新指南
本项目利用 Node.js 爬虫技术，从维基百科实时抓取官方赛程与比赛数据。

1. **安装运行环境:**
   确保安装了 Node.js，随后安装 HTML 解析依赖。
   ```bash
   npm init -y
   npm install jsdom
   ```
2. **抓取最新比分数据:**
   运行爬虫脚本，系统会自动生成最新的 `matches.json` 数据库。
   ```bash
   node scrape_wiki.js
   ```
3. **构建网页:**
   运行构建脚本，将数据注入 HTML 模板，并分离出带有版本号的 CSS 和 JS 文件。
   ```bash
   node build_html.js
   ```
4. **上传部署:**
   将生成的 `schedule.html`、`app.js` 及 `style.css` 直接放入任何静态服务器（如 Vercel、Nginx）即可对外访问。
