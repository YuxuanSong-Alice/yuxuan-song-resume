# 简历网站部署指南

## 快速开始

### 本地开发

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```
   网站将在 `http://localhost:5173` 打开

3. **构建生产版本**
   ```bash
   npm run build
   ```
   构建后的文件在 `dist/` 文件夹中

### 部署到 GitHub Pages

#### 方法 1：使用 GitHub Actions（推荐）

1. 将此项目推送到 GitHub 仓库
2. GitHub Actions 会自动构建和部署（已配置 `.github/workflows/deploy.yml`）
3. 在仓库设置中，确保 GitHub Pages 源设置为 `gh-pages` 分支

#### 方法 2：手动部署

1. 构建项目：`npm run build`
2. 将 `dist/` 文件夹中的所有文件上传到 GitHub Pages

### 部署到其他平台

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`dist`

## 项目结构

```
├── src/
│   ├── components/      # React 组件
│   ├── data/           # 简历数据
│   ├── context/        # React Context
│   └── assets/         # 图片资源
├── public/             # 静态文件
├── dist/               # 构建输出（生产版本）
├── package.json        # 项目配置
├── vite.config.ts      # Vite 配置
└── tailwind.config.js  # Tailwind CSS 配置
```

## 主要功能

- ✨ 现代简洁的设计风格
- 🌍 完整的中英文双语支持
- 📊 交互式图表展示
- 📋 一键复制联系方式
- 📱 响应式设计

## 技术栈

- React 18
- TypeScript
- Vite
- TailwindCSS
- Recharts（图表库）

## 修改内容

### 编辑简历信息
编辑 `src/data/resume.ts` 文件中的数据

### 编辑图表数据
编辑 `src/data/charts.ts` 文件中的数据

### 修改样式
- 全局样式：`src/index.css`
- 组件样式：各组件文件中
- Tailwind 配置：`tailwind.config.js`

## 常见问题

### Q: 如何修改网站标题？
A: 编辑 `index.html` 中的 `<title>` 标签

### Q: 如何添加新的项目？
A: 在 `src/data/resume.ts` 中的 `projects` 数组添加新项目

### Q: 如何更改语言？
A: 点击网站右上角的语言切换按钮

## 支持

如有问题，请查看 GitHub 仓库的 Issues 部分。
