# Open Source Portfolio

语言： [English](README.md) | 简体中文

一个面向学生、独立开发者和开源维护者的作品集模板，重点展示项目证据、部署能力和可维护的开源结构。

它使用 React、TypeScript 和 Vite 构建，已经配置好 GitHub Pages 自动部署。默认内容适合想展示全栈能力、部署经验和开源协作能力的开发者。

## 为什么做这个项目

很多作品集模板只强调装饰效果。这个模板更强调“可信证据”：

- 展示有工程背景的项目。
- 源码结构简单，方便快速改成自己的内容。
- 已包含 GitHub Pages 部署工作流。
- README、贡献指南和模板都适合开源协作。

## 快速开始

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 自定义内容

编辑 `src/App.tsx` 里的 `profile`、`projects` 和 `workflow`。

常改字段：

- `profile`：姓名、定位、简介、邮箱、GitHub 链接。
- `projects`：项目标题、分类、简介、技术栈、链接。
- `workflow`：页面底部展示的工作方式。

页面样式在 `src/App.css`，全局主题变量在 `src/index.css`。

## 部署到 GitHub Pages

`.github/workflows/deploy.yml` 会构建项目并把 `dist/` 发布到 GitHub Pages。

推送到 GitHub 后：

1. 打开仓库 Settings。
2. 进入 **Pages**。
3. Source 选择 **GitHub Actions**。
4. 推送到 `main` 分支。

站点地址：

```text
https://<你的 GitHub 用户名>.github.io/open-source-portfolio/
```

如果你改了仓库名，需要同步修改 `vite.config.ts` 里的 `base`。

## 项目结构

```text
open-source-portfolio/
├─ public/                    # 公共视觉资源
├─ src/
│  ├─ App.tsx                 # 页面内容和结构
│  ├─ App.css                 # 页面样式和响应式布局
│  └─ index.css               # 全局主题和字体
├─ .github/workflows/deploy.yml
├─ CONTRIBUTING.md
├─ LICENSE
└─ README.md
```

## 适合贡献的方向

- 增加简历下载按钮。
- 增加项目详情页。
- 增加主题切换。
- 增加从 JSON 读取个人资料的脚本。

## License

MIT
