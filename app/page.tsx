import ExpandableTech from "./expandable-tech";

const experience = [
  {
    company: "Metabase",
    url: "https://www.metabase.com",
    role: "Senior Software Engineer",
    period: "May 2021 — Feb 2026",
    description:
      "Delivered core features of the open-source BI platform used by 90,000+ organizations including enterprise and government clients. Improved application performance as the company grew revenues ten-fold. Revitalized public-facing projects through SEO and LLM optimization, contributing to growth from 30k to 90k customers.",
    tech: [
      "React 18", "TypeScript", "Redux", "Mantine", "Storybook",
      "Clojure", "Shadow-cljs",
      "Rspack", "Babel", "PostCSS", "Bun",
      "Jest", "Cypress", "Codecov",
      "ESLint", "Prettier", "Stylelint",
      "REST API", "Embedding SDK",
      "GitHub", "Husky", "EditorConfig",
    ],
    image: "/images/metabase.png",
  },
  {
    company: "Spoke",
    url: "https://www.spoke.com",
    role: "Team Lead: Web Front-end",
    period: "Mar 2020 — Apr 2021",
    description:
      "Led development of a greenfield React application enabling real-time package tracking, now supporting over 1 billion parcel deliveries annually. Elevated code coverage from 0% to 70%, reducing bugs by 70%. Assembled and managed a team of React developers.",
    tech: ["React", "Node.js", "Cypress", "Jest", "Google Cloud Functions"],
    image: "/images/spoke.png",
  },
  {
    company: "Toptal",
    url: "https://www.toptal.com",
    role: "Engineering Manager & Senior Software Engineer",
    period: "Jul 2018 — Mar 2020",
    description:
      "Helped drive over $200M in annual revenue building a Freelancer Profile app serving 7,000+ freelancers across 140+ countries. Built public-facing pages with SSR, achieving $4 per-visit revenues. Implemented A/B testing and personalization during 20% YoY company growth.",
    tech: [
      "React", "Apollo", "GraphQL", "Next.js", "SSR", "Styled Components",
      "Ruby on Rails", "ActiveRecord", "Elasticsearch",
      "PostgreSQL",
      "Cypress", "Jest", "Storybook",
      "Docker", "GitHub",
    ],
    image: "/images/toptal.png",
  },
  {
    company: "EmCasa",
    url: "https://www.emcasa.com",
    role: "Co-founder & CTO",
    period: "Jun 2017 — Jul 2018",
    description:
      "Designed and launched a real estate marketplace MVP using React and Elixir. Raised $1M in seed funding and facilitated the sale of dozens of properties in its first months of operation.",
    tech: ["React", "Elixir", "React Native"],
    image: "/images/emcasa.png",
  },
];

const projects = [
  {
    name: "Sponda",
    url: "https://sponda.capital",
    domain: "sponda.capital",
    description:
      "Financial indicators for Brazilian public companies, built for value investors.",
    image: "/images/sponda.png",
    tech: [
      "Claude Code", "Codex",
      "TypeScript", "React", "Next.js", "Tailwind CSS", "TanStack React Query", "Recharts", "Vite", "PostCSS",
      "Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Gunicorn", "Google OAuth", "BRAPI", "Financial Modeling Prep", "Resend",
      "Vitest", "Testing Library", "Playwright", "pytest", "Factory Boy",
      "Docker", "Docker Compose", "Nginx", "Let's Encrypt", "DigitalOcean", "systemd", "SSH", "GitHub", "GitHub Actions", "Node.js", "npm", "uv",
    ],
  },
  {
    name: "Doing It",
    url: "https://doingit.online",
    domain: "doingit.online",
    description: "Minimalist task and time tracker. Type a task name and start the clock.",
    image: "/images/doingit.png",
    tech: [
      "Python", "FastAPI", "Uvicorn", "Pydantic",
      "JavaScript", "HTML", "CSS",
      "PostgreSQL", "psycopg2",
      "Stripe", "Resend", "Google OAuth", "JWT", "Bcrypt",
      "pytest", "Playwright",
      "PostHog", "Google Analytics",
      "Docker", "Fly.io", "GitHub Actions", "Makefile",
    ],
  },
  {
    name: "AI Engineering",
    url: "https://github.com/gusaiani/ai-engineering",
    domain: "github.com/gusaiani/ai-engineering",
    description:
      "Project-based AI engineering curriculum. 13 modules from LLM API basics to multi-agent systems, built for portfolio over credentials.",
    image: "/images/ai-engineering.png",
    tech: [
      "Python", "Anthropic SDK", "OpenAI SDK",
      "Prompt Engineering", "RAG", "Embeddings", "Semantic Search", "pgvector",
      "AI Agents", "Tool Use", "Multi-agent Systems", "LangChain", "LangGraph",
      "Evals", "Observability", "LLMOps",
      "Streaming", "Fine-tuning", "Multimodal",
      "FastAPI",
    ],
  },
  {
    name: "Poema Investimentos",
    url: "https://poe.ma",
    domain: "poe.ma",
    description:
      "Value investment partnership. 395% cumulative returns from Jan 2017 to Mar 2026, outperforming the Brazilian stock index by 1.9x.",
    image: "/images/poema.png",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    name: "Swankdown",
    url: "https://swankdown.gustavosaiani.com",
    domain: "swankdown.gustavosaiani.com",
    description:
      "Transforms Markdown into beautifully typeset reading pages with refined typography.",
    image: "/images/swankdown.png",
    tech: ["Node.js", "JavaScript"],
  },
  {
    name: "Art Portfolio",
    url: "https://gustavosaiani.art.br",
    domain: "gustavosaiani.art.br",
    description: "Paintings portfolio.",
    image: "/images/artbr.png",
    tech: ["React", "React Router"],
  },
];

const skills: [string, string[]][] = [
  ["Frontend", ["React 19", "Next.js", "TypeScript", "TanStack (Router, Query)", "Redux", "Apollo", "GraphQL", "Tailwind CSS", "Styled Components", "Mantine", "Recharts", "Storybook", "Vite", "Rspack", "Babel", "Bun", "Webpack", "PostCSS", "Pydantic", "Resend"]],
  ["AI", ["Claude Code", "Codex", "Anthropic SDK", "OpenAI SDK", "Prompt Engineering", "RAG", "Embeddings", "Semantic Search", "AI Agents", "Tool Use", "Multi-agent Systems", "LangChain", "LangGraph", "Evals", "Observability", "LLMOps", "Streaming", "Fine-tuning", "Multimodal", "pgvector"]],
  ["Languages", ["JavaScript", "TypeScript", "Node.js", "HTML5", "CSS3", "Python", "Elixir", "Ruby", "Clojure", "SQL", "Shell"]],
  ["Backend", ["Django", "Django REST Framework", "FastAPI", "Ruby on Rails", "ActiveRecord", "Gunicorn", "Uvicorn", "Elasticsearch", "Redis", "Shadow-cljs"]],
  ["Databases", ["PostgreSQL", "pgvector", "Redis"]],
  ["Testing", ["Playwright", "Jest", "Vitest", "Cypress", "pytest", "Factory Boy", "Testing Library", "Codecov"]],
  ["DevOps & Infra", ["Docker", "Docker Compose", "Nginx", "GitHub", "GitHub Actions", "AWS", "DigitalOcean", "Fly.io", "systemd", "SSH", "Let's Encrypt", "Google Cloud Functions", "Husky"]],
  ["Tools", ["ESLint", "Prettier", "Stylelint", "EditorConfig", "Makefile", "npm", "uv", "PostHog", "Google Analytics", "Google OAuth", "Stripe", "JWT", "Bcrypt", "BRAPI", "Financial Modeling Prep"]],
];


export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo">GS</span>
          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-top">
            <div className="hero-text">
              <p className="hero-label">Senior Software Engineer</p>
              <h1 id="gustavo-saiani" className="hero-name">Gustavo Saiani</h1>
              <p className="hero-title">
                16 years building high-scale software at companies like Metabase, Toptal, and Spoke.
                From greenfield MVPs to platforms serving millions. Led engineering teams and managed orgs along the way.
              </p>
            </div>
            <div className="hero-photo-wrap">
              <img src="/images/gustavo.png" alt="Gustavo Saiani" className="hero-photo" />
            </div>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Rio de Janeiro, Brazil
            </span>
            <span className="hero-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:gs@gustavosaiani.com">gs@gustavosaiani.com</a>
            </span>
            <span className="hero-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              <a href="https://github.com/gusaiani" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
            <span className="hero-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <a href="https://linkedin.com/in/gusaiani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </span>
            <span className="hero-meta-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <a href="https://x.com/gustavosaiani" target="_blank" rel="noopener noreferrer">X</a>
            </span>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <hr className="section-divider" />
      <section id="experience" className="section">
        <div className="section-inner">
          <div className="two-col-layout">
            {/* Left column: Where I worked */}
            <div className="col">
              <div className="section-header">
                <p className="section-label">Experience</p>
                <h2 id="where-ive-worked" className="section-title">Where I worked</h2>
              </div>
              <div className="card-list">
                {experience.map((exp) => (
                  <a
                    key={exp.company}
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                  >
                    <div className="card-thumb">
                      <img src={exp.image} alt={`${exp.company} screenshot`} loading="lazy" />
                    </div>
                    <div className="card-body">
                      <span className="exp-period">{exp.period}</span>
                      <h3 id={exp.company.toLowerCase().replace(/\s+/g, "-")} className="card-name">{exp.company}</h3>
                      <span className="exp-role">{exp.role}</span>
                      <p className="card-description">{exp.description}</p>
                      <ExpandableTech tech={exp.tech} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right column: Projects */}
            <div className="col" id="projects">
              <div className="section-header">
                <p className="section-label">Projects</p>
                <h2 id="things-im-building" className="section-title">Things I&apos;m building</h2>
              </div>
              <div className="card-list">
                {projects.map((proj) => (
                  <a
                    key={proj.name}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                  >
                    <div className="card-thumb">
                      <img src={proj.image} alt={`${proj.name} screenshot`} loading="lazy" />
                    </div>
                    <div className="card-body">
                      <h3 id={proj.name.toLowerCase().replace(/\s+/g, "-")} className="card-name">{proj.name}</h3>
                      <p className="card-url">{proj.domain}</p>
                      <p className="card-description">{proj.description}</p>
                      <ExpandableTech tech={proj.tech} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <hr className="section-divider" />
      <section id="skills" className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Skills</p>
            <h2 id="technical-toolkit" className="section-title">Technical toolkit</h2>
          </div>
          <div className="skills-section">
            {skills.map(([group, items]) => (
              <div key={group}>
                <h3 id={group.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="skill-group-title">{group}</h3>
                <ExpandableTech tech={items} limit={10} listClassName="skill-list" tagClassName="skill-tag" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <div className="footer-contact">
            <h2 id="lets-work-together">Let&apos;s work together</h2>
            <div className="footer-links">
              <a href="mailto:gs@gustavosaiani.com" className="footer-link">gs@gustavosaiani.com</a>
              <a href="https://github.com/gusaiani" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://linkedin.com/in/gusaiani" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://x.com/gustavosaiani" target="_blank" rel="noopener noreferrer" className="footer-link">X</a>
            </div>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Gustavo Saiani</p>
        </div>
      </footer>
    </>
  );
}
