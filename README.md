# mqmux.github.io

一个轻量的在线 Markdown 笔记页面，适合快速记录、编辑和查看内容。

## 功能

- 支持排版、Markdown 原文和只读模式
- 支持标题目录、任务清单、表格、链接卡片和音乐播放
- 支持历史记录与手动或自动保存
- 适配桌面和手机浏览
- 设置中可选原图标、紫粉图标或蓝紫图标，选择保存在当前浏览器
- 浏览器标题跟随正文第一行有内容的文字，空白时显示 `Note`

## 链接卡片

排版模式点击工具栏「卡片」插入，或在「链接」弹窗中选择「链接卡片」。可选自动图标或 24 个常用图标；编辑时点击卡片可修改名称、地址和图标，只读时点击跳转。

原文使用显式增强 Markdown，普通链接列表保持标准列表显示：

```md
:::cards
- [飞书云文档主页](https://dcn2zhh6bibj.feishu.cn/drive/home/) {icon:home}
- [项目表格](https://example.com/table) {icon:table}
- [数据报告](https://example.com/report) {icon:chart}
:::
```

支持与分隔线、居中、左右分栏等格式组合。图标名称：`home`、`table`、`sheet`、`document`、`file`、`folder`、`mail`、`cart`、`warning`、`star`、`calendar`、`image`、`music`、`upload`、`download`、`settings`、`people`、`check`、`chart`、`truck`、`receipt`、`globe`、`code`、`link`。省略 `{icon:...}` 时自动识别图标。

## 访问

https://mqmux.github.io/

项目通过 GitHub Pages 发布。
