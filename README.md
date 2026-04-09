# 电脑硬件展示中心

一个现代化的电脑硬件展示和信息查询平台，包含 CPU、显卡、内存、硬盘、主板五大类硬件的历史发展、技术参数和实时价格追踪。

## ✨ 功能特性

- 🎨 **精美 UI 设计** - 赛博朋克风格，配合流畅的 CSS 动画效果
- 📚 **硬件历史** - 详细记录各类硬件的发展历程
- 📊 **参数解析** - 深入解读硬件核心参数
- 💰 **价格追踪** - 实时获取硬件价格信息
- 🔍 **产品对比** - 主流品牌产品对比分析
- 📱 **响应式设计** - 完美适配各种屏幕尺寸

## 🛠️ 技术栈

### 前端
- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **CSS3** - 现代 CSS 动画和过渡效果

### 后端
- **Node.js** - JavaScript 运行时
- **Express** - Web 应用框架
- **Cheerio** - HTML 解析库（用于网页爬取）

## 📁 项目结构

```
ruangong/
├── frontend/                 # 前端项目
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.js          # 入口文件
│       ├── App.vue          # 根组件
│       ├── router/          # 路由配置
│       │   └── index.js
│       ├── views/           # 页面组件
│       │   ├── Home.vue     # 首页
│       │   ├── CPU.vue      # CPU 页面
│       │   ├── GPU.vue      # 显卡页面
│       │   ├── Memory.vue   # 内存页面
│       │   ├── Storage.vue  # 硬盘页面
│       │   └── Motherboard.vue  # 主板页面 ⭐ NEW
│       ├── components/      # 公共组件
│       │   └── Navbar.vue   # 导航栏
│       └── assets/          # 静态资源
│           └── styles/      # 样式文件
│               ├── main.css
│               └── animations.css
│
└── backend/                  # 后端项目
    ├── package.json
    ├── server.js            # 服务器入口
    ├── data/
    │   └── mockPrices.js    # 模拟价格数据
    └── scrapers/
        └── priceScraper.js  # 价格爬虫
```

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 启动项目

```bash
# 启动后端服务（在 backend 目录）
npm start

# 启动前端开发服务器（在 frontend 目录，新终端）
npm run dev
```

### 访问地址
- 前端：http://localhost:3000
- 后端 API: http://localhost:3001

## 📡 API 接口

### 获取分类价格
```
GET /api/prices/:category
```
参数：`cpu` | `gpu` | `memory` | `storage` | `motherboard`

### 获取单个产品价格
```
GET /api/price/:productId
```

### 搜索产品
```
GET /api/search?keyword=关键词
```

### 健康检查
```
GET /api/health
```

## 🎯 页面介绍

### 首页 (Home)
- 项目介绍和导航
- 硬件分类快速入口
- 发展历程时间线
- 实时价格展示

### CPU 页面
- CPU 基础知识介绍
- 发展历史时间线（1971-2023）
- 核心参数解析
- Intel vs AMD 品牌对比
- 热门产品价格列表
- 选购指南

### 显卡页面
- GPU 基础知识介绍
- 发展历史时间线（1995-2023）
- 核心参数解析
- NVIDIA vs AMD 品牌对比
- 热门产品价格列表
- 核心技术介绍

### 内存页面
- 内存基础知识介绍
- 发展历史时间线（1970-2020）
- 核心参数解析
- DDR4 vs DDR5 对比
- 主流品牌介绍
- 热门产品价格列表

### 硬盘页面
- 存储基础知识介绍
- 发展历史时间线（1956-2020）
- 核心参数解析
- HDD vs SSD vs NVMe 对比
- 主流品牌介绍
- 热门产品价格列表

### 主板页面 ⭐ NEW
- 主板基础知识介绍
- 发展历史时间线（1981-2020）
- 核心参数解析（CPU 插槽、芯片组、内存支持等）
- ASUS vs MSI vs GIGABYTE 三大品牌对比
- 6 款热门产品价格列表
- 价格追踪和走势图
- 选购指南（游戏玩家、内容创作、办公家用、超频爱好者）

## 🎨 动画效果

项目包含丰富的 CSS 动画效果：
- 页面切换过渡动画
- 滚动触发动画
- 卡片悬停效果
- 按钮交互效果
- 背景粒子效果
- 加载动画
- 主板电路动画效果

## 📝 注意事项

1. 价格数据目前使用模拟数据，实际使用时可以接入真实的电商 API
2. 爬虫功能需要遵守目标网站的 robots.txt 规则
3. 建议使用 Chrome 或 Firefox 浏览器以获得最佳体验

## 🌐 GitHub Pages

项目已部署到 GitHub Pages，访问地址：https://tom11112138.github.io/ruangong/

## 📄 License

MIT License
