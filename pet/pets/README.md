# 可选 AI 桌宠脚本

四个入口共用由现有鲸鱼娘代码复制、适配的原生运行时 `native-world.js`。播放器、随机动作链、Q 弹、弹簧拖动、甩抛、弹弓、碰撞与完整动作菜单沿用 dsh-pet 0.3.8 及本站已有补丁。

```html
<script defer src="https://mqmux.github.io/pet/pets/deepseek.js?v=20261110-launcher1"></script>
<script defer src="https://mqmux.github.io/pet/pets/gpt.js?v=20261110-launcher1"></script>
<script defer src="https://mqmux.github.io/pet/pets/claude.js?v=20261110-launcher1"></script>
<script defer src="https://mqmux.github.io/pet/pets/gemini.js?v=20261110-launcher1"></script>
```

每只宠物一行，引用任意子集即可；运行时只加载一次。同页的新宠物及其小宠物共用原生碰撞站场，行走、拖拽、甩抛均可碰撞。资源相对于入口脚本定位，可跨网页使用。

- DeepSeek：原版 106 段动画，直接共用 `/pet/assets/webm/`，没有重复下载或制作另一套角色。
- GPT：193 段透明连续动画。
- Claude：166 段透明连续动画。
- Gemini：100 段透明连续动画。

动作文件按需下载。右键/长按支持点播全部动作、修改名称、大小、固定、隐藏及生成小宠物。设置按来源、页面路径、角色分别保存。DeepSeek 初次启用时复制旧鲸鱼的本页设置；原设置键不写入。

四个角色共用原鲸鱼的按下/松开两段点击音效，右键可各自开启或关闭。两个小音频提前下载并解码到内存，按压直接通过 Web Audio 播放；再次按压不重新下载或解码，闲置后恢复时也复用已解码的数据。

聊天首页只引用以上四个入口。原 `/pet/pet.js` 文件保持不变；其他网页仍可沿用它。如果在同一页面同时引用旧脚本和新 DeepSeek，会出现两个独立的鲸鱼，旧实例不加入新站场。

构建入口：`verification/pet-quality-upgrade/build-native.cjs`。动画下载与 Gemini 转码脚本、检查结果均在同目录。素材与许可见 [NOTICE.md](NOTICE.md)。

右下角保留一个 32px 宠物图标，点击展开角色列表，可分别显示/隐藏、全部显示/隐藏。点击外部或按 Escape 收起；隐藏状态仍按来源、页面路径、角色保存。

新增的三套完整动画保存在本仓库，通过固定版本的 `raw.githubusercontent.com` 完整 URL 按需加载，不打包进 Pages 发布产物。DeepSeek 和共享音效仍从本 Pages 站点加载。复制引用到其他网页无需更改资源路径。
