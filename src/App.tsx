import { useEffect, useMemo, useState } from 'react'
import './App.css'

type Locale = 'en' | 'zh'

type Project = {
  title: string
  tag: string
  summary: string
  stack: string[]
  href: string
  proof: string
  proofHref: string
}

type Signal = {
  value: string
  label: string
}

type Offer = {
  title: string
  price: string
  summary: string
  details: string[]
  href: string
}

type Content = {
  meta: {
    title: string
    description: string
  }
  nav: {
    services: string
    work: string
    process: string
    github: string
  }
  profile: {
    name: string
    role: string
    headline: string
    location: string
    email: string
    github: string
    audit: string
  }
  terminal: string[]
  actions: {
    primary: string
    contact: string
  }
  signals: Signal[]
  intro: {
    title: string
    body: string
  }
  services: {
    eyebrow: string
    title: string
    cta: string
  }
  offers: Offer[]
  work: {
    eyebrow: string
    title: string
  }
  projects: Project[]
  process: {
    eyebrow: string
    title: string
    steps: string[]
  }
  footer: {
    note: string
  }
}

const profileLinks = {
  email: '1930668092@qq.com',
  github: 'https://github.com/aolingge',
  audit: 'https://github.com/aolingge/agent-secret-guard/blob/main/docs/ai-agent-repo-safety-audit.md',
}

const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: 'Aolingge | AI Agent Tooling Portfolio',
      description:
        "Aolingge's bilingual portfolio for AI-agent safety tools, MCP diagnostics, release proof, and local-first delivery workflows.",
    },
    nav: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      github: 'GitHub',
    },
    profile: {
      name: 'Aolingge',
      role: 'Full-stack Developer',
      headline:
        'Building local-first safety tools, repo doctors, and delivery workflows for AI-agent-era software.',
      location: 'Chongqing University · China',
      email: profileLinks.email,
      github: profileLinks.github,
      audit: profileLinks.audit,
    },
    terminal: [
      '$ npx agent-secret-guard scan .',
      'high-risk examples: 0',
      '$ npm run build',
      'portfolio proof ready',
    ],
    actions: {
      primary: 'Review services',
      contact: 'Contact',
    },
    signals: [
      { value: '30s', label: 'Readable project entry points and proof-first README structure' },
      { value: 'CLI', label: 'TypeScript tools for repo safety, MCP configs, and release evidence' },
      { value: 'OSS', label: 'Public projects with clear contribution and verification paths' },
    ],
    intro: {
      title: 'Small tools and audits for safer releases.',
      body:
        'I build practical scanners and workflow kits for developers shipping with coding agents, MCP servers, GitHub Actions, and automation-heavy repositories.',
    },
    services: {
      eyebrow: 'Services',
      title: 'Launch-readiness help',
      cta: 'View details',
    },
    offers: [
      {
        title: 'AI Agent Repo Safety Audit',
        price: 'from $49',
        summary:
          'A focused Markdown report for AI agent, MCP, GitHub Actions, and local automation repositories before launch.',
        details: ['MCP args', 'agent instructions', 'browser profiles', 'CI permissions'],
        href: profileLinks.audit,
      },
      {
        title: 'Fix PR',
        price: 'from $299',
        summary:
          'A scoped pull request that moves risky examples toward safer config, docs, and workflow defaults.',
        details: ['env templates', 'workflow permissions', 'safe docs copy', 'release checklist'],
        href: 'https://github.com/aolingge/agent-secret-guard/blob/main/docs/sample-audit-report.md',
      },
    ],
    work: {
      eyebrow: 'Selected Work',
      title: 'Projects with practical value',
    },
    projects: [
      {
        title: 'Agent Secret Guard',
        tag: 'Security Automation',
        summary:
          'A 5-minute scanner for AI-agent repos, MCP configs, local automation notes, and risky GitHub Actions permissions.',
        stack: ['TypeScript', 'CLI', 'GitHub Action'],
        href: 'https://github.com/aolingge/agent-secret-guard',
        proof: 'Run scan',
        proofHref: 'https://github.com/aolingge/agent-secret-guard#quick-start',
      },
      {
        title: 'MCP Config Doctor',
        tag: 'MCP Reliability',
        summary:
          'A local doctor for MCP config files that catches path, transport, command, and environment problems before a client fails.',
        stack: ['Node.js', 'MCP', 'Diagnostics'],
        href: 'https://github.com/aolingge/mcp-config-doctor',
        proof: 'Config paths',
        proofHref: 'https://github.com/aolingge/mcp-config-doctor/blob/main/docs/config-paths.md',
      },
      {
        title: 'Agent Reliability Kit',
        tag: 'Release Readiness',
        summary:
          'One report for AI-agent repo readiness, README quality, CI evidence, secret risk, MCP hygiene, and release proof.',
        stack: ['TypeScript', 'CI', 'Reports'],
        href: 'https://github.com/aolingge/agent-reliability-kit',
        proof: 'Readiness scan',
        proofHref: 'https://github.com/aolingge/agent-reliability-kit#readme',
      },
      {
        title: 'Repo Release Proof',
        tag: 'Delivery Evidence',
        summary:
          'Checks whether a release note proves what changed, how it was verified, and where the result was published.',
        stack: ['CLI', 'Release Notes', 'Audit'],
        href: 'https://github.com/aolingge/repo-release-proof',
        proof: 'Release draft',
        proofHref: 'https://github.com/aolingge/repo-release-proof/blob/main/docs/release-note-draft.md',
      },
      {
        title: 'Agent Symphony Kit',
        tag: 'Agent Workflow',
        summary:
          'Local-first task files, preflight checks, gate reports, and workflow contracts for coding-agent orchestration.',
        stack: ['JavaScript', 'Workflow', 'Verification'],
        href: 'https://github.com/aolingge/agent-symphony-kit',
        proof: 'Workflow contract',
        proofHref: 'https://github.com/aolingge/agent-symphony-kit#readme',
      },
      {
        title: 'Student Deploy Kit',
        tag: 'Deployment Practice',
        summary:
          'Beginner-friendly deployment material for Nginx, Spring Boot, frontend builds, Docker, VPS security, and troubleshooting.',
        stack: ['Nginx', 'Spring Boot', 'Docker'],
        href: 'https://github.com/aolingge/student-deploy-kit',
        proof: 'Deploy guides',
        proofHref: 'https://github.com/aolingge/student-deploy-kit#readme',
      },
    ],
    process: {
      eyebrow: 'Process',
      title: 'A maintainable open source loop',
      steps: [
        'Define the smallest useful outcome',
        'Ship with readable docs and scripts',
        'Verify with build, lint, test, and browser checks',
        'Make contribution and security paths obvious',
      ],
    },
    footer: {
      note: 'MIT licensed portfolio template and personal workbench.',
    },
  },
  zh: {
    meta: {
      title: 'Aolingge | AI Agent 工具作品集',
      description: 'Aolingge 的双语作品集，展示 AI Agent 仓库安全、MCP 诊断、发布证据和本地优先交付工作流。',
    },
    nav: {
      services: '服务',
      work: '项目',
      process: '流程',
      github: 'GitHub',
    },
    profile: {
      name: 'Aolingge',
      role: '全栈开发者',
      headline: '构建面向 AI Agent 时代的本地优先安全工具、仓库医生和可验证交付流程。',
      location: '重庆大学 · 中国',
      email: profileLinks.email,
      github: profileLinks.github,
      audit: profileLinks.audit,
    },
    terminal: [
      '$ npx agent-secret-guard scan .',
      '高风险示例: 0',
      '$ npm run build',
      '作品证据已就绪',
    ],
    actions: {
      primary: '查看服务',
      contact: '联系我',
    },
    signals: [
      { value: '30s', label: '让项目入口、README 和验证证据在半分钟内说清楚' },
      { value: 'CLI', label: '围绕仓库安全、MCP 配置和发布证据的 TypeScript 工具' },
      { value: 'OSS', label: '公开项目配套清晰的贡献入口和验证路径' },
    ],
    intro: {
      title: '用小工具和审计让发布更稳。',
      body:
        '我关注 coding agent、MCP 服务器、GitHub Actions 和本地自动化仓库的发布质量，把容易失控的流程整理成能重复运行、能审查、能交付的工具。',
    },
    services: {
      eyebrow: 'Services',
      title: '发布前检查与修复',
      cta: '查看详情',
    },
    offers: [
      {
        title: 'AI Agent 仓库安全审计',
        price: 'from $49',
        summary:
          '面向 AI Agent、MCP、GitHub Actions 和本地自动化仓库的发布前 Markdown 风险报告。',
        details: ['MCP 参数', 'Agent 指令', '浏览器 profile', 'CI 权限'],
        href: profileLinks.audit,
      },
      {
        title: 'Fix PR',
        price: 'from $299',
        summary: '提交一个范围明确的修复 PR，把高风险示例改成更安全的配置、文档和 workflow 默认值。',
        details: ['env 模板', 'workflow 权限', '安全文档', '发布清单'],
        href: 'https://github.com/aolingge/agent-secret-guard/blob/main/docs/sample-audit-report.md',
      },
    ],
    work: {
      eyebrow: 'Selected Work',
      title: '有实际使用价值的项目',
    },
    projects: [
      {
        title: 'Agent Secret Guard',
        tag: '安全自动化',
        summary: '5 分钟扫描 AI Agent 仓库、MCP 配置、本地自动化笔记和 GitHub Actions 权限风险。',
        stack: ['TypeScript', 'CLI', 'GitHub Action'],
        href: 'https://github.com/aolingge/agent-secret-guard',
        proof: '快速扫描',
        proofHref: 'https://github.com/aolingge/agent-secret-guard#quick-start',
      },
      {
        title: 'MCP Config Doctor',
        tag: 'MCP 可靠性',
        summary: '在 AI 客户端连接失败前，检查 MCP 配置里的路径、transport、命令和环境变量问题。',
        stack: ['Node.js', 'MCP', '诊断'],
        href: 'https://github.com/aolingge/mcp-config-doctor',
        proof: '配置路径',
        proofHref: 'https://github.com/aolingge/mcp-config-doctor/blob/main/docs/config-paths.md',
      },
      {
        title: 'Agent Reliability Kit',
        tag: '发布准备度',
        summary: '为 AI Agent 仓库生成 readiness、README、CI、secret、MCP 和 release proof 报告。',
        stack: ['TypeScript', 'CI', '报告'],
        href: 'https://github.com/aolingge/agent-reliability-kit',
        proof: '准备度扫描',
        proofHref: 'https://github.com/aolingge/agent-reliability-kit#readme',
      },
      {
        title: 'Repo Release Proof',
        tag: '交付证据',
        summary: '检查 release note 是否说明了改动、验证方式和发布位置，减少“发布了但说不清”的问题。',
        stack: ['CLI', 'Release Notes', '审计'],
        href: 'https://github.com/aolingge/repo-release-proof',
        proof: '发布草稿',
        proofHref: 'https://github.com/aolingge/repo-release-proof/blob/main/docs/release-note-draft.md',
      },
      {
        title: 'Agent Symphony Kit',
        tag: 'Agent 工作流',
        summary: '为 coding agent 编排提供本地任务文件、预检、验证报告和 workflow contract。',
        stack: ['JavaScript', 'Workflow', '验证'],
        href: 'https://github.com/aolingge/agent-symphony-kit',
        proof: '工作流说明',
        proofHref: 'https://github.com/aolingge/agent-symphony-kit#readme',
      },
      {
        title: 'Student Deploy Kit',
        tag: '部署实践',
        summary: '面向学生和独立开发者的 Nginx、Spring Boot、前端、Docker、VPS 安全和排错材料。',
        stack: ['Nginx', 'Spring Boot', 'Docker'],
        href: 'https://github.com/aolingge/student-deploy-kit',
        proof: '部署指南',
        proofHref: 'https://github.com/aolingge/student-deploy-kit#readme',
      },
    ],
    process: {
      eyebrow: 'Process',
      title: '可维护的开源交付循环',
      steps: ['定义最小可用结果', '配套清晰文档和脚本', '用 build、lint、test 和浏览器检查验证', '把贡献和安全入口放清楚'],
    },
    footer: {
      note: 'MIT 许可的作品集模板和个人公开工作台。',
    },
  },
}

function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const t = content[locale]
  const otherLocale = useMemo<Locale>(() => (locale === 'en' ? 'zh' : 'en'), [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'zh-CN'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t.meta.description, t.meta.title])

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="terminal__body">
              {t.terminal.map((line, index) => (
                <p className={index % 2 === 1 ? 'ok' : undefined} key={line}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">{t.nav.services}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#process">{t.nav.process}</a>
          <a href={t.profile.github}>{t.nav.github}</a>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLocale(otherLocale)}
            aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
          >
            {locale === 'en' ? '中文' : 'EN'}
          </button>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">{t.profile.role}</p>
          <h1 id="hero-title">{t.profile.name}</h1>
          <p className="hero__lead">{t.profile.headline}</p>
          <div className="hero__actions" aria-label="Profile actions">
            <a className="button button--primary" href="#services">
              {t.actions.primary}
            </a>
            <a className="button button--ghost" href={`mailto:${t.profile.email}`}>
              {t.actions.contact}
            </a>
          </div>
        </div>
      </section>

      <section className="signals" aria-label="Profile signals">
        {t.signals.map((signal) => (
          <article key={signal.value}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </article>
        ))}
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">{t.profile.location}</p>
          <h2 id="intro-title">{t.intro.title}</h2>
        </div>
        <p>{t.intro.body}</p>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title">{t.services.title}</h2>
        </div>

        <div className="offer-list">
          {t.offers.map((offer) => (
            <article className="offer" key={offer.title}>
              <div>
                <p>{offer.price}</p>
                <h3>{offer.title}</h3>
                <span>{offer.summary}</span>
              </div>
              <ul aria-label={`${offer.title} scope`}>
                {offer.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a className="button button--ghost" href={offer.href}>
                {t.services.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 id="work-title">{t.work.title}</h2>
        </div>

        <div className="project-list">
          {t.projects.map((project, index) => (
            <article className="project" key={project.title}>
              <a className="project__main" href={project.href}>
                <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{project.tag}</p>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                </div>
              </a>
              <div className="project__meta">
                <ul aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="project__proof" href={project.proofHref}>
                  {project.proof}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 id="process-title">{t.process.title}</h2>
        </div>

        <ol>
          {t.process.steps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <footer>
        <span>{t.footer.note}</span>
        <a href={t.profile.github}>github.com/aolingge</a>
      </footer>
    </main>
  )
}

export default App
