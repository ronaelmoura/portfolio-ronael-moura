import { useEffect, useMemo, useRef, useState } from 'react'
import portraitUrl from '../assets/ronael-moura.webp'
import dashboardPhotoUrl from '../assets/ronas-desk-dashboard-realistic.png'
import supportWorkspacePhotoUrl from '../assets/support-workspace-realistic.png'

const projects = [
  {
    number: '04',
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
    number: '02',
    title: 'StockFlow API',
    category: 'backend',
    type: 'Backend · API',
    description: 'Projeto autoral de demonstração: estoque e pedidos com reserva transacional, idempotência, concorrência otimista e Outbox. As decisões e os cenários de execução estão documentados no repositório.',
    tags: ['TypeScript', 'Express', 'MySQL', 'JWT', 'OpenAPI', 'Docker'],
    link: 'https://github.com/ronaelmoura/stockflow-api',
    accent: 'violet',
    visual: 'api',
  },
  {
    number: '03',
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
  ['Agora', 'Produtos completos', 'Ronas Desk v1.0 publicado para demonstração e uma base crescente de projetos com TypeScript, automação e engenharia de qualidade.'],
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
    title: 'Auditoria e chamado na mesma transação.',
    text: 'React consome a API Express. A atualização do chamado e o evento de auditoria usam a mesma transação MySQL, evitando gravações parciais. Anexos privados são acessados por links temporários após autorização.',
    stats: [['React 19', 'interface'], ['Express 5', 'API REST'], ['MySQL 8', 'persistência']],
  },
  qualidade: {
    label: 'Qualidade',
    title: 'Testes com escopo explícito.',
    text: 'O README registra 370 testes: 307 unitários de backend e 54 de frontend no CI, mais 9 de integração com MySQL executados localmente. Quantidade de testes não equivale a cobertura; consulte o código e as execuções no GitHub.',
    stats: [['307', 'backend · CI'], ['54', 'frontend · CI'], ['09', 'MySQL · local']],
  },
}

const socialLinks = [
  ['github', 'GitHub', 'https://github.com/ronaelmoura'],
  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/in/ronael-moura'],
  ['youtube', 'YouTube', 'https://www.youtube.com/@RonasTech'],
]

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M5 19 19 5" /><path d="M8 5h11v11" /></>,
    external: <><path d="M14 5h5v5" /><path d="m19 5-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.8 5 5 0 0 0 18.9 1S17.7.6 15 2.4a13.4 13.4 0 0 0-7 0C5.3.6 4.1 1 4.1 1A5 5 0 0 0 4 3.8 5.4 5.4 0 0 0 2.5 7.5c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 17c-3 .9-3-1.4-4.2-1.8" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    youtube: <><path d="M22.5 6.2a2.8 2.8 0 0 0-2-2C18.7 3.7 12 3.7 12 3.7s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.8 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.8Z" /><path d="m10 15 5-3-5-3v6Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    command: <><path d="M18 7a3 3 0 1 0-3-3v16a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V4a3 3 0 1 0-3 3h12Z" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
  }
  return <svg className={`icon icon-${name}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Arrow() {
  return <Icon name="arrow" size={16} />
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
  const menuButton = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    document.querySelector('#main-navigation a')?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

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
        <span className="brand-copy"><strong>Ronael Moura</strong><small>Desenvolvedor Full Stack</small></span>
      </a>
      <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        <a href="#projetos" onClick={close}>Projetos</a>
        <a href="#trabalho-atual" onClick={close}>Experiência</a>
        <a href="#especialidades" onClick={close}>Especialidades</a>
        <a href="#sobre" onClick={close}>Sobre</a>
        <a href="#contato" onClick={close}>Contato</a>
      </nav>
      <div className="header-tools">
        <span className="local-time">CE {localTime}</span>
        <button className="command-trigger" onClick={onCommand} aria-label="Abrir atalhos"><Icon name="command" size={14} /><span>Ir para</span><kbd>⌘ K</kbd></button>
        <a className="header-cta" href="mailto:ronaelmoura240@gmail.com"><Icon name="mail" size={16} />Vamos conversar <Arrow /></a>
      </div>
      <button ref={menuButton} className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-controls="main-navigation" aria-expanded={menuOpen} aria-label="Alternar menu"><span /><span /></button>
    </header>
  )
}

function CommandMenu({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  const items = [
    ['01', 'Projeto principal', '#ronas-desk'],
    ['02', 'Todos os projetos', '#projetos'],
    ['03', 'Experiência profissional', '#trabalho-atual'],
    ['04', 'Sobre mim', '#sobre'],
    ['05', 'Contato', '#contato'],
  ]

  const go = (href) => {
    dialogRef.current.close()
    onClose()
    const target = document.querySelector(href)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
    target?.focus({ preventScroll: true })
  }

  return (
    <dialog ref={dialogRef} className="command-backdrop" aria-label="Atalhos de navegação" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="command-menu">
        <div className="command-head"><span>NAVEGAÇÃO RÁPIDA</span><button onClick={onClose}>ESC</button></div>
        <div className="command-list">{items.map(([number, label, href]) => <button key={href} onClick={() => go(href)}><span>{number}</span>{label}<Arrow /></button>)}</div>
        <div className="command-foot">Tab para navegar · Enter para selecionar · Esc para fechar.</div>
      </div>
    </dialog>
  )
}

function ProductConsole() {
  return (
    <div className="product-console" aria-label="Resumo técnico do Ronas Desk">
      <div className="console-topline"><span className="console-dots"><i /><i /><i /></span><span>projeto / visão geral</span><b><i /> live</b></div>
      <div className="console-body">
        <div className="console-heading"><div><small>RONAS DESK</small><strong>Service operations</strong></div><span>v1.0.0</span></div>
        <div className="console-kpis">
          <article><small>testes</small><strong>370</strong><span>total documentado</span></article>
          <article><small>stack</small><strong>Full</strong><span>React + Node</span></article>
          <article><small>status</small><strong>Live</strong><span>demo pública</span></article>
        </div>
        <div className="console-grid">
          <div className="evidence-links"><a href="https://github.com/ronaelmoura/ronas-desk#-segurança-e-integração-contínua" target="_blank" rel="noreferrer">Consultar escopo dos testes <Icon name="external" size={14} /></a><a href="https://github.com/ronaelmoura/ronas-desk/actions" target="_blank" rel="noreferrer">Ver execuções de CI <Icon name="external" size={14} /></a></div>
          <div className="console-log"><small>Execução dos testes</small><p><i /> backend · CI <b>307</b></p><p><i /> frontend · CI <b>54</b></p><p><i /> integração · local <b>9</b></p></div>
        </div>
      </div>
    </div>
  )
}

function SupportConsole() {
  return (
    <>
      <figure className="support-photo"><img src={supportWorkspacePhotoUrl} alt="Mesa de trabalho com laptop e monitor exibindo painéis de suporte técnico" /><figcaption>Imagem editorial · ambiente de desenvolvimento e suporte.</figcaption></figure>
      <div className="support-console" aria-label="Fluxo de diagnóstico remoto da Ronas Tech">
      <div className="support-console-head"><span>diagnostico.ronastech</span><b><i /> sessão segura</b></div>
      <div className="support-console-body">
        <small>DIAGNÓSTICO REMOTO</small>
        <h3>Entender antes<br />de corrigir.</h3>
        <div className="support-checks">{['Sistema Windows', 'Inicialização', 'Armazenamento', 'Segurança básica'].map((item, index) => <p key={item}><span>✓</span>{item}<i style={{ '--check-delay': `${index * 120}ms` }} /></p>)}</div>
        <div className="support-terminal"><span>›</span> acesso iniciado com sua autorização<br /><span>›</span> nenhum valor cobrado antes da avaliação</div>
      </div>
      </div>
    </>
  )
}

function ProjectVisual({ type }) {
  if (type === 'api') return <div className="project-visual api-visual"><div className="api-route"><b>POST</b><span>/api/v1/orders</span><i>201</i></div><pre>{`{\n  "status": "created",\n  "inventory": "reserved",\n  "audit": true\n}`}</pre><div className="api-foot"><span>JWT verified</span><span>Exemplo ilustrativo</span></div></div>
  if (type === 'package') return <div className="project-visual package-visual"><span className="package-name">multer-safe-limit</span><div><small>exact limit</small><strong>10.0 MB</strong></div><p><i /> upload accepted</p><code>limit !== rejection</code></div>
  if (type === 'healthdata') return <div className="project-visual health-visual"><div className="health-wordmark"><i /> Beatriz</div><div className="health-title"><small>DADOS APLICADOS À SAÚDE</small><strong>Informação confiável<br />para cuidar melhor.</strong></div><div className="health-tags"><span>Saúde</span><span>BI</span><span>SQL</span><span>Python</span></div><div className="health-orbit"><i /><i /></div></div>
  return <div className="project-visual finance-visual"><div className="finance-head"><span>Patrimônio</span><b>R$ 24.680</b></div><div className="finance-chart">{[22, 32, 27, 44, 39, 58, 53, 67, 76, 83].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="finance-row"><span><i />Receitas</span><b>+18,4%</b></div></div>
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`} data-reveal>
      <div className="project-card-head"><span>{project.number}</span><small>{project.type}</small></div>
      <ProjectVisual type={project.visual} />
      <p className="visual-caption">Representação ilustrativa do projeto · não é uma captura da aplicação.</p>
      <div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">{project.cta || (project.source ? 'Abrir projeto' : 'Ver repositório')} <Icon name={project.link.includes('github.com') ? 'github' : 'external'} size={15} /></a>{project.source && <a href={project.source} target="_blank" rel="noreferrer"><Icon name="github" size={15} />Código</a>}</div>
    </article>
  )
}

function App() {
  const [progress, setProgress] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeConsoleTab, setActiveConsoleTab] = useState('produto')
  const [commandOpen, setCommandOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const visibleProjects = useMemo(() => {
    const ordered = [...projects].sort((a, b) => ['backend', 'opensource', 'client', 'frontend'].indexOf(a.category) - ['backend', 'opensource', 'client', 'frontend'].indexOf(b.category))
    return activeFilter === 'all' ? ordered : ordered.filter((project) => project.category === activeFilter)
  }, [activeFilter])
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
      window.setTimeout(() => setCopied(false), 3000)
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

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="availability"><i /> Disponível para oportunidades em desenvolvimento</div>
            <p className="hero-kicker"><span>REACT · NODE.JS · TYPESCRIPT</span><b>CE · BRASIL</b></p>
            <h1>Ronael Moura.<br /><em>Desenvolvedor Full Stack.</em></h1>
            <p className="hero-lead">Construo aplicações web com <strong>React, Node.js e TypeScript</strong>, APIs, bancos relacionais e testes automatizados. Minha experiência em suporte técnico orienta soluções centradas em quem usa.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projetos"><Icon name="layers" size={17} />Explorar projetos <Arrow /></a><a className="button button-ghost" href="https://raw.githubusercontent.com/ronaelmoura/ronaelmoura/main/assets/curriculo-ronael-moura.pdf" target="_blank" rel="noreferrer"><Icon name="file" size={17} />Ver currículo em PDF <Arrow /></a></div>
          </div>
          <div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><ProductConsole /><div className="floating-note note-top"><span>01</span><p>Projeto autoral<br /><strong>demo pública</strong></p></div><div className="floating-note note-bottom"><span>02</span><p>Arquitetura<br /><strong>ponta a ponta</strong></p></div></div>
          <div className="hero-proof"><div><strong>React</strong><span>interfaces e aplicações web</span></div><div><strong>370</strong><span>testes no projeto principal</span></div><div><strong>Node.js</strong><span>APIs e regras de negócio</span></div><p>Engenharia aplicada, documentada e disponível para inspeção.</p></div>
        </section>

        <section className="projects-section" id="projetos" tabIndex={-1}>
          <div className="section-shell">
            <SectionIntro eyebrow="PROJETOS SELECIONADOS" title={<>Projetos, decisões<br /><em>e código aberto.</em></>} text="Projetos autorais de demonstração e trabalhos publicados. Explore o contexto, as decisões e o código de cada entrega." />

            <article className="flagship" id="ronas-desk" tabIndex={-1} data-reveal>
              <div className="flagship-top"><p><span>01</span> CASE PRINCIPAL · PRODUTO FULL STACK</p><div><i /> ONLINE</div></div>
              <div className="flagship-grid">
                <div className="flagship-copy"><span className="version-pill">RONAS DESK · v1.0.0</span><h3>Uma operação de suporte.<br /><em>Projetada como produto.</em></h3><p>Projeto autoral de portfólio que simula uma equipe de suporte. Desenvolvi interface, API, persistência e testes. A demonstração usa dados fictícios e acesso somente leitura; não representa uma operação comercial.</p><div className="flagship-actions"><a className="button button-primary" href="https://ronas-desk.onrender.com" target="_blank" rel="noreferrer"><Icon name="play" size={16} />Testar conta demo <Arrow /></a><a className="text-link" href="https://github.com/ronaelmoura/ronas-desk" target="_blank" rel="noreferrer"><Icon name="github" size={16} />Inspecionar código <Arrow /></a></div></div>
                <figure className="flagship-visual realistic-figure"><img className="realistic-product-image" src={dashboardPhotoUrl} alt="Mockup fotográfico de um dashboard escuro de atendimento técnico" /><figcaption>Mockup visual · a interface e os dados reais estão disponíveis na demo.</figcaption></figure>
              </div>
              <div className="case-console">
                <div className="case-tabs" role="tablist" aria-label="Detalhes do case">{Object.entries(consoleTabs).map(([key, tab]) => <button role="tab" id={`case-tab-${key}`} aria-controls="case-panel" tabIndex={activeConsoleTab === key ? 0 : -1} onKeyDown={(event) => {
                  const keys = Object.keys(consoleTabs)
                  const index = keys.indexOf(key)
                  const next = event.key === 'ArrowRight' ? (index + 1) % keys.length : event.key === 'ArrowLeft' ? (index - 1 + keys.length) % keys.length : event.key === 'Home' ? 0 : event.key === 'End' ? keys.length - 1 : -1
                  if (next < 0) return
                  event.preventDefault()
                  setActiveConsoleTab(keys[next])
                  document.getElementById(`case-tab-${keys[next]}`)?.focus()
                }} aria-selected={activeConsoleTab === key} className={activeConsoleTab === key ? 'active' : ''} key={key} onClick={() => setActiveConsoleTab(key)}>{tab.label}</button>)}</div>
                <div className="case-content" id="case-panel" role="tabpanel" aria-labelledby={`case-tab-${activeConsoleTab}`} tabIndex={0}><div><small>{consoleContent.label.toUpperCase()}</small><h4>{consoleContent.title}</h4><p>{consoleContent.text}</p></div><div className="case-stats">{consoleContent.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
              </div>
            </article>

            <div className="project-toolbar" data-reveal><p>Outros trabalhos</p><div role="group" aria-label="Filtrar projetos">{[['all', 'Todos'], ['client', 'Sites entregues'], ['backend', 'Back-end'], ['opensource', 'Open source'], ['frontend', 'Front-end']].map(([key, label]) => <button aria-pressed={activeFilter === key} className={activeFilter === key ? 'active' : ''} onClick={() => setActiveFilter(key)} key={key}>{label}</button>)}</div></div>
            <p className="sr-only" role="status">{visibleProjects.length} projetos nesta seleção.</p><div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
            <a className="all-projects-link" href="https://github.com/ronaelmoura?tab=repositories" target="_blank" rel="noreferrer" data-reveal><span>Ver repositórios no GitHub</span><Arrow /></a>
          </div>
        </section>

        <section className="current-work-section" id="trabalho-atual" tabIndex={-1}>
          <div className="section-shell">
            <div className="current-work-label" data-reveal><span>TRABALHO ATUAL</span><small>RONAS TECH · ATUAL</small></div>
            <div className="current-work-grid">
              <div className="current-work-copy" data-reveal>
                <p className="eyebrow"><span /> EXPERIÊNCIA PROFISSIONAL</p>
                <h2>Do atendimento<br /><em>ao desenvolvimento.</em></h2>
                <p>Hoje conduzo a <strong>Ronas Tech</strong>, uma operação de suporte remoto para Windows em todo o Brasil. Eu conecto diagnóstico técnico, experiência digital e atendimento direto para devolver tempo e confiança a quem depende do computador.</p>
                <div className="work-actions"><a className="button button-dark" href="https://www.ronastech.com.br/" target="_blank" rel="noreferrer"><Icon name="external" size={16} />Conhecer a Ronas Tech <Arrow /></a><span>Diagnóstico técnico, presença digital<br />e atendimento direto.</span></div>
              </div>
              <div className="current-work-visual" data-reveal><SupportConsole /></div>
            </div>
            <p className="experience-context">Atuação atual: suporte remoto para Windows, investigação de problemas e atendimento ao usuário. Essa experiência informa meu trabalho em desenvolvimento, sem substituir os projetos técnicos apresentados acima.</p>
          </div>
        </section>

        <section className="expertise-section" id="especialidades">
          <div className="section-shell">
            <SectionIntro dark eyebrow="COMO EU PENSO" title={<>Do problema ao deploy.<br /><em>Sem perder o contexto.</em></>} text="A melhor solução técnica é a que permanece compreensível, segura e útil quando encontra usuários, dados e mudanças reais." />
            <div className="expertise-grid">{expertise.map((item) => <article key={item.number} data-reveal><span>{item.number}</span><div className="expertise-icon"><i /><i /></div><h3>{item.title}</h3><p>{item.text}</p><small>{item.meta}</small></article>)}</div>
          </div>
          <div className="stack-marquee" aria-label="Tecnologias"><div>{['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Vitest', 'REST APIs', 'GitHub Actions', 'Cloudinary', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Vitest', 'REST APIs', 'GitHub Actions', 'Cloudinary'].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>
        </section>

        <section className="about-section" id="sobre" tabIndex={-1}>
          <div className="section-shell about-grid">
            <div className="portrait-column" data-reveal><div className="portrait-frame"><img src={portraitUrl} alt="Ronael Moura, desenvolvedor Full Stack" width="1100" height="1100" loading="lazy" decoding="async" /><div className="portrait-stamp"><span>RM</span><p>BUILDING<br />IN PUBLIC</p></div></div><p className="portrait-caption">Ronael Moura · Ceará, Brasil<br />Criador da Ronas Tech</p></div>
            <div className="about-copy" data-reveal><p className="eyebrow"><span /> SOBRE MIM</p><h2>Investigar primeiro.<br /><em>Construir com intenção.</em></h2><p className="about-lead">Minha base em suporte de TI me ensinou algo que levo para cada projeto: tecnologia só funciona quando resolve o problema de alguém.</p><p>Hoje conecto essa visão à engenharia de software. Trabalho entre interface, API, banco de dados, automação e deploy, sem perder de vista clareza, manutenção e experiência.</p><p>Na <strong>Ronas Tech</strong>, meu trabalho atual, reúno desenvolvimento, operação e atendimento técnico em uma experiência direta para clientes de todo o Brasil.</p><div className="about-signature"><span>Ronael Moura</span><small>REACT · NODE.JS · TYPESCRIPT</small></div></div>
          </div>
        </section>

        <section className="journey-section">
          <div className="section-shell">
            <SectionIntro dark eyebrow="TRAJETÓRIA" title={<>Consistência antes<br />de <em>atalhos.</em></>} text="Uma evolução construída com formação, prática, produto próprio e aprendizado público." />
            <div className="journey-list">{journey.map(([phase, title, text], index) => <article key={title} data-reveal><span>0{index + 1}</span><small>{phase}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="credentials-row" data-reveal><div><span>670h</span><p>Formação Full Stack<br /><small>SENAI · Conceito apto</small></p></div><div><span>v1.0</span><p>Produto autoral publicado<br /><small>Conta demo disponível</small></p></div><div><span>CI</span><p>Qualidade automatizada<br /><small>Testes + lint + build</small></p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contato" tabIndex={-1}>
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="contact-inner" data-reveal><p className="eyebrow"><span /> PRÓXIMO DESAFIO</p><h2>Tem um problema<br />que merece <em>boa engenharia?</em></h2><p>Estou disponível para oportunidades em desenvolvimento Full Stack, produtos digitais e colaborações técnicas.</p><div className="contact-actions"><a className="button button-dark" href="mailto:ronaelmoura240@gmail.com"><Icon name="mail" size={16} />Iniciar conversa <Arrow /></a><button className="copy-button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={16} />{copied ? 'E-mail copiado' : 'Copiar e-mail'}</button><span className="sr-only" role="status">{copied ? 'E-mail copiado para a área de transferência.' : ''}</span></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">RM</span><div><strong>Ronael Moura</strong><small>React · Node.js · TypeScript</small></div></div>
        <div className="footer-socials">{socialLinks.map(([icon, label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}><span><Icon name={icon} size={16} /></span>{label}<Arrow /></a>)}</div>
        <p>© 2026 Ronael Moura<br /><span>Projetado e desenvolvido com intenção.</span></p>
      </footer>
    </>
  )
}

export default App
