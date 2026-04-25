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

const profile = {
  name: 'Aolingge',
  role: 'Full-stack Developer',
  headline: 'Builds practical web tools, deployment workflows, and student-friendly open source projects.',
  location: 'China -> Germany track',
  email: '153434584+aolingge@users.noreply.github.com',
  github: 'https://github.com/aolingge',
}

const signals: Signal[] = [
  { value: '01', label: 'Deployment-first engineering portfolio' },
  { value: 'TS', label: 'React, TypeScript, Spring Boot, Nginx' },
  { value: 'OSS', label: 'Built for forks, issues, and pull requests' },
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
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href={profile.github}>GitHub</a>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__lead">{profile.headline}</p>
          <div className="hero__actions" aria-label="Profile actions">
            <a className="button button--primary" href="#work">
              View work
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
          <h2 id="intro-title">A portfolio template for developers who want proof, not decoration.</h2>
        </div>
        <p>
          This open source portfolio focuses on projects, deployment evidence, and contribution-friendly structure. Fork it, edit the data, and publish it with GitHub Pages.
        </p>
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
