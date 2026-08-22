import { Container } from '../components/Container'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useState } from 'react'

export function AboutPage() {
  useDocumentTitle('关于')
  const [activePrinciple, setActivePrinciple] = useState(1)
  const principles = [
    {
      number: '01',
      title: '设计服务业务目标',
      code: 'PR-01',
      copy: '设计不只是视觉美化，要贴合业务诉求，解决真实问题，让界面价值落地。',
      tags: ['业务理解', '需求拆解', '目标导向'],
    },
    {
      number: '02',
      title: '重视可落地的设计输出',
      code: 'PR-02',
      copy: '好看只是一时，可靠的设计体系才能长久。输出组件、规范，方便开发对接，适配迭代与团队协作。',
      tags: ['设计规范', '组件体系', '开发落地'],
    },
    {
      number: '03',
      title: '追求清晰克制的体验',
      code: 'PR-03',
      copy: '好体验不靠花哨效果，逻辑清晰、层级合理，让用户高效完成任务。',
      tags: ['信息架构', '逻辑梳理', '用户体验'],
    },
  ]

  return (
    <>
      <section className="about-dark-page">
      <Container>
        <div className="about-dark-layout about-dark-layout-no-photo">
          <div className="about-dark-copy">
            <p className="about-dark-label"><span aria-hidden="true" />关于我-LING YI</p>
            <h1>DESIGN IS<br />THE <em>LENS.</em></h1>
          </div>
          <div className="about-dark-intro-column">
            <p className="about-dark-intro">我是<strong>LING YI</strong>，一名常驻深圳的高级 UI 设计师。从业近10+年，我依旧对每一个新的产品设计趋势与 AI 设计工作流保持强烈好奇。<br /><br />从需求梳理、用户流程和产品策略，到界面设计、设计系统与开发对接，我持续关注产品能否真正服务业务，也能让用户轻松完成任务。<br /><br />设计不只是把界面做得好看，更是让抽象的目标变成真实可用的产品体验。</p>
          </div>

        </div>
      </Container>
      </section>
      <section className="about-principles-section">
      <Container>
        <div className="about-principles-heading">
          <p className="about-principles-label"><span aria-hidden="true" />我的设计思考</p>
          <h2>HOW I THINK ABOUT<br />DESIGN.</h2>
        </div>
        <div className="about-principles-list">
          {principles.map((principle, index) => {
            const isOpen = activePrinciple === index
            return (
              <div className={`about-principle-row${isOpen ? ' is-open' : ''}`} key={principle.code}>
                <button type="button" onClick={() => setActivePrinciple(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="about-principle-number">{principle.number}</span>
                  <span className="about-principle-title">{principle.title}</span>
                  <span className="about-principle-code">{principle.code}</span>
                  <span className="about-principle-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && principle.copy && (
                  <div className="about-principle-details">
                    <p>{principle.copy}</p>
                    <div>{principle.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                )}
              </div>
            )
          })}
          </div>
        <div className="about-principles-stats" aria-label="工作数据">
          <div><strong>10+</strong><span>从业年限</span></div>
          <div><strong>40+</strong><span>服务客户</span></div>
          <div><strong>60+</strong><span>完成项目</span></div>
        </div>
      </Container>
      </section>
    </>
  )
}
