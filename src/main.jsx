import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, skillGroups, uiUxProjects } from './data/siteData';
import './index.css';
import './theme.css';
import './reference.css';
import './artisticore.css';
import './composition.css';
import './green-editorial.css';
import './portrait-free.css';
import './routes.css';
import './green-pages.css';
import './uiux.css';

const Icon = ({ children, size = 17 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
const ArrowDownRight = p => <Icon {...p}><path d="M7 7l10 10M17 7v10H7" /></Icon>;
const ArrowUpRight = p => <Icon {...p}><path d="M7 17L17 7M7 7h10v10" /></Icon>;
const Check = p => <Icon {...p}><path d="m5 12 4 4L19 6" /></Icon>;
const ChevronRight = p => <Icon {...p}><path d="m9 18 6-6-6-6" /></Icon>;
const ExternalLink = p => <Icon {...p}><path d="M14 5h5v5M19 5l-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></Icon>;
const Github = p => <Icon {...p}><path d="M9 19c-4 1.5-4-2-5-2m10 4v-3.4c0-1 .1-1.4-.5-2 1.8-.2 3.7-.9 3.7-4a3.1 3.1 0 0 0-.8-2.2 2.9 2.9 0 0 0-.1-2.2s-.7-.2-2.3.8a8 8 0 0 0-4.1 0C8.3 8 7.6 8.2 7.6 8.2a2.9 2.9 0 0 0-.1 2.2 3.1 3.1 0 0 0-.8 2.2c0 3.1 1.9 3.8 3.7 4-.5.5-.5 1.1-.5 2V21" /></Icon>;
const Linkedin = p => <Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></Icon>;
const Menu = p => <Icon {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>;
const X = p => <Icon {...p}><path d="M6 6l12 12M18 6 6 18" /></Icon>;

const Reveal = ({ children, className = '', ...props }) => <div className={`reveal ${className}`} {...props}>{children}</div>;
const hasLink = value => Boolean(value);
const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function LinkIcon({ href, children, icon: IconComponent, disabled = false }) {
  return <a className={`icon-link ${disabled ? 'is-disabled' : ''}`} href={disabled ? undefined : href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={children} onClick={disabled ? e => e.preventDefault() : undefined}><IconComponent size={17} /> <span>{children}</span></a>;
}

function ProjectArt({ type }) {
  return <div className={`project-art art-${type}`} aria-hidden="true">
    {type === 'medialens' && <><div className="art-pill">BIAS INDEX <b>0.76</b></div><div className="bar bar-1" /><div className="bar bar-2" /><div className="bar bar-3" /><div className="art-code">TF&nbsp; IDF<br />SVM_01</div></>}
    {type === 'floodvision' && <><div className="terrain" /><div className="radar-ring ring-1" /><div className="radar-ring ring-2" /><div className="radar-dot" /><span className="coordinate">28.6139° N<br />77.2090° E</span></>}
    {type === 'outreach' && <><div className="terminal"><span>outreach-os / worker</span><p><i>›</i> queue.process()</p><p><i>›</i> sender.limit <b>100/hr</b></p><p><i>›</i> job.status <em>ready</em></p></div><div className="wire wire-a" /><div className="wire wire-b" /></>}
    {type === 'busease' && <><div className="phone"><div className="phone-top">9:41 <span>•••</span></div><small>YOUR ROUTE</small><strong>Route 23 <span>● LIVE</span></strong><div className="map-line" /><div className="map-point point-1" /><div className="map-point point-2" /><div className="map-point point-3" /><div className="eta">8 min <small>next bus</small></div></div></>}
  </div>;
}

function ProjectCard({ project, index, compact = false }) {
  return <Reveal className={`project-card card-${index} ${compact ? 'project-card-detail' : ''}`}><ProjectArt type={project.visual} /><div className="project-meta"><span>{project.number} / {project.category}</span><span className="project-arrow"><ChevronRight size={18} /></span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span>{project.highlight}</span><div className="project-links"><LinkIcon href={project.github || '#'} disabled={!hasLink(project.github)} icon={Github}>Source</LinkIcon><LinkIcon href={project.demo || '#'} disabled={!hasLink(project.demo)} icon={ExternalLink}>Demo</LinkIcon></div></div></Reveal>;
}

function Nav({ menu, setMenu }) {
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><a className="logo" href="/">{profile.logo}<span>.</span></a><button className="menu-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button><div className={menu ? 'nav-links open' : 'nav-links'}><a href="/#about" onClick={() => setMenu(false)}>About</a><a href="/#projects" onClick={() => setMenu(false)}>Projects</a><a href="/#experience" onClick={() => setMenu(false)}>Experience</a><a href="/#skills" onClick={() => setMenu(false)}>Skills</a><a href="/#contact" onClick={() => setMenu(false)}>Contact</a><a className="resume-link" href={profile.resume}>Resume <ArrowUpRight size={14} /></a></div></nav></header>;
}

function ProjectsPage() {
  const [menu, setMenu] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'AI / NLP', 'AI / Vision', 'Backend / Full Stack', 'UI / UX'];
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  return <div className="site-shell projects-page"><Nav menu={menu} setMenu={setMenu} /><main className="projects-page-main"><div className="projects-page-heading container"><span className="section-kicker">PROJECT ARCHIVE</span><h1>Selected <em>work.</em></h1><p>Systems, experiments, and product thinking across AI/ML, full-stack development, and UI/UX.</p></div><div className="filter-row projects-filter container">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid projects-page-grid container">{visibleProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} compact />)}</div></main></div>;
}

function ProjectDetailPage({ project }) {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell project-detail-page"><Nav menu={menu} setMenu={setMenu} /><main className="project-detail container"><a className="back-link" href="/projects">← Back to projects</a><span className="section-kicker">{project.number} / {project.category}</span><h1>{project.name}</h1><p className="detail-lede">{project.description}</p><div className="detail-art"><ProjectArt type={project.visual} /></div><div className="detail-columns"><section><h2>Overview</h2><p>{project.description}</p></section><section><h2>Technologies</h2><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p className="detail-note">Project details, architecture, results, and limitations can be added here without changing the shared project data.</p></section></div></main></div>;
}

function UiUxPreview({ type }) {
  return <div className={`uiux-preview uiux-${type}`} aria-hidden="true"><div className="uiux-window-bar"><span /><span /><span /></div>{type === 'busease' && <><div className="uiux-map" /><div className="uiux-route" /><div className="uiux-phone-card"><small>YOUR ROUTE</small><b>Route 23</b><em>8 min</em></div></>}{type === 'sharecircle' && <><div className="uiux-market-card"><small>FIND SOMETHING</small><b>ShareCircle</b><div className="uiux-item-row"><i /><span /><span /></div><div className="uiux-item-row"><i /><span /><span /></div></div><div className="uiux-orbit" /></>}{type === 'ustart' && <><div className="uiux-mobile-screen"><small>WELCOME, DRIVER</small><b>Ready to<br />get started?</b><div className="uiux-progress" /><span>हिंदी · English</span></div><div className="uiux-mobile-screen second"><small>YOUR NEXT RIDE</small><b>Pickup<br />in 8 min</b><div className="uiux-progress" /></div></>}</div>;
}

function UiUxCard({ project, technical = false }) {
  const methods = technical ? project.tags : project.methods;
  const detailHref = technical ? `/projects/${slugify(project.name)}` : `/projects/ui-ux/${project.slug}`;
  return <article className={`uiux-card ${technical ? 'uiux-technical-card' : ''}`}>
    {technical ? <div className="uiux-preview technical-preview"><ProjectArt type={project.visual} /></div> : <UiUxPreview type={project.visual} />}
    <div className="uiux-card-body"><span className="uiux-number">{project.number} / {technical ? project.category : project.type}</span><h2>{project.name}</h2><p>{project.description}</p><div className="tag-row">{methods.map(method => <span key={method}>{method}</span>)}</div><a className="uiux-case-link" href={detailHref}>{technical ? 'Detail' : 'View Case Study'} <ArrowUpRight size={15} /></a></div>
  </article>;
}

function UiUxPage() {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell uiux-page"><Nav menu={menu} setMenu={setMenu} /><main className="uiux-main"><header className="uiux-heading container"><span className="section-kicker">DESIGN PROJECTS / 2025</span><h1>Design <em>Projects</em></h1><p>Designing intuitive digital experiences through research, thoughtful interactions, and user-centred design.</p></header><section className="uiux-grid container">{uiUxProjects.map(project => <UiUxCard key={project.slug} project={project} />)}</section></main><footer className="footer container"><span>© 2025 Anish</span><span>Designing with intent <span className="lime">●</span></span><a href="/#top">Back to top ↑</a></footer></div>;
}

function UiUxDetailPage({ project }) {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell uiux-detail-page"><Nav menu={menu} setMenu={setMenu} /><main className="uiux-detail container"><a className="back-link" href="/projects/ui-ux">← Back to design projects</a><span className="section-kicker">{project.number} / {project.type}</span><h1>{project.name}</h1><p className="uiux-detail-lede">{project.description}</p>{project.figmaUrl && <a className="uiux-figma-link" href={project.figmaUrl} target="_blank" rel="noopener noreferrer">View Figma Design <ArrowUpRight size={15} /></a>}<div className="uiux-detail-hero"><UiUxPreview type={project.visual} /></div><div className="uiux-methods"><span>Methods & tools</span><div className="tag-row">{project.methods.map(method => <span key={method}>{method}</span>)}</div></div><div className="uiux-section-list">{project.sections.map(([title, body], index) => <section key={title}><span className="uiux-section-index">{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div></main></div>;
}

function AboutPage() {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell about-page"><Nav menu={menu} setMenu={setMenu} /><main className="about-page-main"><section className="section about-section"><div className="container about-grid"><div><span className="section-kicker">01 / A LITTLE ABOUT ME</span><h1>Curious by default.<br /><em>Useful on purpose.</em></h1></div><div className="about-copy"><p className="large-copy">I like the space where software, data, and people overlap. My work moves between building full-stack systems, exploring AI/ML, and making interfaces feel a little more human.</p><p>Currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at BML Munjal University, graduating in 2027. I’m looking for rooms where I can learn quickly, contribute thoughtfully, and ship work that matters.</p><div className="about-facts"><span><b>2027</b> graduation</span><span><b>BMU</b> Gurgaon, India</span></div></div></div></section></main></div>;
}

function NotFoundPage() {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell not-found-page"><Nav menu={menu} setMenu={setMenu} /><main className="container not-found-main"><span className="section-kicker">404 / PAGE NOT FOUND</span><h1>This page went<br /><em>somewhere else.</em></h1><p>The page you requested does not exist.</p><a className="green-arrow-link" href="/">Return home <ArrowUpRight size={16} /></a></main></div>;
}


function HomepageProjects() {
  return <section id="projects" className="section homepage-projects"><div className="container">
    <div className="section-heading compact"><div><span className="section-kicker">02 / PROJECTS</span><h2>Work that makes<br /><em>an impact.</em></h2></div><p>A selection of design, development, and AI/ML work built with curiosity and care.</p></div>
    <div id="design-projects" className="homepage-project-group"><div className="homepage-project-group-heading"><span className="section-kicker">DESIGN PROJECTS</span><a className="view-all-projects" href="/projects/ui-ux">View all design projects <ArrowUpRight size={15} /></a></div><div className="uiux-grid homepage-uiux-grid">{uiUxProjects.map(project => <UiUxCard key={project.slug} project={project} />)}</div></div>
    <div id="development-projects" className="homepage-project-group homepage-development-group"><div className="homepage-project-group-heading"><span className="section-kicker">DEVELOPMENT &amp; AI/ML</span><a className="view-all-projects" href="/projects">View all projects <ArrowUpRight size={15} /></a></div><div className="uiux-grid homepage-uiux-grid homepage-technical-grid">{projects.filter(project => project.name !== 'BusEase').map(project => <UiUxCard key={project.name} project={project} technical />)}</div></div>
  </div></section>;
}

function HomePage() {
  const [menu, setMenu] = React.useState(false);
  return <div className="site-shell"><Nav menu={menu} setMenu={setMenu} /><main id="top">
    <section className="hero hero-editorial"><div className="green-edge green-edge-left" aria-hidden="true" /><div className="green-edge green-edge-right" aria-hidden="true" /><div className="green-cross cross-one" aria-hidden="true" /><div className="green-cross cross-two" aria-hidden="true" /><div className="green-hero container reveal">
      <article className="green-side green-designer"><span className="green-eyebrow">I CREATE EXPERIENCES <b>—</b></span><h1>DESIGNER</h1><div className="green-underline" /><p>Designing intuitive, human-centred experiences with a focus on people and real-world impact.</p><a href="#design-projects" className="green-arrow-link">View My Work <ArrowDownRight size={16} /></a></article>
      <div className="green-portrait-wrap"><div className="portrait-tech tech-top" /><div className="portrait-tech tech-left" /><div className="portrait-tech tech-right" />{profile.photo ? <img className="green-portrait" src={profile.photo} alt="Anish" /> : <div className="green-photo-fallback">ANISH</div>}</div>
      <article className="green-side green-developer"><span className="green-eyebrow">I BUILD SOLUTIONS <b>—</b></span><h1>DEVELOPER</h1><div className="green-underline" /><p>Turning ideas into real, working products with clean code and modern technologies.</p><a href="#development-projects" className="green-arrow-link">Explore Projects <ArrowDownRight size={16} /></a></article>
    </div><div className="green-hero-footer container"><div className="social-row"><LinkIcon href={profile.github || '#'} disabled={!hasLink(profile.github)} icon={Github}>GitHub</LinkIcon><LinkIcon href={profile.linkedin || '#'} disabled={!hasLink(profile.linkedin)} icon={Linkedin}>LinkedIn</LinkIcon><span className="availability"><span className="status-dot" /> Open to internship opportunities</span></div></div></section>
    <section id="about" className="section about-section"><div className="container about-grid"><div><span className="section-kicker">01 / A LITTLE ABOUT ME</span><h2>Curious by default.<br /><em>Useful on purpose.</em></h2></div><div className="about-copy"><p className="large-copy">I like the space where software, data, and people overlap. My work moves between building full-stack systems, exploring AI/ML, and making interfaces feel a little more human.</p><p>Currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at BML Munjal University, graduating in 2027. I’m looking for rooms where I can learn quickly, contribute thoughtfully, and ship work that matters.</p><div className="about-facts"><span><b>2027</b> graduation</span><span><b>BMU</b> Gurgaon, India</span></div></div></div></section>
    <HomepageProjects />
    <section id="experience" className="section container experience-section"><div className="section-heading compact"><div><span className="section-kicker">03 / EXPERIENCE</span><h2>Where I've<br /><em>learned by doing.</em></h2></div></div><div className="experience-card"><div className="exp-date">JUN — JUL<br /><b>2025</b></div><div className="exp-main"><div className="exp-title"><div><span className="exp-role">UI/UX DESIGN INTERN</span><h3>UStart</h3></div><span className="exp-location">Internship</span></div><p>Designed driver application experiences in Figma — from ride OTP and pickup/drop flows to payment, help/FAQ, onboarding slides, and Hindi UI translation.</p><div className="tag-row"><span>Figma</span><span>Product thinking</span><span>Interaction design</span></div></div></div></section>
    <section id="skills" className="section skills-section"><div className="container"><div className="section-heading compact"><div><span className="section-kicker">04 / TOOLKIT</span><h2>Tools I use to<br /><em>make it real.</em></h2></div><p>Always learning. Always choosing the right tool for the problem, not the other way around.</p></div><div className="skills-grid">{skillGroups.map(([title, items], index) => <Reveal className="skill-group" key={title}><span className="skill-number">0{index + 1}</span><h3>{title}</h3>{items.map(item => <span className="skill-item" key={item}><Check size={13} />{item}</span>)}</Reveal>)}</div></div></section>
    <section className="section container achievements"><div className="section-heading compact"><div><span className="section-kicker">05 / MILESTONES</span><h2>A few things<br /><em>worth noting.</em></h2></div></div><div className="milestone-grid"><div className="milestone"><span>01</span><h3>Smart India Hackathon</h3><p>Secured 2nd position in the internal round.</p></div><div className="milestone"><span>02</span><h3>Environment Club</h3><p>Operations Co-Lead at BML Munjal University, Aug 2024 — May 2025.</p></div><div className="milestone"><span>03</span><h3>Computer Science</h3><p>B.Tech in CSE at BML Munjal University, 2023 — 2027.</p></div></div></section>
    <section id="contact" className="contact-section"><div className="container contact-inner"><span className="section-kicker">06 / SAY HELLO</span><h2>Have an opportunity<br />or an <em>interesting problem?</em><br />Let's connect.</h2><div className="contact-links"><a className="contact-email" href={'mailto:' + profile.email}>{profile.email} <ArrowUpRight size={20} /></a><div className="contact-socials"><LinkIcon href={profile.github || '#'} disabled={!hasLink(profile.github)} icon={Github}>GitHub</LinkIcon><LinkIcon href={profile.linkedin || '#'} disabled={!hasLink(profile.linkedin)} icon={Linkedin}>LinkedIn</LinkIcon><a className="icon-link" href={profile.resume}>Resume <ArrowUpRight size={16} /></a></div></div></div></section>
  </main><footer className="footer container"><span>© 2025 Anish</span><span>Designed + built with intention <span className="lime">●</span></span><a href="#top">Back to top ↑</a></footer></div>;
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return <HomePage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/projects/ui-ux') return <UiUxPage />;
  if (path.startsWith('/projects/ui-ux/')) {
    const project = uiUxProjects.find(item => item.slug === path.split('/')[3]);
    if (project) return <UiUxDetailPage project={project} />;
  }
  if (path === '/projects') return <ProjectsPage />;
  if (path.startsWith('/projects/')) {
    const project = projects.find(item => slugify(item.name) === path.split('/')[2]);
    if (project) return <ProjectDetailPage project={project} />;
  }
  return <NotFoundPage />;
}

createRoot(document.getElementById('root')).render(<App />);


