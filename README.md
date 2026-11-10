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

## 桌宠

页面包含 DeepSeek 鲸鱼娘、GPT 白龙娘、Claude 橙书娘、Gemini 星猫娘，分别提供 106、193、166、100 段完整连续动画。每只都有独立脚本，可单独引用或同时使用；共用原版动作播放器和物理，支持拖拽、甩抛、弹弓、相互碰撞，以及生成和移除小宠物。

右键或手机长按打开深色动作菜单，可调整名称、大小、隐藏、固定和点击音效。四只共用原鲸鱼的按下/松开音效，提前加载并解码到内存；各自可静音。设置按来源、页面路径、角色分别保存，动画按需下载。

引用方式见 [pet/pets/README.md](pet/pets/README.md)，素材来源见 [NOTICE.md](pet/pets/NOTICE.md)。原独立鲸鱼 `pet/pet.js` 保留。基于 [dsh-pet](https://github.com/PC2005-cloud/dsh-pet)，小宠物功能参考 [dsh-Jpet-phone](https://github.com/Jcnet-9527/dsh-Jpet-phone)，代码许可见 `pet/LICENSE.*.txt`。

图标和宠物脚本使用 `https://mqmux.github.io/` 完整 URL；DeepSeek 和共享音效从本站加载，其他三套动画通过固定版本的 GitHub 原始资源 URL 按需加载；完整资源保存在本仓库，复制 HTML 到其他位置仍使用 GitHub 上的素材。
