import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { projects, site } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

export function HomePage() {
  useDocumentTitle('资深产品设计师 / 全链路设计开发')
  const [activeWhat, setActiveWhat] = useState(0)
  const [heroScrollShift, setHeroScrollShift] = useState(0)
  const featuredProjects = projects.slice(0, 3)

  useEffect(() => {
    let frame = 0
    const updateShift = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setHeroScrollShift(Math.min(window.scrollY * 0.2, 96)))
    }
    updateShift()
    window.addEventListener('scroll', updateShift, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateShift)
    }
  }, [])

  const whatIActuallyDo = [
    {
      number: '01',
      title: '产品与用户体验',
      code: 'PD-01',
      copy: '视觉设计之前的策略思考：需求梳理、用户流程规划、线框图绘制与产品逻辑打磨。在进入视觉细节前，我优先理清业务诉求。',
      tags: ['需求分析', '用户流程', '线框原型', '交互原型', '产品逻辑梳理'],
    },
    { number: '02', title: '界面与设计系统', code: 'UI-02', copy: '为网站、小程序、B 端平台输出可落地的实用界面；输出统一的设计系统与完整设计规范，保障高效对接开发。', tags: ['B 端界面', '网页 & 小程序', '设计系统', '设计规范', '开发对接'] },
    { number: '03', title: '工作室全链路交付', code: 'DL-03', copy: '从需求沟通到项目上线的商业项目全链路交付，融合前端认知、设计管理经验与 AI 辅助设计工作流。', tags: ['0-1 项目交付', '客户对接', '设计管理', 'AI 辅助设计', '项目验收'] },
  ]

  return (
    <>
      <section className="hero hero-home reference-hero">
        <Container>
          <div className="hero-reference-topline">
            <p className="hero-eyebrow"><span className="hero-accent-dot" aria-hidden="true" />LING YI — SENIOR UI/UX DESIGNER</p>
            <p className="hero-portfolio-label">PORTFOLIO — 2026</p>
          </div>
          <div className="hero-reference-content">
            <h1 className="hero-statement hero-reference-statement" style={{ '--hero-scroll-shift': `${heroScrollShift}px` } as CSSProperties}>
              <span>I DESIGN <span className="hero-image-pill"><img src={imagePath('hero-profile.jpg')} alt="LING YI 个人肖像" /></span></span>
              <span>INTERFACES</span>
              <span>THAT <em>MOVE</em> PEOPLE <span className="hero-image-pill hero-image-pill-wide"><img src={imagePath('hero-web.png')} alt="网页设计项目展示" /></span></span>
            </h1>
            <div className="hero-reference-bottom">
              <p className="hero-supporting-copy">{site.heroNote}</p>
              <a className="hero-scroll" href="#selected-work" aria-label="向下滚动到精选案例"><span className="hero-scroll-dot" aria-hidden="true" />SCROLL</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="selected-work reference-selected-work section" id="selected-work">
        <Container>
          <header className="selected-work-heading">
            <p className="eyebrow featured-work-label"><span aria-hidden="true" />精选案例</p>
            <span className="selected-work-count">{String(projects.length).padStart(2, '0')} - SELECTED</span>
          </header>
          <div className="selected-work-list">
            {featuredProjects.map((project, index) => (
              <Link className="selected-work-row" key={project.slug} to={`/work/${project.slug}`}>
                <span className="selected-work-index">{String(index + 1).padStart(2, '0')}</span>
                <h2>{project.title}</h2>
                <div className="selected-work-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <img className="selected-work-arrow home-horizontal-arrow" src={imagePath('arrow-right.svg')} alt="" />
              </Link>
            ))}
          </div>
          <Link className="selected-work-all" to="/work">查看更多 <img className="home-horizontal-arrow" src={imagePath('arrow-right.svg')} alt="" /></Link>
        </Container>
      </section>

      <section className="about-reference-page homepage-about-reference" id="reference-intro">
        <Container>
          <div className="about-reference-label">
            <span className="about-reference-dot" aria-hidden="true" />
            <p className="eyebrow">关于我</p>
          </div>

          <div className="about-reference-grid">
            <div className="about-reference-visual">
              <h2>DESIGN WITH<br />REAL <em>STAKES.</em></h2>
            </div>

            <div className="about-reference-copy">
              <p>我是<strong>LING YI</strong>，一名常驻深圳的高级 UI 设计师。从业近10+年，我依旧对每一个新的产品设计趋势与 AI 设计工作流保持强烈好奇。</p>
              <p>我的大部分项目，是面向企业的小程序、网站与 B 端数字化系统，服务文旅集团、硬件品牌以及成长型初创企业。这类项目需要兼顾业务目标、技术实现限制，同时交付流畅好用的用户体验。</p>
              <p>这些经历让我沉淀了大厂任职、设计团队管理以及个人工作室全案交付的实战经验。但我真正在意的事情很简单：把抽象的业务需求，转化为真实可用的产品界面。</p>
              <p className="about-reference-muted">离开屏幕我也依旧在思考设计：在脑海梳理设计规范，观察现实产品的交互细节，利用个人项目尝试 AI 设计新流程。设计不只是我的一份工作，更是我观察问题、解决问题的思维方式。</p>

              <div className="about-reference-stats" aria-label="About statistics">
                <div><strong>10+</strong><span>从业年限</span></div>
                <div><strong>40+</strong><span>服务客户</span></div>
                <div><strong>60+</strong><span>完成项目</span></div>
              </div>
              <Link className="about-reference-button" to="/about">查看更多 <img className="home-horizontal-arrow" src={imagePath('arrow-right.svg')} alt="" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="what-i-do-section" id="what-i-do">
        <Container>
          <div className="what-i-do-label"><span aria-hidden="true" />我能做什么</div>
          <h2>WHAT I ACTUALLY<br /><span className="what-i-do-highlight">DO.</span></h2>
          <div className="what-i-do-list">
            {whatIActuallyDo.map((item, index) => {
              const isOpen = activeWhat === index
              return (
                <div className={`what-i-do-row${isOpen ? ' is-open' : ''}`} key={item.code}>
                  <button type="button" onClick={() => setActiveWhat(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span className="what-i-do-number">{item.number}</span>
                    <span className="what-i-do-title">{item.title}</span>
                    <span className="what-i-do-code">{item.code}</span>
                    <span className="what-i-do-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="what-i-do-details">
                      <p>{item.copy}</p>
                      <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

    </>
  )
}
