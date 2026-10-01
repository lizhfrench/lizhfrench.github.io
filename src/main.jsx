import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumeUrl = 'https://drive.google.com/file/d/1VSO-RpnLCllx-T_lRRmlPNJmp7HLM0wZ/view?usp=sharing';

const navigation = [
  { id: 'about', label: 'About', href: 'index.html' },
  { id: 'research', label: 'Research', href: 'research.html' },
  { id: 'experience', label: 'Experience', href: 'experience.html' },
  { id: 'resume', label: 'Resume', href: 'resume.html' },
];

function SiteHeader({ page }) {
  return (
    <header className="site-header">
      <a className="site-title" href="index.html" aria-label="Liz French home">
        E[<span>LIZ</span>]ABETH FRENCH
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map(({ id, label, href }) => (
          <a key={id} href={href} aria-current={page === id ? 'page' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function AboutPage() {
  return (
    <>
      <p>
        Hi, I’m Liz <em>(she/her)</em>! I’m currently at{' '}
        <a href="https://www.gatech.edu/">Georgia Tech</a> getting an M.S. in Computer Science,
        concentrating in Human-Computer Interaction (2027). I also hold a B.S. in Industrial
        Engineering from <a href="https://www.isye.gatech.edu/">Georgia Tech</a> (2024).
      </p>
      <p>
        I’m interested in HCI and STS research, specifically in labor, platform studies, sex worker
        advocacy, and sex education.
      </p>
      <p>
        In my research, I focus on ethnography, interview studies, thematic coding, and platform and
        policy analysis. I am comfortable with quantitative methods as well.
      </p>
      <p className="contact-note">
        You can contact me at <a href="mailto:lizhfrench@gmail.com">lizhfrench [at] gmail [dot] com</a>{' '}
        (personal) or <a href="mailto:efrench6@gatech.edu">efrench6 [at] gatech [dot] edu</a> (academic).
      </p>
    </>
  );
}

function ResearchPage() {
  return (
    <>
      <p>
        I’m currently in the <a href="https://www.esc-lab.org/">Equity &amp; Sustainability in
        Computing (ESCape) Lab</a> at Georgia Tech, working on a paper about the body, OnlyFans, and
        online communities, as well as a zine representing these findings.
      </p>
      <p>
        I’ve also contributed to projects including writing assistance on a paper about an eating
        disorder mutual-aid recovery group, a codebook for a breast cancer subreddit study, and AI
        healthcare policy document analysis in LMIC countries.
      </p>
    </>
  );
}

const experience = {
  Research: [
    ['ESCape Lab at Georgia Tech', 'Graduate Researcher', 'Aug 2025 – Present', 'https://www.esc-lab.org/'],
    ['Emory University Hospital', 'Senior Design', 'May – Dec 2024', 'https://www.isye.gatech.edu/sd-projects/emory-healthcare-6678'],
    ['HumaniTech VIP at Georgia Tech', 'Undergraduate Researcher', 'Jan 2022 – May 2022', 'https://vip.gatech.edu/teams/entry/1323/'],
  ],
  Industry: [
    ['Flaire', 'Product Manager Intern', 'Aug – Nov 2025', 'https://www.linkedin.com/company/flairehq/posts/?feedView=all'],
    ['The Osprey Group', 'Product Manager Intern', 'Jun – Aug 2025', 'https://flywithosprey.com/'],
    ['U.S. Bank', 'Product Manager Intern', 'Jun – Aug 2024', 'https://www.usbank.com/business-banking/payment-solutions.html'],
    ['Honeywell', 'Software Engineer Intern', 'Aug – Dec 2023', 'https://www.honeywellaerospace.com/us/en/solutions/innovation/connectivity'],
    ['Georgia-Pacific', 'Analyst Intern', 'May – Aug 2023', 'https://www.gppackaging.com/'],
  ],
};

function ExperiencePage() {
  return Object.entries(experience).map(([heading, entries]) => (
    <section className="experience-section" key={heading}>
      <h2>{heading}</h2>
      <ul className="experience-list">
        {entries.map(([organization, role, dates, href]) => (
          <li key={organization}>
            <a href={href}>{organization}</a>
            <span className="entry-role">{role}</span>
            <span className="entry-date">{dates}</span>
          </li>
        ))}
      </ul>
    </section>
  ));
}

function ResumePage() {
  return (
    <section className="resume-card">
      <p>View or download my current resume.</p>
      <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
        Open resume <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

const pageComponents = {
  about: AboutPage,
  research: ResearchPage,
  experience: ExperiencePage,
  resume: ResumePage,
};

function App() {
  const page = document.body.dataset.page || 'about';
  const PageContent = pageComponents[page] || AboutPage;

  return (
    <div className="page-shell">
      <SiteHeader page={page} />
      <main id="main-content" className={`page-content page-${page}`}>
        <PageContent />
      </main>
      <footer className="site-footer">© 2026 Liz French</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
