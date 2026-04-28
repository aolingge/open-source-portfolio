import './App.css'

type Project = {
  title: string
  tag: string
  summary: string
  stack: string[]
  href: string
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

const profile = {
  name: 'Aolingge',
  role: 'Full-stack Developer',
  headline: 'Builds agent-era safety tools, deployment workflows, and small open source systems that are easy to run again.',
  location: 'China -> Germany track',
  email: '153434584+aolingge@users.noreply.github.com',
  github: 'https://github.com/aolingge',
  audit: 'https://github.com/aolingge/agent-secret-guard/blob/main/docs/ai-agent-repo-safety-audit.md',
}

const signals: Signal[] = [
  { value: '24h', label: 'Focused AI agent repo safety audits' },
  { value: 'TS', label: 'TypeScript CLIs, GitHub Actions, and release checks' },
  { value: 'OSS', label: 'Open source tools built with safe contribution paths' },
]

const projects: Project[] = [
  {
    title: 'Student Deploy Kit',
    tag: 'Open Source Tooling',
    summary:
      'A practical deployment kit for students and indie developers covering Nginx, Spring Boot, frontend builds, Docker, and server hardening.',
    stack: ['Nginx', 'Spring Boot', 'Docker', 'CI/CD'],
    href: 'https://github.com/aolingge/student-deploy-kit',
  },
  {
    title: 'Agent Secret Guard',
    tag: 'Security Automation',
    summary:
      'A lightweight guardrail for detecting risky secret exposure patterns before code reaches a public repository.',
    stack: ['Node.js', 'GitHub Action', 'Security'],
    href: 'https://github.com/aolingge/agent-secret-guard',
  },
  {
    title: 'Release Automation Kits',
    tag: 'Developer Experience',
    summary:
      'Small, inspectable release helpers for npm, Python, Docker, and desktop packaging workflows.',
    stack: ['PowerShell', 'GitHub CLI', 'Automation'],
    href: 'https://github.com/aolingge',
  },
]

const workflow = [
  'Plan the smallest useful version',
  'Ship with readable docs and scripts',
  'Verify with build, lint, and browser checks',
  'Make contribution paths obvious',
]

const offers: Offer[] = [
  {
    title: 'AI Agent Repo Safety Audit',
    price: 'from $49',
    summary:
      'A focused 24h Markdown report for AI agent, MCP, GitHub Actions, and local automation repositories before launch.',
    details: ['MCP args', 'agent instructions', 'browser profiles', 'CI permissions'],
    href: profile.audit,
  },
  {
    title: 'Fix PR',
    price: 'from $299',
    summary:
      'A scoped pull request that moves risky examples to safer config patterns after an audit.',
    details: ['env templates', 'workflow permissions', 'safe docs copy', 'release checklist'],
    href: 'https://github.com/aolingge/agent-secret-guard/blob/main/docs/sample-audit-report.md',
  },
]

function App() {
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
              <p>$ npm run build</p>
              <p className="ok">dist ready in 1.2s</p>
              <p>$ deploy --target student-server</p>
              <p className="ok">portfolio live</p>
            </div>
          </div>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href={profile.github}>GitHub</a>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__lead">{profile.headline}</p>
          <div className="hero__actions" aria-label="Profile actions">
            <a className="button button--primary" href="#services">
              Book audit
            </a>
            <a className="button button--ghost" href={`mailto:${profile.email}`}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="signals" aria-label="Profile signals">
        {signals.map((signal) => (
          <article key={signal.value}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </article>
        ))}
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">{profile.location}</p>
          <h2 id="intro-title">Small tools and audits for safer agent-era releases.</h2>
        </div>
        <p>
          I build local-first scanners and release helpers for developers shipping with AI coding agents, MCP servers, and automation-heavy repositories.
        </p>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Launch-readiness help</h2>
        </div>

        <div className="offer-list">
          {offers.map((offer) => (
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
                View details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2 id="work-title">Projects with practical value</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project" href={project.href} key={project.title}>
              <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{project.tag}</p>
                <h3>{project.title}</h3>
                <span>{project.summary}</span>
              </div>
              <ul aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2 id="process-title">A maintainable open source loop</h2>
        </div>

        <ol>
          {workflow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <footer>
        <span>MIT licensed portfolio template.</span>
        <a href={profile.github}>github.com/aolingge</a>
      </footer>
    </main>
  )
}

export default App
