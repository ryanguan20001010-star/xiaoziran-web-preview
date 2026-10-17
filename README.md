# 小自然在线交互原型

**版本：** Web Preview `0.1.0`（来源蓝图 `Core Page Blueprint v0.2`）  
**状态：** 静态概念原型；线上预览链接与部署证据见 [`DEPLOYMENT.md`](./DEPLOYMENT.md)。

本目录保存可独立运行和维护的 HTML/CSS/JavaScript 原型，不是正式微信小程序工程。它用于体验七个页面、页面导航、日期与人数、3/4 Tab 比较、快捷服务、入住阶段和设施说明展开等交互。

## 本地预览

在项目根目录执行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory prototype/web-preview
```

浏览器打开 `http://127.0.0.1:4173/`。也可使用任意静态 HTTP 文件服务器托管本目录。

## 文件

- `index.html`：页面结构与原型外壳。
- `styles.css`：响应式样式；系统无衬线字体栈遵循 Visual Language v0.1。
- `app.js`：页面、导航和演示交互。
- `assets/reference_*.jpg`：三张外部摄影参考图，仅用于视觉节奏，不代表小自然实景。
- `IMAGE_SOURCES.csv`：参考图片来源、用途、许可说明、本地哈希与状态。
- [`QA_REPORT.md`](./QA_REPORT.md)：本地浏览器检查、部署后检查和已知验证边界。
- [`DEPLOYMENT.md`](./DEPLOYMENT.md)：预览地址、托管状态、版本与回滚步骤。
- [`CHANGELOG.md`](./CHANGELOG.md)：版本修改记录。

## 原型边界

- 不含正式微信小程序工程、库存/订单/支付后端、真实客服或导航服务。
- 房型、价格、库存、政策和运营信息均为待接入/待确认状态；点击不会生成订单。
- 3 Tab 与 4 Tab 只是结构比较，不代表已冻结的导航决策。
- 图片为 `REFERENCE_PHOTOGRAPHY`，不可冒充小自然场景；真实图片和业务事实需另行核验。
- 页面采用 Web 静态实现。浏览器模拟不能证明微信开发者工具、微信内置浏览器或实体 iPhone 上的生产兼容性。

## 对应评审

项目级评审记录位于 `reviews/web_preview_prototype_review.md` 和 `reviews/web_preview_prototype_design_checklist.md`；来源蓝图 v0.2 位于 `XIAOZIRAN_CORE_PAGE_BLUEPRINT_V0_2/README.md`。这些文件保留在完整项目目录中，不随静态网站发布。
