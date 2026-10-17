const photo = {
  meadow: {
    local: "assets/reference_meadow.jpg",
    remote:
      "https://images.unsplash.com/photo-1773303460745-c87f0f0402f8?auto=format&amp;fit=crop&amp;w=1800&amp;q=80",
    alt: "草地与野花间的小路，外部摄影参考",
  },
  forest: {
    local: "assets/reference_forest_path.jpg",
    remote:
      "https://images.unsplash.com/photo-1738597967163-4ea24911eb21?auto=format&amp;fit=crop&amp;w=1400&amp;q=78",
    alt: "林间道路，外部摄影参考",
  },
  moss: {
    local: "assets/reference_moss_path.jpg",
    remote:
      "https://images.unsplash.com/photo-1770720135572-80c48b092079?auto=format&amp;fit=crop&amp;w=1400&amp;q=78",
    alt: "苔藓与森林小径，外部摄影参考",
  },
};
const state = {
  screen: "home",
  tabMode: 4,
  adults: 1,
  checkin: "",
  checkout: "",
  stayPhase: "before",
  policyOpen: false,
};
const meta = {
  home: {
    title: "04-01 / 首页",
    lead: "首屏以大面积摄影建立感受；文字只负责定位与引导。住宿是一个明确的主要动作，快捷服务保持可达但不抢主视觉。",
    modules: [
      "大面积真实摄影 Hero（当前为外部参考图）",
      "一个住宿主操作",
      "四个以内的快捷服务入口",
      "少量精选体验内容",
    ],
    flow: "首页 → 日期/人数 → 房型列表 → 房型详情 → 预订确认",
  },
  rooms: {
    title: "04-02 / 房型列表",
    lead: "先让用户选择或修改日期与人数，再比较真实房型。当前不展示虚构房名、价格、库存或设施。",
    modules: [
      "日期/人数摘要与修改入口",
      "真实房型摄影与名称（待接入）",
      "容量、面积、床型等事实（待确认）",
      "真实价格与可订状态（接口待接入）",
      "无结果、售罄与错误状态",
    ],
    flow: "日期/人数 → 房型列表 → 房型详情",
  },
  detail: {
    title: "04-03 / 房型详情",
    lead: "先展示房型实景，再呈现决策事实与正式政策。当前用明确占位说明缺少小自然真实房型图和已确认字段。",
    modules: [
      "房型实景图（待提供）",
      "房型名称与简短说明（待确认）",
      "人数、面积、床型等事实",
      "设施与体验（逐项核实）",
      "正式政策与固定 CTA",
    ],
    flow: "房型列表 → 房型详情 → 选择日期/查看价格 → 预订确认",
  },
  booking: {
    title: "04-04 / 预订确认",
    lead: "这是交易任务页，不采用杂志式叙事。日期、人数、房型、费用与取消政策必须在真实提交前清楚可见。",
    modules: [
      "入住/离店日期与人数核对",
      "真实房型与联系人字段",
      "费用明细（不显示假价格）",
      "正式取消/退款政策",
      "提交状态与真实接口结果",
    ],
    flow: "房型详情 → 预订摘要 → 真实订单/支付（当前未接入）",
  },
  explore: {
    title: "04-05 / 在小自然",
    lead: "把高频服务和体验探索分成两个清楚的层级。上半部先解决“去哪找帮助”，下半部再提供“今天可以做什么”。",
    modules: [
      "最多四个高频服务入口",
      "更多服务面板",
      "体验内容与季节探索",
      "开放时段、费用和预约规则（待运营确认）",
    ],
    flow: "在小自然 → 服务/体验 → 数字发起或联系真人",
  },
  stay: {
    title: "04-06 / 我的入住",
    lead: "按出发前与入住中切换服务重点。它是订单关联的场景页，不另设一级 Tab；敏感入住信息不能放入静态演示。",
    modules: [
      "真实入住日期与房型（订单关联后显示）",
      "行前提醒、导航、入住方式",
      "住中电车、餐饮、活动与客服",
      "异常情况快速联系真人",
      "敏感信息权限与发送时机",
    ],
    flow: "我的/订单 → 我的入住 → 行前或住中服务",
  },
  account: {
    title: "04-07 / 我的",
    lead: "以订单状态和关系维护为主，不把住宿订单照搬成商城的发货状态。没有真实订单时使用清楚的空状态。",
    modules: [
      "待入住、入住中、已完成等订单分组（名称待系统确认）",
      "进入我的入住",
      "个人资料与帮助",
      "复访与关系延续（按业务需要）",
    ],
    flow: "我的 → 订单 → 我的入住 / 售后 / 再次预订",
  },
};
function icon(n) {
  const p = {
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
    bed: '<path d="M3 18V6"/><path d="M3 14h18v6"/><path d="M5 14V9h5a3 3 0 0 1 3 3v2"/><path d="M13 14V8h4a4 4 0 0 1 4 4v2"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.5-3.3 3-5 7-5s6.5 1.7 7 5"/>',
    chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-4-.9L4 20l1.2-3.3A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7z"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    food: '<path d="M4 3v7a3 3 0 0 0 6 0V3"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M17 3c3 2 3 6 0 8"/>',
    more: '<circle cx="5" cy="5" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="19" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/>',
  };
  return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (p[n] || p.more) + "</svg>";
}
function imageMarkup(key) {
  const p = photo[key];
  return `<div class="photo"><img src="${p.local}" data-remote-src="${p.remote}" alt="${p.alt}" loading="lazy"><div class="photo-fallback">外部摄影参考未加载。<br>请联网打开，或运行 assets/download_reference_images.sh 下载本地素材。<br>不会用渐变色块冒充真实照片。</div></div>`;
}
function homeMarkup() {
  return `<section class="hero photo"><img src="${photo.meadow.local}" data-remote-src="${photo.meadow.remote}" alt="草地与野花间的小路，外部摄影参考" loading="eager"><div class="photo-fallback">外部摄影参考未加载。<br>请联网打开，或运行 assets/download_reference_images.sh 下载本地素材。<br>不会用渐变色块冒充真实照片。</div><div class="hero-copy"><div class="hero-kicker">SEASONAL LIVING · 01</div><h2>把时间，交还给自然</h2><p>在季节里，慢下来一点。</p><button class="primary-light" data-action="booking">选择日期，看看住处 <span>↗</span></button></div></section><section class="dock" aria-label="快捷服务"><button class="dock-item" data-action="service-contact"><span class="dock-icon">${icon("chat")}</span><span>联系客服</span></button><button class="dock-item" data-action="service-location"><span class="dock-icon">${icon("pin")}</span><span>到店导航</span></button><button class="dock-item" data-action="service-food"><span class="dock-icon">${icon("food")}</span><span>餐饮</span></button><button class="dock-item" data-action="services"><span class="dock-icon">${icon("more")}</span><span>更多服务</span></button></section><section class="section"><div class="section-head"><div><h3>在这里，做一点自己的事</h3><p class="section-sub">精选内容 · 按季节慢慢更新</p></div><a href="#" data-action="go-explore">继续发现 ↗</a></div><div class="story-list"><article class="story-card">${imageMarkup("forest")}<h4>沿着小路走走</h4><p>体验内容示意 · 非小自然实景</p></article><article class="story-card">${imageMarkup("moss")}<h4>在户外待一会儿</h4><p>摄影语言参考 · 运营内容待确认</p></article></div></section><div class="reference-note">本页外部照片仅用于验证构图与视觉节奏，不代表小自然实际环境。</div>`;
}
function roomsMarkup() {
  return `<div class="page-pad"><div class="page-kicker">STAY / 02</div><h2 class="page-title">住在这里</h2><p class="page-intro">先确定日期与人数，再看适合自己的空间。真实房型与价格接入前，不展示虚构信息。</p><button class="date-strip" data-action="booking"><span><strong>${state.checkin && state.checkout ? state.checkin + " — " + state.checkout : "选择入住日期"}</strong><span>${state.adults} 位成人 · 日期/人数可修改</span></span><span class="chevron">＋</span></button><div class="notice neutral">当前为结构原型：房型实景、名称、价格、库存和政策尚未接入。</div>${[1, 2].map(() => `<article class="room-card"><div class="room-placeholder">小自然真实房型摄影<br>待接入</div><div class="room-copy"><h3>房型信息待确认</h3><p>以实际房型资料为准，不预设房型名称或设施。</p><div class="room-facts"><span>人数待确认</span><span>面积待确认</span><span>床型待确认</span></div><button class="btn-secondary" data-action="room-detail">查看页面结构 →</button></div></article>`).join("")}<p class="page-intro">选定日期后，真实业务系统应返回可订状态与价格；无结果时需解释原因并提供修改条件的入口。</p></div>`;
}
function detailMarkup() {
  return `<div class="page-pad"><div class="page-kicker">ROOM DETAIL / 03</div><h2 class="page-title">房型详情</h2><p class="page-intro">用真实空间与必要事实帮助用户判断，不用装饰性文案替代信息。</p><div class="detail-image">房型实景图待提供<br>禁止使用其他住宿照片冒充小自然房型</div><h3 style="font:500 19px var(--sans);margin:0 0 5px">房型名称待确认</h3><p class="page-intro">一句话空间描述待项目方确认。</p><div class="facts-grid"><div class="fact"><strong>入住人数</strong><span>真实数据待接入</span></div><div class="fact"><strong>空间面积</strong><span>真实数据待接入</span></div><div class="fact"><strong>床型配置</strong><span>真实数据待接入</span></div></div><div class="info-list"><button class="info-row" data-action="policy"><span>设施与空间细节</span><span>查看说明　＋</span></button><div id="policy-details" hidden class="notice neutral">此处应呈现经核实的设施、使用条件和真实照片。当前不填入未经确认的内容。</div><div class="info-row"><span>入住 / 取消政策</span><span>待接入正式政策</span></div><div class="info-row"><span>可订日期与价格</span><span>查询后显示</span></div></div></div><div class="sticky-demo"><div><small>房型 / 价格</small><strong>查询后显示</strong></div><button class="btn-primary" data-action="booking">选择日期与人数</button></div>`;
}
function bookingMarkup() {
  return `<div class="page-pad"><div class="page-kicker">BOOKING / 04</div><h2 class="page-title">预订前确认</h2><p class="page-intro">在真正提交前，让用户核对日期、人数、房型、费用与取消政策。当前只展示字段结构。</p><div class="notice">演示原型：未连接库存、订单、支付或客服系统；不会提交真实预订。</div><div class="info-list"><button class="info-row" data-action="booking"><span>入住 / 离店日期</span><span>${state.checkin && state.checkout ? state.checkin + " — " + state.checkout : "尚未选择"}　↗</span></button><button class="info-row" data-action="booking"><span>入住人数</span><span>${state.adults} 位成人　↗</span></button><div class="info-row"><span>房型</span><span>待选择真实房型</span></div><div class="info-row"><span>费用明细</span><span>真实报价后显示</span></div><div class="info-row"><span>取消 / 退款政策</span><span>正式政策待接入</span></div></div><div class="action-row"><button class="btn-secondary" data-action="room-detail">返回房型详情</button><button class="btn-primary" data-action="demo-submit">检查待接入字段</button></div><p class="page-intro">真实实现必须处理字段校验、价格刷新、库存变化、提交失败、支付结果与订单状态；不能只凭前端点击显示成功。</p></div>`;
}
function exploreMarkup() {
  return `<div class="page-pad"><div class="page-kicker">DISCOVER / 05</div><h2 class="page-title">在小自然</h2><p class="page-intro">先找到需要的服务，再慢慢发现可以体验的事。</p><div class="service-grid"><button class="service-tile" data-action="service-contact">${icon("chat")}<strong>联系客服</strong><span>预订前、途中与住中帮助</span></button><button class="service-tile" data-action="service-location">${icon("pin")}<strong>交通与导航</strong><span>实际地址与服务规则待确认</span></button><button class="service-tile" data-action="service-food">${icon("food")}<strong>餐饮</strong><span>菜单、时段与预约待确认</span></button><button class="service-tile" data-action="services">${icon("more")}<strong>更多服务</strong><span>按场景查看服务目录</span></button></div><div class="section-head" style="margin-top:20px"><div><h3>今天可以怎么生活</h3><p class="section-sub">体验与周边 · 内容方向示意</p></div></div><article class="feed-card">${imageMarkup("forest")}<div><span class="feed-tag">OUTDOOR / 01</span><h4>沿着小路去看看</h4><p>以真实地点、开放时间与注意事项支撑探索，不用宣传语代替服务信息。</p></div></article><article class="feed-card">${imageMarkup("moss")}<div><span class="feed-tag">SLOW MOMENT / 02</span><h4>给日常留一点空白</h4><p>具体活动、费用、预约与开放状态须由运营确认。</p></div></article><div class="reference-note">上述图片均为外部摄影参考，不代表小自然实景或已提供的活动。</div></div>`;
}
function stayMarkup() {
  let before = state.stayPhase === "before";
  return `<div class="page-pad"><div class="page-kicker">MY STAY / 06</div><h2 class="page-title">我的入住</h2><p class="page-intro">把预订、行前信息和现场服务连起来。该页面从真实订单进入，不额外增加一级 Tab。</p><div class="phase-toggle"><button class="${before ? "active" : ""}" data-action="phase-before">出发前</button><button class="${!before ? "active" : ""}" data-action="phase-during">入住中</button></div>${before ? `<div class="stay-card"><h3>准备好出发了吗？</h3><p>订单确认后，这里显示真实入住日期、房型、行前提醒、导航与入住方式。</p></div><div class="service-grid"><button class="service-tile" data-action="service-location">${icon("pin")}<strong>如何抵达</strong><span>实际地址待确认</span></button><button class="service-tile" data-action="service-contact">${icon("chat")}<strong>联系服务人员</strong><span>客服配置待接入</span></button></div>` : `<div class="stay-card"><h3>住得自在，需要时找得到人</h3><p>真实入住状态下提供交通、餐饮、活动与人工帮助。可用性应随订单、时间和运营规则变化。</p></div><div class="service-grid"><button class="service-tile" data-action="service-location">${icon("pin")}<strong>园内交通</strong><span>班次 / 叫车规则待确认</span></button><button class="service-tile" data-action="service-food">${icon("food")}<strong>餐饮与活动</strong><span>菜单 / 时段待确认</span></button><button class="service-tile" data-action="service-contact">${icon("chat")}<strong>联系客服</strong><span>真人服务入口</span></button><button class="service-tile" data-action="services">${icon("more")}<strong>更多服务</strong><span>完整目录</span></button></div>`}<div class="notice neutral">门锁密码、个人联系方式等敏感信息只能由真实订单权限与正式发送时机控制，不放入静态原型。</div></div>`;
}
function accountMarkup() {
  return `<div class="page-pad"><div class="account-head"><h2>我的小自然</h2><p>订单、入住信息与后续帮助</p></div><div class="empty-state"><div class="empty-icon">—</div><h3>订单将在这里呈现</h3><p>登录及订单接口接入后，按待入住、入住中、已完成等真实状态展示。当前不创建虚构订单。</p><button class="btn-secondary" data-action="go-rooms">看看住处 →</button></div><div style="margin-top:16px" class="account-row"><span>我的订单</span><span>查看　→</span></div><div class="account-row"><span>我的入住</span><button class="btn-quiet" data-action="go-stay">进入　→</button></div><div class="account-row"><span>帮助与客服</span><button class="btn-quiet" data-action="services">联系　→</button></div><div class="account-row"><span>关于小自然</span><span>品牌信息待确认</span></div></div>`;
}
function renderTabs() {
  const arr =
    state.tabMode === 3
      ? [
          ["home", "首页", "home"],
          ["explore", "在小自然", "compass"],
          ["account", "我的", "user"],
        ]
      : [
          ["home", "首页", "home"],
          ["rooms", "住宿", "bed"],
          ["explore", "在小自然", "compass"],
          ["account", "我的", "user"],
        ];
  const active =
    state.screen === "rooms" || state.screen === "detail" || state.screen === "booking"
      ? "rooms"
      : state.screen === "explore"
        ? "explore"
        : state.screen === "account" || state.screen === "stay"
          ? "account"
          : "home";
  const el = document.getElementById("tabs");
  el.dataset.count = String(state.tabMode);
  el.innerHTML = arr
    .map(
      (t) =>
        `<button class="tab ${t[0] === active ? "active" : ""}" data-tab="${t[0]}">${icon(t[2])}<span>${t[1]}</span></button>`,
    )
    .join("");
}
function primeImages() {
  document.querySelectorAll("#screen img[data-remote-src]").forEach((img) => {
    if (img.dataset.primed) return;
    img.dataset.primed = "1";
    img.addEventListener("error", () => {
      if (!img.dataset.remoteTried) {
        img.dataset.remoteTried = "1";
        img.src = img.dataset.remoteSrc.replaceAll("&amp;", "&");
      } else {
        const p = img.closest(".photo");
        if (p) p.classList.add("failed");
      }
    });
    img.addEventListener("load", () => {
      const p = img.closest(".photo");
      if (p) p.classList.remove("failed");
    });
  });
}
function render() {
  const fn = {
    home: homeMarkup,
    rooms: roomsMarkup,
    detail: detailMarkup,
    booking: bookingMarkup,
    explore: exploreMarkup,
    stay: stayMarkup,
    account: accountMarkup,
  };
  document.getElementById("screen").innerHTML = fn[state.screen]();
  document
    .querySelectorAll("#navlist [data-screen]")
    .forEach((b) => b.classList.toggle("active", b.dataset.screen === state.screen));
  document.getElementById("ititle").textContent = meta[state.screen].title;
  document.getElementById("ilead").textContent = meta[state.screen].lead;
  document.getElementById("modules").innerHTML = meta[state.screen].modules
    .map((x) => `<li>${x}</li>`)
    .join("");
  document.getElementById("iflow").textContent = meta[state.screen].flow;
  document.getElementById("s1").textContent =
    state.screen === "home" ? "01" : state.screen === "booking" ? "05" : "02";
  document.getElementById("s2").textContent = state.screen === "home" ? "04" : "—";
  document.getElementById("compare3").classList.toggle("active", state.tabMode === 3);
  document.getElementById("compare4").classList.toggle("active", state.tabMode === 4);
  document
    .querySelectorAll('[data-action="tabmode-3"]')
    .forEach((b) => b.classList.toggle("active", state.tabMode === 3));
  document
    .querySelectorAll('[data-action="tabmode-4"]')
    .forEach((b) => b.classList.toggle("active", state.tabMode === 4));
  renderTabs();
  primeImages();
}
function toast(s) {
  const t = document.getElementById("toast");
  t.textContent = s;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
function openSheet(kind) {
  const o = document.getElementById("overlay");
  if (kind === "booking") {
    o.innerHTML = `<div class="sheet"><div class="sheet-top"><h3>选择日期与人数</h3><button class="close-btn" data-action="close-sheet">×</button></div><p>先确定大致行程。此处仅演示交互，不查询真实库存或价格。</p><div class="field-row"><div class="field"><label for="checkin">入住日期</label><input id="checkin" type="date" value="${state.checkin}"></div><div class="field"><label for="checkout">离店日期</label><input id="checkout" type="date" value="${state.checkout}"></div></div><div class="guest-row"><div><strong>成人</strong><small>人数演示值，不代表实际订单</small></div><div class="counter"><button data-action="adult-minus">−</button><span id="adult-count">${state.adults}</span><button data-action="adult-plus">＋</button></div></div><button class="btn-primary" data-action="apply-booking">应用选择，查看房型</button></div>`;
  } else {
    o.innerHTML = `<div class="sheet"><div class="sheet-top"><h3>快捷服务</h3><button class="close-btn" data-action="close-sheet">×</button></div><p>保留原有快捷服务习惯，按用户任务重新组织。具体入口、电话、客服配置与服务能力需由运营确认。</p><div class="sheet-services"><button class="sheet-service" data-action="service-contact">联系客服<small>咨询 / 需要人工帮助</small></button><button class="sheet-service" data-action="service-location">位置与导航<small>实际地址待确认</small></button><button class="sheet-service" data-action="service-food">餐饮<small>菜单 / 时段 / 预约待确认</small></button><button class="sheet-service" data-action="service-activities">活动与体验<small>开放状态待确认</small></button></div></div>`;
  }
  o.classList.add("show");
}
function closeSheet() {
  const o = document.getElementById("overlay");
  o.classList.remove("show");
  o.innerHTML = "";
}
function goTo(s) {
  state.screen = s;
  closeSheet();
  render();
  document.getElementById("screen").scrollTop = 0;
}
document.addEventListener("click", (e) => {
  const n = e.target.closest("[data-screen]");
  if (n) {
    goTo(n.dataset.screen);
    return;
  }
  const tab = e.target.closest("[data-tab]");
  if (tab) {
    goTo(tab.dataset.tab);
    return;
  }
  const b = e.target.closest("[data-action]");
  if (!b) return;
  if (b.tagName === "A") e.preventDefault();
  const a = b.dataset.action;
  if (a === "tabmode-3" || a === "tabmode-4") {
    state.tabMode = a === "tabmode-3" ? 3 : 4;
    render();
    return;
  }
  if (a === "booking") {
    openSheet("booking");
    return;
  }
  if (a === "services") {
    openSheet("services");
    return;
  }
  if (a === "close-sheet") {
    closeSheet();
    return;
  }
  if (a === "adult-plus") {
    state.adults = Math.min(8, state.adults + 1);
    document.getElementById("adult-count").textContent = state.adults;
    return;
  }
  if (a === "adult-minus") {
    state.adults = Math.max(1, state.adults - 1);
    document.getElementById("adult-count").textContent = state.adults;
    return;
  }
  if (a === "apply-booking") {
    state.checkin = document.getElementById("checkin")?.value || "";
    state.checkout = document.getElementById("checkout")?.value || "";
    closeSheet();
    goTo("rooms");
    if (!state.checkin || !state.checkout) toast("尚未选择完整日期；当前不查询真实库存。");
    else if (state.checkout <= state.checkin)
      toast("离店日期应晚于入住日期；当前为演示，不查询库存。");
    else toast("选择已更新；真实房态与价格尚未接入。");
    return;
  }
  if (a === "room-detail") {
    goTo("detail");
    return;
  }
  if (a === "go-rooms") {
    goTo("rooms");
    return;
  }
  if (a === "go-explore") {
    goTo("explore");
    return;
  }
  if (a === "go-stay") {
    goTo("stay");
    return;
  }
  if (a === "phase-before") {
    state.stayPhase = "before";
    render();
    return;
  }
  if (a === "phase-during") {
    state.stayPhase = "during";
    render();
    return;
  }
  if (a === "policy") {
    state.policyOpen = !state.policyOpen;
    const el = document.getElementById("policy-details");
    if (el) el.hidden = !state.policyOpen;
    return;
  }
  if (a === "demo-submit") {
    toast("仅字段结构演示：没有提交订单，也未连接支付。");
    return;
  }
  if (a === "service-contact") {
    closeSheet();
    toast("客服入口已定位；实际客服配置待接入。");
    return;
  }
  if (a === "service-location") {
    closeSheet();
    toast("导航入口已定位；实际地址与导航能力待确认。");
    return;
  }
  if (a === "service-food") {
    closeSheet();
    toast("餐饮入口已定位；菜单、时段与预约规则待确认。");
    return;
  }
  if (a === "service-activities") {
    closeSheet();
    toast("活动入口已定位；实际活动与开放状态待确认。");
    return;
  }
});
document.getElementById("overlay").addEventListener("click", (e) => {
  if (e.target.id === "overlay") closeSheet();
});
render();
