鲸鱼娘 · 原版网页运行时

来源：https://github.com/PC2005-cloud/dsh-pet
版本：0.3.8 / 48007b64ac0bebb2e97ac88344aed62de8399dd4
MIT 许可详见 LICENSE.dsh-pet.txt；React 许可另见对应 LICENSE 文件。

直接使用原版 PetMulti、动画切换、菜单、物理和积分模块。
assets/webm 内为完整 106 段原始动画，13 个动作分类。
单击随机回应和 Q 弹；拖拽弹簧跟随、甩抛反弹；双击按下并拖动为弹弓。
右键或手机长按打开原版动作菜单，可手动点播任意动作。

网页适配负责本地配置、隐藏恢复、大小、固定、位置记忆、后台暂停和资源地址。
DSH 专用余额、AI 对话及桌面窗口入口未接入本网站，事件动画仍可从动作菜单点播。
播放素材按需加载，配置和状态轮询在浏览器内存完成，不请求服务器接口。

构建入口：工作区 verification/pet-build/build.cjs
网站适配源码：verification/pet-build/{entry,adapter,menu-bridge}.ts
原始代码：verification/dsh-pet-upstream/dsh-pet/src
完整性审计：verification/pet-build/asset-audit.cjs

2026-10-23：参考 Jcnet-9527/dsh-Jpet-phone 的 CompanionModule / CompanionCodec
（5dca11bec783cc482812134f80bb59b71ed48c34）加入小鲸鱼（现已取消数量上限），大小为主宠的 75%。
网页复用现有 PetMulti 与原版 petCollision 物理：甩抛撞击后按动量弹开。
新增、移除、位置与数量保存于当前浏览器；菜单统一深色。

主宠菜单可移除所有小鲸鱼；达到 8 只时仅提示资源占用，不限制生成。

2026-10-23：支持 file:// 页面配置拦截；普通走动增加碰撞，碰到后停步并推开另一只；素材下载超时延长至 30 秒。构建期网页补丁位于 verification/pet-build/web-patches.cjs。

2026-10-23：拖动过程也会推撞其他鲸鱼，正在抓取的宠物不被碰撞打断。加入手机版按下/松开原音效及静音菜单，音效许可见 THIRD_PARTY_NOTICES.phone.md。

2026-10-23：自主走动支持连续推挤和多宠物接力推挤，屏幕边界及被抓住的宠物阻挡整条队列。实现位于 verification/pet-build/walking-push.ts。
