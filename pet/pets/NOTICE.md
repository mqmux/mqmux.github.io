# AI 桌宠素材说明

当前使用的是完整连续动作资源：

- DeepSeek：沿用 [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) 的 106 段原始 WebM；共享现有 `/pet/assets/webm/`。角色及素材出处沿用原项目和本站 `/pet/` 中的许可、第三方声明。
- GPT：193 段 WebM，来自 [hairyf/dsh-pet-gpt](https://github.com/hairyf/dsh-pet-gpt)，该项目由 [hunmer/aboutme-pets](https://github.com/hunmer/aboutme-pets) 的 GPT 动作图集逐帧转码。
- Claude：166 段 WebM，来自 [hairyf/dsh-pet-claude](https://github.com/hairyf/dsh-pet-claude)，上游同为 hunmer/aboutme-pets。
- Gemini：100 段，由 hunmer/aboutme-pets 的 Gemini 动作图集按原元数据逐帧转换为透明 VP9 WebM；保留原画幅、帧数和时序。

上游动画素材约定禁止商用，公开二创须署名上游仓库。角色均为社区非官方同人，与模型公司无关联。原始来源声明保留在各 `native/<角色>/SOURCE-NOTICE.txt`（如上游提供）中。

原生播放器和物理代码复用 dsh-pet 0.3.8（48007b6）与本站原有网页适配，代码 MIT 许可见上级目录 `LICENSE.dsh-pet.txt`；React/React DOM 许可也沿用上级目录文件。本站增量适配负责多角色注册、独立设置、素材路径和样式命名隔离。

