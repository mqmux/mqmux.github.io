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

## 请求按钮

在「链接」弹窗的显示方式中选择「请求按钮」，填写地址、请求方法，可选请求头（JSON 对象）和请求体（JSON 或文本）。支持 GET、POST、PUT、PATCH、DELETE、HEAD、OPTIONS。GET/HEAD 不发送请求体。点击按钮会在当前页面发出请求，不跳转页面；旁边的铅笔用于编辑配置。

原文保存为显式增强格式：

```md
:::request
{
  "title": "发送消息",
  "url": "https://example.com/api/message",
  "method": "POST",
  "headers": {"Content-Type": "application/json"},
  "body": {"message": "hello"}
}
:::
```

页面加载不会自动发送。请求中禁用重复点击，30 秒超时，完成后显示 HTTP 状态并可展开响应预览；响应内容不写入笔记。请求直接由浏览器发出，跨域接口需允许网页来源的 CORS 请求。页面重载后不保留响应预览。

## 访问

https://mqmux.github.io/

项目通过 GitHub Pages 发布。

## 鲸鱼娘

右下角包含完整 106 个动作的鲸鱼娘。右键或手机长按打开深色菜单，可点播动作、调整大小、隐藏、固定位置，以及生成最多 4 只小鲸鱼。支持拖拽、甩抛、弹弓和宠物碰撞；数量与位置保存在当前浏览器。

模块位于 `pet/`，动画按需加载。移植时复制此目录并引用 `pet/pet.js`。基于 [dsh-pet](https://github.com/PC2005-cloud/dsh-pet)，小鲸鱼功能参考 [dsh-Jpet-phone](https://github.com/Jcnet-9527/dsh-Jpet-phone)，许可说明见 `pet/LICENSE.*.txt`。
