import type { Experience, Project, SanshengCaseStudy } from '../types'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

export const site = {
  name: 'Lin Studio',
  role: '资深产品设计师 / 全链路设计开发',
  location: '上海 · 远程服务全球',
  email: '399349314@qq.com',
  intro: '2007 年参加工作，2012 年开始网页设计，2016 年转型 UI 设计，2023 年起自主经营工作室。擅长从商务对接、需求梳理到 UI 设计、开发协作与项目测试，独立完成小程序、APP、网站、PC、B 端后台与大屏可视化的 0-1 全链路交付。',
  availability: '寻求资深产品设计 / UI 设计机会',
  heroNote: '10+ 互联网设计，跨网页‑移动端，兼具前端与管理能力，\n可独立完成商业项目 0‑1 全链路交付。',
  resumeLabel: '简历 / 索取 PDF',
  socials: [
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

export const heroStats = [
  { value: '10+', label: '工作经验' },
  { value: '60+', label: '上线项目' },
  { value: '0-1', label: '全链路交付能力' },
]

export const projects: Project[] = [
  {
    slug: 'sansheng-health',
    title: '全域智慧旅游平台',
    year: '2022.04‑2023.06',
    category: 'APP / 文旅数字化',
    summary: '面向文旅产业，基于数字孪生打造的一站式全域旅游互联网服务平台，赋能景区、商户与游客，实现线上线下一体化文旅体验。',
    description: '面向文旅产业，基于数字孪生打造的一站式全域旅游互联网服务平台，赋能景区、商户与游客，实现线上线下一体化文旅体验。',
    services: ['产品策略', '交互设计', 'UI 设计', '全链路交付'],
    cover: '全域智慧旅游平台',
    image: imagePath('sansheng-health-hero.jpg'),
    cardImage: imagePath('sansheng-health-hero.jpg'),
    accent: '#E8E4FA',
    featured: true,
    type: 'product',
  },
  {
    slug: 'powercolor-service',
    title: '数字藏品',
    year: '2022.06‑2022.09',
    category: '小程序 / 文化数字收藏',
    summary: '围绕文物IP数字化复刻、链上确权、藏品展示与权益兑换，面向收藏用户的合规文化数字藏品小程序。',
    description: '围绕文物IP数字化复刻、链上确权、藏品展示与权益兑换，面向收藏用户的合规文化数字藏品小程序。',
    services: ['产品策略', '交互设计', 'UI 设计', '小程序交付'],
    cover: '数字藏品',
    image: imagePath('digital-collectibles.jpg'),
    cardImage: imagePath('digital-collectibles.jpg'),
    accent: '#E7F2FF',
    featured: true,
    type: 'product',
  },
]

export const sanshengCaseStudy: SanshengCaseStudy = {
  overview: {
    copy: '全域智慧旅游平台 APP，面向文旅产业打造的数字化服务产品。依托数字孪生技术，连接景区、商户与游客，打通线上线下服务场景，让旅行规划、游览与消费都更清晰顺畅。',
    images: [imagePath('sansheng-overview-01.jpg'), imagePath('sansheng-overview-02.jpg')],
  },
  painPoints: {
    copy: '业务信息分散、游客决策链路长，景区与商户也缺少统一的数字化服务入口。设计目标是让复杂的文旅资源被看见、被理解，并在一个平台内完成从发现到出行的完整体验。',
    items: ['统一景区、商户与游客的服务入口', '降低多角色使用门槛，建立清晰的信息层级', '补齐搜索、行程、订单与售后等关键链路', '以可扩展的组件与规范支撑持续迭代'],
    image: imagePath('sansheng-pain-points.jpg'),
  },
  responsibilities: {
    intro: '作为 UI 设计负责人主导 APP0-1 设计工作：',
    items: ['参与需求研讨，梳理 APP 整体业务框架与信息架构；', '主导整套 APP 交互与 UI 设计，确定产品主框架、核心首页功能板块；', '跟进 1.0、2.0、3.0 版本迭代设计，输出界面、组件及规范；', '对接产品、开发，评审界面，跟进设计落地，协调版本迭代需求。'],
  },
  process: {
    items: ['从用户任务出发梳理信息架构', '通过低保真原型验证关键路径', '建立统一组件、色彩与版式规则', '在真实场景中持续测试并优化体验'],
    image: imagePath('sansheng-process.jpg'),
  },
  layout: {
    image: imagePath('sansheng-layout.jpg'),
    intro: '屏幕尺寸、导航模式、组件间距统一约束，确保不同页面在开发与迭代中保持一致。',
    groups: [
      { title: '屏幕布局 Screen Layout', intro: '以 375 × 812 为基准建立响应式栅格。', rows: [{ label: '内容区域', description: '左右 16px 内边距，模块间距 16–32px' }, { label: '底部 Tab', description: '固定高度 83px，安全区域内对齐' }] },
      { title: '导航模式 Navigation', intro: '用底部 Tab、顶部返回与分段导航组织任务。', rows: [{ label: '底部 Tab', description: '核心入口保持稳定，当前状态清晰' }, { label: '搜索框', description: '圆角容器，支持历史与快捷筛选' }] },
      { title: '按钮规范 Buttons', intro: '主次按钮有明确层级，优先保证触达与反馈。', rows: [{ label: '主按钮 Primary', description: '高对比填充，承载关键行动', swatch: '#3573FF' }, { label: '次按钮 Secondary', description: '描边样式，适用于次要操作', swatch: '#FFFFFF' }] },
      { title: '图标规范 Icons', intro: '图标保持线性、圆角与统一视觉重量。', rows: [{ label: '导航图标', description: '24px 基准，选中态使用品牌色' }, { label: '功能图标', description: '16px / 20px 两级尺寸' }] },
    ],
  },
  colors: {
    image: imagePath('sansheng-colors.jpg'),
    intro: '以清晰、可信赖的蓝色为主色，搭配深色与高亮色建立产品层级。',
    groups: [
      { title: '品牌色 Brand Colors', rows: [{ label: 'Primary Blue', description: '#3573FF', swatch: '#3573FF' }, { label: 'Dark Navy', description: '#132A53', swatch: '#132A53' }, { label: 'Coral', description: '#FF735D', swatch: '#FF735D' }] },
      { title: '文字色 Text Colors', rows: [{ label: 'Near Black', description: '#101010', swatch: '#101010' }, { label: 'Dark Gray', description: '#333333', swatch: '#333333' }, { label: 'Medium Gray', description: '#666666', swatch: '#666666' }] },
      { title: '功能色 Functional', rows: [{ label: 'Error Red', description: '错误提示与风险操作', swatch: '#F21818' }, { label: 'Success Green', description: '完成状态与成功反馈', swatch: '#08C885' }] },
      { title: '渐变色 Gradients', rows: [{ label: 'Blue Gradient', description: '#3573FF → #89DAFF', swatch: 'linear-gradient(90deg,#3573ff,#89daff)' }, { label: 'Purple Gradient', description: '#4339FF → #DB8FFF', swatch: 'linear-gradient(90deg,#4339ff,#db8fff)' }] },
    ],
  },
  spacing: {
    image: imagePath('sansheng-spacing.jpg'),
    intro: '统一的间距和圆角规范，确保界面节奏一致、视觉整齐。',
    groups: [
      { title: '间距体系 Spacing Scale', intro: '间距以 4px 为基础单元，采用 4/8/10/16/24/32/40 的级数。', rows: [{ label: 'XS / 4px', description: '图标与文字间距、紧凑元素间隙' }, { label: 'SM / 8px', description: '列表项间距、紧凑布局间隙' }, { label: 'MD / 10px', description: '卡片内元素间距' }, { label: 'BASE / 16px', description: '页面侧边距、标准内边距' }, { label: 'LG / 24px', description: '模块间隔、表单内边距' }, { label: 'XL / 32px', description: '大模块间隔、板块分割' }, { label: '2XL / 40px', description: '页面底部间距、大区域分隔' }] },
      { title: '圆角规范 Corner Radius', intro: '圆角根据组件尺寸分级使用，保持亲和与秩序。', rows: [{ label: 'XS / 3px', description: '小型标签、徽标', count: '×35' }, { label: 'SM / 5px', description: '输入框、小按钮、列表项', count: '×109' }, { label: 'MD / 8px', description: '中等按钮、卡片元素', count: '×34' }, { label: 'LG / 10px', description: '图片容器、对话框', count: '×31' }, { label: 'XL / 12px', description: '卡片、模态弹窗', count: '×32' }, { label: '2XL / 15px', description: '大卡片、底部弹出面板', count: '×60' }, { label: '3XL / 20px', description: '页面级容器、浮层面板', count: '×48' }, { label: 'Full / 30px', description: '胶囊按钮、搜索框、标签', count: '×34' }] },
    ],
  },
  outcomes: {
    copy: '围绕全域旅游平台的核心目标，完成从产品策略、交互设计到视觉规范与开发协作的完整交付。',
    items: ['完成全域旅游 APP 0-1 设计与交付', '建立可复用的组件与设计规范', '覆盖景区、商户、游客多角色体验', '持续优化版本并支持后续业务扩展'],
    image: imagePath('sansheng-outcomes.jpg'),
  },
}

export const proofPoints = [
  { value: '19 年', label: '正式工作经验' },
  { value: '14 年', label: '网页设计经验' },
  { value: '10 年', label: 'UI / 产品设计经验' },
  { value: '0-1', label: '全链路交付能力' },
]

export const capabilities = [
  {
    number: '01',
    title: '需求与产品策略',
    copy: '承接商务沟通与需求梳理，把业务目标、用户问题和产品范围整理成可执行方案。',
    tags: ['商务对接', '需求分析', '产品规划'],
  },
  {
    number: '02',
    title: 'UI / UX 产品设计',
    copy: '从信息架构、交互流程到视觉界面，覆盖小程序、APP、网站、PC 与 B 端后台体验。',
    tags: ['UX / UI', '交互设计', '设计系统'],
  },
  {
    number: '03',
    title: '开发协作与项目交付',
    copy: '理解前端实现与技术边界，统筹设计、开发、测试和客户两端，推动项目稳定落地。',
    tags: ['前端协作', '项目测试', '交付管理'],
  },
]

export const deliveryProof = [
  { label: '需求', value: '商务沟通 · 需求梳理 · 产品规划' },
  { label: '设计', value: '交互流程 · UI 视觉 · 设计系统' },
  { label: '交付', value: '开发协作 · 项目测试 · 两端统筹' },
]

export const experience: Experience[] = [
  {
    period: '2023 — 至今',
    role: '工作室负责人 / 全链路产品设计师',
    company: 'Lin Studio',
    description: '负责商务对接、需求梳理、UI 设计、开发协作、项目测试及客户与技术两端统筹。',
  },
  {
    period: '2016 — 2023',
    role: 'UI / 产品设计师',
    company: '数字产品项目',
    description: '正式转型 UI 设计，负责 APP、小程序、网站、PC 与 B 端后台的产品体验和界面设计。',
  },
  {
    period: '2012 — 2016',
    role: '网页设计师',
    company: '网页与数字项目',
    description: '从网页设计起步，积累页面规划、视觉表达、客户沟通与项目交付经验。',
  },
  {
    period: '2007 — 2012',
    role: '职业生涯起步',
    company: '项目协作与客户服务',
    description: '正式参加工作，建立对业务沟通、协作推进和结果交付的长期理解。',
  },
]
