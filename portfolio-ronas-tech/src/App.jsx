import { useEffect, useMemo, useState } from 'react'
import portraitUrl from '../assets/ronael-moura.webp'

const projects = [
  {
    number: '02',
    title: 'Beatriz Mendes · Dados',
    category: 'client',
    type: 'Projeto publicado · Portfólio',
    description: 'Portfólio profissional sob medida para posicionar uma analista de dados aplicada à saúde com narrativa editorial, clareza e confiança.',
    tags: ['React', 'UX/UI', 'Acessibilidade', 'SEO', 'Vercel'],
    link: 'https://beatriz-mendes-portfolio.vercel.app/',
    cta: 'Visitar site',
    accent: 'sage',
    visual: 'healthdata',
  },
  {
    number: '03',
    title: 'StockFlow API',
    category: 'backend',
    type: 'Backend · API',
    description: 'API de estoque e pedidos com autenticação, regras de negócio e documentação pensada para integração real.',
    tags: ['TypeScript', 'Express', 'MySQL', 'JWT', 'OpenAPI', 'Docker'],
    link: 'https://github.com/ronaelmoura/stockflow-api',
    accent: 'violet',
    visual: 'api',
  },
  {
    number: '04',
    title: 'Multer Safe Limit',
    category: 'opensource',
    type: 'Open source · Package',
    description: 'Wrapper em TypeScript que resolve um edge case real do Multer ao receber arquivos exatamente no limite configurado.',
    tags: ['TypeScript', 'Node.js', 'Multer', 'Middleware', 'Bugfix'],
    link: 'https://github.com/ronaelmoura/multer-safe-limit',
    accent: 'orange',
    visual: 'package',
  },
  {
    number: '05',
    title: 'Nexo Financeiro',
    category: 'frontend',
    type: 'Frontend · Data visualization',
    description: 'Dashboard financeiro responsivo com visualização de dados, hierarquia clara e interações orientadas à decisão.',
    tags: ['React', 'TypeScript', 'Recharts', 'Responsive UI'],
    link: 'https://ronaelmoura.github.io/nexo-dashboard-financeiro/',
    source: 'https://github.com/ronaelmoura/nexo-dashboard-financeiro',
    accent: 'blue',
    visual: 'finance',
  },
]

const expertise = [
  { number: '01', title: 'Product engineering', text: 'Transformo requisitos em fluxos claros, separo responsabilidades e tomo decisões técnicas pensando no produto depois do primeiro deploy.', meta: 'Discovery · UX · Arquitetura' },
  { number: '02', title: 'Full stack systems', text: 'Interfaces em React, APIs em Node.js, autenticação, persistência, uploads, relatórios e integrações trabalhando como um único sistema.', meta: 'React · Node · TypeScript · SQL' },
  { number: '03', title: 'Quality by design', text: 'Testes, estados de erro, acessibilidade, segurança e documentação entram na engenharia desde o início — não como acabamento tardio.', meta: 'CI · Tests · Security · DX' },
]

const journey = [
  ['Fundação', 'Suporte em TI', 'Aprendi a investigar problemas pela perspectiva de quem usa: ouvir, reproduzir, diagnosticar e resolver.'],
  ['Formação', 'Full Stack · SENAI', '670 horas de formação prática em front-end, back-end, APIs, dados, testes e versionamento.'],
  ['Trabalho atual', 'Ronas Tech', 'Operação própria de suporte remoto: experiência digital, diagnóstico técnico e atendimento direto para clientes em todo o Brasil.'],
  ['Agora', 'Produtos completos', 'Ronas Desk v1.0 em produção e uma base crescente de projetos com TypeScript, automação e engenharia de qualidade.'],
]

const consoleTabs = {
  produto: {
    label: 'Produto',
    title: 'Operação de suporte em um fluxo único.',
    text: 'Clientes, chamados, comentários, histórico, anexos, indicadores de SLA e relatórios conectados em uma aplicação segura.',
    stats: [['15', 'chamados demo'], ['06', 'clientes demo'], ['read-only', 'conta pública']],
  },
  arquitetura: {
    label: 'Arquitetura',
    title: 'Camadas claras. Evolução previsível.',
    text: 'React consome uma API REST em Express, que organiza rotas, middlewares, controllers, models, MySQL e Cloudinary.',
    stats: [['React 19', 'interface'], ['Express 5', 'API REST'], ['MySQL 8', 'persistência']],
  },
  qualidade: {
    label: 'Qualidade',
    title: 'Confiança para mudar sem medo.',
    text: 'O pipeline valida backend e frontend. Testes unitários, de interface e de integração protegem regras críticas e fluxos autenticados.',
    stats: [['307', 'backend'], ['54', 'frontend'], ['09', 'integração']],
  },
}

const socialLinks = [
  ['GH', 'GitHub', 'https://github.com/ronaelmoura'],
  ['IN', 'LinkedIn', 'https://www.linkedin.com/in/ronael-moura'],
  ['YT', 'YouTube', 'https://www.youtube.com/@RonasTech'],
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function SectionIntro({ eyebrow, title, text, dark = false }) {
  return (
    <div className={`section-intro ${dark ? 'is-dark' : ''}`} data-reveal>
      <p className="eyebrow"><span />{eyebrow}</p>
      <div><h2>{title}</h2>{text && <p>{text}</p>}</div>
    </div>
  )
}

function Header({ onCommand }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const format = () => setLocalTime(new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Fortaleza' }).format(new Date()))
    format()
    const interval = window.setInterval(format, 30000)
    return () => window.clearInterval(interval)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ronael Moura — início" onClick={close}>
        <span className="brand-mark">RM</span>
        <span className="brand-copy"><strong>Ronael Moura</strong><small>Full Stack Engineer</small></span>
      </a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        <a href="#trabalho-atual" onClick={close}>Ronas Tech</a>
        <a href="#projetos" onClick={close}>Projetos</a>
        <a href="#especialidades" onClick={close}>Especialidades</a>
        <a href="#sobre" onClick={close}>Sobre</a>
        <a href="#contato" onClick={close}>Contato</a>
      </nav>
      <div className="header-tools">
        <span className="local-time">CE {localTime}</span>
        <button className="command-trigger" onClick={onCommand} aria-label="Abrir atalhos"><span>Ir para</span><kbd>⌘ K</kbd></button>
        <a className="header-cta" href="mailto:ronaelmoura240@gmail.com">Vamos conversar <Arrow /></a>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Alternar menu"><span /><span /></button>
    </header>
  )
}

function CommandMenu({ open, onClose }) {
  if (!open) return null

  const items = [
    ['01', 'Trabalho atual', '#trabalho-atual'],
    ['02', 'Projeto principal', '#ronas-desk'],
    ['03', 'Todos os projetos', '#projetos'],
    ['04', 'Sobre mim', '#sobre'],
    ['05', 'Contato', '#contato'],
  ]

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  return (
    <div className="command-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="command-menu" role="dialog" aria-modal="true" aria-label="Atalhos de navegação" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-head"><span>NAVEGAÇÃO RÁPIDA</span><button onClick={onClose}>ESC</button></div>
        <div className="command-list">{items.map(([number, label, href]) => <button key={href} onClick={() => go(href)}><span>{number}</span>{label}<Arrow /></button>)}</div>
        <div className="command-foot">Use o mouse ou pressione ESC para fechar.</div>
      </div>
    </div>
  )
}

function ProductConsole() {
  return (
    <div className="product-console" aria-label="Resumo técnico do Ronas Desk">
      <div className="console-topline"><span className="console-dots"><i /><i /><i /></span><span>production / overview</span><b><i /> live</b></div>
      <div className="console-body">
        <div className="console-heading"><div><small>RONAS DESK</small><strong>Service operations</strong></div><span>v1.0.0</span></div>
        <div className="console-kpis">
          <article><small>testes</small><strong>370</strong><span>100% passing</span></article>
          <article><small>stack</small><strong>Full</strong><span>React + Node</span></article>
          <article><small>status</small><strong>Live</strong><span>demo pública</span></article>
        </div>
        <div className="console-grid">
          <div className="console-chart"><div><small>quality signal</small><span>últimos 7 ciclos</span></div><div className="chart-bars">{[46, 58, 52, 72, 66, 82, 96].map((height, index) => <i key={height} style={{ '--height': `${height}%`, '--delay': `${index * 70}ms` }} />)}</div></div>
          <div className="console-log"><small>pipeline</small><p><i /> backend tests <b>307</b></p><p><i /> frontend tests <b>54</b></p><p><i /> integration <b>9</b></p></div>
        </div>
      </div>
    </div>
  )
}

function DeskDashboard() {
  return (
    <div className="desk-dashboard" aria-hidden="true">
      <aside><div className="desk-logo">R<span>D</span></div>{['▦', '◎', '◇', '▤', '⚙'].map((item, index) => <i className={index === 0 ? 'active' : ''} key={item}>{item}</i>)}</aside>
      <div className="desk-content">
        <div className="desk-toolbar"><div><small>VISÃO GERAL</small><strong>Central de suporte</strong></div><button>+ Novo chamado</button></div>
        <div className="desk-metrics"><article><span>Em aberto</span><strong>12</strong><small>agora</small></article><article><span>Em andamento</span><strong>08</strong><small>ativos</small></article><article><span>SLA atendido</span><strong>94%</strong><small>+6.2%</small></article></div>
        <div className="desk-lower">
          <div className="desk-chart"><span>Chamados resolvidos</span><div>{[28, 45, 35, 66, 54, 81, 72, 92].map((height, index) => <i key={`${height}-${index}`} style={{ height: `${height}%` }} />)}</div></div>
          <div className="desk-tickets"><span>Atividade recente</span>{[['Crítico', 'Falha no acesso'], ['Médio', 'Configurar estação'], ['Baixo', 'Atualização concluída']].map(([level, title], index) => <p key={title}><i className={`ticket-${index}`} /><b>{title}</b><small>{level}</small></p>)}</div>
        </div>
      </div>
    </div>
  )
}

function SupportConsole() {
  return (
    <div className="support-console" aria-label="Fluxo de diagnóstico remoto da Ronas Tech">
      <div className="support-console-head"><span>diagnostico.ronastech</span><b><i /> sessão segura</b></div>
      <div className="support-console-body">
        <small>DIAGNÓSTICO REMOTO</small>
        <h3>Entender antes<br />de corrigir.</h3>
        <div className="support-checks">{['Sistema Windows', 'Inicialização', 'Armazenamento', 'Segurança básica'].map((item, index) => <p key={item}><span>✓</span>{item}<i style={{ '--check-delay': `${index * 120}ms` }} /></p>)}</div>
        <div className="support-terminal"><span>›</span> acesso iniciado com sua autorização<br /><span>›</span> nenhum valor cobrado antes da avaliação</div>
      </div>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'api') return <div className="project-visual api-visual"><div className="api-route"><b>POST</b><span>/api/orders</span><i>201</i></div><pre>{`{\n  "status": "created",\n  "inventory": "reserved",\n  "audit": true\n}`}</pre><div className="api-foot"><span>JWT verified</span><span>18ms</span></div></div>
  if (type === 'package') return <div className="project-visual package-visual"><span className="package-name">@ronas/multer-safe-limit</span><div><small>exact limit</small><strong>10.0 MB</strong></div><p><i /> upload accepted</p><code>limit !== rejection</code></div>
  if (type === 'healthdata') return <div className="project-visual health-visual"><div className="health-wordmark"><i /> Beatriz</div><div className="health-title"><small>DADOS APLICADOS À SAÚDE</small><strong>Informação confiável<br />para cuidar melhor.</strong></div><div className="health-tags"><span>Saúde</span><span>BI</span><span>SQL</span><span>Python</span></div><div className="health-orbit"><i /><i /></div></div>
  return <div className="project-visual finance-visual"><div className="finance-head"><span>Patrimônio</span><b>R$ 24.680</b></div><div className="finance-chart">{[22, 32, 27, 44, 39, 58, 53, 67, 76, 83].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="finance-row"><span><i />Receitas</span><b>+18,4%</b></div></div>
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`} data-reveal>
      <div className="project-card-head"><span>{project.number}</span><small>{project.type}</small></div>
      <ProjectVisual type={project.visual} />
      <div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">{project.cta || (project.source ? 'Abrir projeto' : 'Ver repositório')} <Arrow /></a>{project.source && <a href={project.source} target="_blank" rel="noreferrer">Código <Arrow /></a>}</div>
    </article>
  )
}

function App() {
  const [progress, setProgress] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeConsoleTab, setActiveConsoleTab] = useState('produto')
  const [commandOpen, setCommandOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const visibleProjects = useMemo(() => activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter])
  const consoleContent = consoleTabs[activeConsoleTab]

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    const pointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    const keyboard = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setCommandOpen((value) => !value) }
      if (event.key === 'Escape') setCommandOpen(false)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('pointermove', pointer, { passive: true })
    window.addEventListener('keydown', keyboard)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('pointermove', pointer)
      window.removeEventListener('keydown', keyboard)
    }
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [activeFilter])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ronaelmoura240@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:ronaelmoura240@gmail.com'
    }
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="pointer-glow" aria-hidden="true" />
      <Header onCommand={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="availability"><i /> Ronas Tech em operação · aberto a novos desafios</div>
            <p className="hero-kicker"><span>FULL STACK ENGINEER · RONAS TECH</span><b>CE · BRASIL</b></p>
            <h1>Software que<br />aguenta o <em>mundo real.</em></h1>
            <p className="hero-lead">Eu sou <strong>Ronael Moura.</strong> Projeto e construo aplicações completas — da regra de negócio à experiência final — com engenharia pragmática, testes e visão de produto.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <Arrow /></a><a className="button button-ghost" href="https://ronas-desk.onrender.com" target="_blank" rel="noreferrer">Abrir produto ao vivo <Arrow /></a></div>
          </div>
          <div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><ProductConsole /><div className="floating-note note-top"><span>01</span><p>Produto publicado<br /><strong>produção real</strong></p></div><div className="floating-note note-bottom"><span>02</span><p>Arquitetura<br /><strong>ponta a ponta</strong></p></div></div>
          <div className="hero-proof"><div><strong>34</strong><span>repositórios públicos</span></div><div><strong>370</strong><span>testes no projeto principal</span></div><div><strong>01</strong><span>operação digital ativa</span></div><p>Engenharia aplicada, documentada e disponível para inspeção.</p></div>
        </section>

        <section className="current-work-section" id="trabalho-atual">
          <div className="section-shell">
            <div className="current-work-label" data-reveal><span>TRABALHO ATUAL</span><small>RONAS TECH · 2026</small></div>
            <div className="current-work-grid">
              <div className="current-work-copy" data-reveal>
                <p className="eyebrow"><span /> NEGÓCIO DIGITAL EM OPERAÇÃO</p>
                <h2>Suporte técnico<br /><em>com clareza radical.</em></h2>
                <p>Hoje conduzo a <strong>Ronas Tech</strong>, uma operação de suporte remoto para Windows em todo o Brasil. Eu conecto diagnóstico técnico, experiência digital e atendimento direto para devolver tempo e confiança a quem depende do computador.</p>
                <div className="work-actions"><a className="button button-dark" href="https://www.ronastech.com.br/" target="_blank" rel="noreferrer">Conhecer a Ronas Tech <Arrow /></a><span>Produto, operação e atendimento<br />desenhados ponta a ponta.</span></div>
              </div>
              <div className="current-work-visual" data-reveal><SupportConsole /></div>
            </div>
            <div className="work-proof" data-reveal><div><strong>Brasil</strong><span>atendimento remoto</span></div><div><strong>09h–00h</strong><span>todos os dias</span></div><div><strong>≤ 1h</strong><span>resposta inicial</span></div><div><strong>R$ 0</strong><span>triagem pelo WhatsApp</span></div></div>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="section-shell">
            <SectionIntro eyebrow="PROJETOS SELECIONADOS" title={<>Código é detalhe.<br /><em>Resultado é o produto.</em></>} text="Cases escolhidos para mostrar decisões, amplitude técnica e atenção ao que acontece depois do deploy." />

            <article className="flagship" id="ronas-desk" data-reveal>
              <div className="flagship-top"><p><span>01</span> CASE PRINCIPAL · PRODUTO FULL STACK</p><div><i /> ONLINE</div></div>
              <div className="flagship-grid">
                <div className="flagship-copy"><span className="version-pill">RONAS DESK · v1.0.0</span><h3>Uma operação de suporte.<br /><em>Projetada como produto.</em></h3><p>Mais que um CRUD: autenticação por papéis, SLA, auditoria, anexos privados, relatórios e uma conta demo segura — construídos, testados e publicados.</p><div className="flagship-actions"><a className="button button-primary" href="https://ronas-desk.onrender.com" target="_blank" rel="noreferrer">Testar conta demo <Arrow /></a><a className="text-link" href="https://github.com/ronaelmoura/ronas-desk" target="_blank" rel="noreferrer">Inspecionar código <Arrow /></a></div></div>
                <div className="flagship-visual"><div className="app-chrome"><div><i /><i /><i /></div><span>ronas-desk.onrender.com/dashboard</span><small>SEGURO</small></div><DeskDashboard /></div>
              </div>
              <div className="case-console">
                <div className="case-tabs" role="tablist" aria-label="Detalhes do case">{Object.entries(consoleTabs).map(([key, tab]) => <button role="tab" aria-selected={activeConsoleTab === key} className={activeConsoleTab === key ? 'active' : ''} key={key} onClick={() => setActiveConsoleTab(key)}>{tab.label}</button>)}</div>
                <div className="case-content"><div><small>{consoleContent.label.toUpperCase()}</small><h4>{consoleContent.title}</h4><p>{consoleContent.text}</p></div><div className="case-stats">{consoleContent.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
              </div>
            </article>

            <div className="project-toolbar" data-reveal><p>Outros trabalhos</p><div role="group" aria-label="Filtrar projetos">{[['all', 'Todos'], ['client', 'Clientes'], ['backend', 'Back-end'], ['opensource', 'Open source'], ['frontend', 'Front-end']].map(([key, label]) => <button className={activeFilter === key ? 'active' : ''} onClick={() => setActiveFilter(key)} key={key}>{label}</button>)}</div></div>
            <div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
            <a className="all-projects-link" href="https://github.com/ronaelmoura?tab=repositories" target="_blank" rel="noreferrer" data-reveal><span>Ver os 34 repositórios no GitHub</span><Arrow /></a>
          </div>
        </section>

        <section className="expertise-section" id="especialidades">
          <div className="section-shell">
            <SectionIntro dark eyebrow="COMO EU PENSO" title={<>Do problema ao deploy.<br /><em>Sem perder o contexto.</em></>} text="A melhor solução técnica é a que permanece compreensível, segura e útil quando encontra usuários, dados e mudanças reais." />
            <div className="expertise-grid">{expertise.map((item) => <article key={item.number} data-reveal><span>{item.number}</span><div className="expertise-icon"><i /><i /></div><h3>{item.title}</h3><p>{item.text}</p><small>{item.meta}</small></article>)}</div>
          </div>
          <div className="stack-marquee" aria-label="Tecnologias"><div>{['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Vitest', 'REST APIs', 'GitHub Actions', 'Cloudinary', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Vitest', 'REST APIs', 'GitHub Actions', 'Cloudinary'].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>
        </section>

        <section className="about-section" id="sobre">
          <div className="section-shell about-grid">
            <div className="portrait-column" data-reveal><div className="portrait-frame"><img src={portraitUrl} alt="Ronael Moura, desenvolvedor Full Stack" width="1100" height="1100" /><div className="portrait-stamp"><span>RM</span><p>BUILDING<br />IN PUBLIC</p></div></div><p className="portrait-caption">Ronael Moura · Ceará, Brasil<br />Criador da Ronas Tech</p></div>
            <div className="about-copy" data-reveal><p className="eyebrow"><span /> SOBRE MIM</p><h2>Investigar primeiro.<br /><em>Construir com intenção.</em></h2><p className="about-lead">Minha base em suporte de TI me ensinou algo que levo para cada projeto: tecnologia só funciona quando resolve o problema de alguém.</p><p>Hoje conecto essa visão à engenharia de software. Trabalho entre interface, API, banco de dados, automação e deploy, sem perder de vista clareza, manutenção e experiência.</p><p>Na <strong>Ronas Tech</strong>, meu trabalho atual, reúno desenvolvimento, operação e atendimento técnico em uma experiência direta para clientes de todo o Brasil.</p><div className="about-signature"><span>Ronael Moura</span><small>FULL STACK ENGINEER · RONAS TECH</small></div></div>
          </div>
        </section>

        <section className="journey-section">
          <div className="section-shell">
            <SectionIntro dark eyebrow="TRAJETÓRIA" title={<>Consistência antes<br />de <em>atalhos.</em></>} text="Uma evolução construída com formação, prática, produto próprio e aprendizado público." />
            <div className="journey-list">{journey.map(([phase, title, text], index) => <article key={title} data-reveal><span>0{index + 1}</span><small>{phase}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="credentials-row" data-reveal><div><span>670h</span><p>Formação Full Stack<br /><small>SENAI · Conceito apto</small></p></div><div><span>v1.0</span><p>Produto autoral publicado<br /><small>Conta demo disponível</small></p></div><div><span>CI</span><p>Qualidade automatizada<br /><small>Testes + lint + build</small></p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="contact-inner" data-reveal><p className="eyebrow"><span /> PRÓXIMO DESAFIO</p><h2>Tem um problema<br />que merece <em>boa engenharia?</em></h2><p>Estou disponível para oportunidades em desenvolvimento Full Stack, produtos digitais e colaborações técnicas.</p><div className="contact-actions"><a className="button button-dark" href="mailto:ronaelmoura240@gmail.com">Iniciar conversa <Arrow /></a><button className="copy-button" onClick={copyEmail}>{copied ? 'E-mail copiado ✓' : 'Copiar e-mail'}</button></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">RM</span><div><strong>Ronael Moura</strong><small>Software que aguenta o mundo real.</small></div></div>
        <div className="footer-socials">{socialLinks.map(([short, label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}><span>{short}</span>{label}<Arrow /></a>)}</div>
        <p>© 2026 Ronael Moura<br /><span>Projetado e desenvolvido com intenção.</span></p>
      </footer>
    </>
  )
}

export default App
