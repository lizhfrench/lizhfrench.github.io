import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumeUrl = 'https://drive.google.com/file/d/1HR-pDE21H6yz--400kVuXhAVrFnp7iCg/view?usp=sharing';

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
      <img className="profile-photo" src="/me.png" alt="Portrait" />
      <p>
        Hi, I'm Liz <em>(she/her)</em>! I'm currently a researcher in the Equity & Sustainability in Computing Lab 
        at Georgia Tech's <a href="https://www.ic.gatech.edu/">School of Interactive Computing </a>
        advised by <a href="https://shaowenbardzell.com/">Dr. Shaowen Bardzell</a>. I'm working towards my
        <a href="https://www.cc.gatech.edu/"> M.S. in Computer Science</a>, concentrating in Human-Computer Interaction, 
        and I also hold a <a href="https://www.isye.gatech.edu/">B.S. in Industrial Engineering</a> from Georgia Tech.
      </p>
      <p>
        I'm interested in HCI and STS research on labor and platform studies, particularly sex worker advocacy 
        and sex education. I want to examine how intimate labor affects workers and their relationships, how 
        sex workers organize and advocate for their rights, including through collective and unionizing efforts, 
        and how this labor is discussed in online spaces. I'm also interested in how content moderation on platforms 
        such as OnlyFans and Patreon shapes creators' work. For more insight into my current and past research
        projects, go to <a href="research.html">Research</a>.
      </p>
      <p className="contact-note">
        You can contact me at <a href="mailto:lizhfrench@gmail.com">lizhfrench [at] gmail [dot] com</a>{' '}
        (personal) or <a href="mailto:efrench6@gatech.edu">efrench6 [at] gatech [dot] edu</a> (academic).
      </p>
 {/* 
      <aside className="updates-panel" aria-labelledby="updates-title">
        <h2 id="updates-title">Recent updates <span aria-hidden="true">▾</span></h2>
        <div className="updates-list" tabIndex="0" aria-label="Recent research and conference updates">
          <article className="update-item">
            <p><strong>Presenting at 4S</strong> I’ll present on panel 366, Reworking TechnoPower: Everyday Digital Practices in Marginalized Worlds</p>
          </article>
          <article className="update-item">
            <p><strong>Under review at CHI 2027</strong> I contributed writing to a paper on care and volunteer work in a Chinese eating-disorder mutual-aid group.</p>
          </article>
          <article className="update-item">
            <p><strong>Under review at JAMIA</strong> I co-developed the codebook and coded 500 Reddit threads for a study of an online breast health community.</p>
          </article>
          <article className="update-item">
            <p><strong>Two projects in progress</strong> I’m developing an OnlyFans creator subreddit paper for CSCW 2027 and a related zine pictorial for DIS 2027.</p>
          </article>
        </div>
      </aside>
  */}
    </>
  );
}

function ResearchPage() {
  return (
    <>
      <p>
        My research sits at the intersection of human-computer interaction and science and technology
        studies. I study how people build relationships, care, and community through digital platforms
        and institutions. I'm part of the <a href="https://www.esc-lab.org/">Equity &amp; Sustainability
        in Computing (ESCape) Lab</a> at Georgia Tech.
      </p>
     <section className="research-section" aria-labelledby="current-projects">
        <h2 id="current-projects">Current research</h2>
        <article className="research-project">
          <p className="project-kicker">First author • Work in progress</p>
          <h3>OnlyFans creators, bodies, and relationships on Reddit</h3>
          <p>
            This project examines a subreddit for OnlyFans creators and how members understand and
            relate to themselves, their bodies, and one another. The paper is planned for submission
            to CSCW 2027. I'm also developing a zine from this work, planned for submission as a
            pictorial to DIS 2027.
          </p>
          <p className="project-note">
            I'll present this work on panel 366, "Reworking TechnoPower: Everyday Digital Practices
            in Marginalized Worlds" at 4S.
          </p>
        </article>
      </section>

      <section className="research-section" aria-labelledby="papers-under-review">
        <h2 id="papers-under-review">Papers under review</h2>
        <article className="research-project">
          <p className="project-kicker">Second author • Under review at JAMIA</p>
          <h3>From Symptom Appraisal to Treatment Preparation: Expressed Needs and Peer Support in an Online Breast Health Community</h3>
          <p>
            For this study of a breast health community on Reddit (r/doihavebreastcancer), I helped the first author develop
            the codebook; the first author and I each coded 500 threads.
          </p>
          <p className="project-note">Submitted to the Journal of the American Medical Informatics Association (JAMIA).</p>
        </article>
        
        <article className="research-project">
          <p className="project-kicker">Writing contributor • Under review at CHI 2027</p>
          <h3>Ordinary Tools, Organized Care: Bounded Mutuality in Eating-Disorder Mutual Aid</h3>
          <p>
            This paper analyzes podcast episodes from a Chinese eating-disorder mutual-aid group.
            I assisted in the proofreading and writing. The study describes how members balanced supporting
            others with protecting their own recovery, using group supervision and shared reflection
            to make sense of volunteer work and develop knowledge for wider sharing. Contributing
            could also help members find value in their own recovery.
          </p>
          <p className="project-note">Submitted to Conference on Human Factors in Computing Systems (CHI) 2027.</p>
        </article>
        
      </section>
      <section className="research-section" aria-labelledby="other-projects">
        <h2 id="other-projects">Other projects</h2>
        <article className="research-project">
          <p className="project-kicker">Contributor • Project terminated</p>
          <h3>AI in healthcare policy across low- and middle-income (LMIC) countries</h3>
          <p>
            Our team planned a comparative analysis of healthcare AI policy documents from three
            countries. We read and coded the documents for infrastructure, software, actors and
            institutions, and processes and protocols, as well as sector, funding, maturity, and
            strategic intent. We also created diagrams and began writing the findings, but the project 
            was halted before the analysis was completed.
          </p>
          <p className="project-note"><a href="https://miro.com/app/board/uXjVGhpxQqk=/?share_link_id=618290897161">View the project board on Miro</a></p>
        </article>
        
        <article className="research-project">
          <p className="project-kicker">Team member • Undergraduate senior design</p>
          <h3>Improving Emory  University Hospital's interventional radiology scheduling</h3>
          <p>
            With a team of seven other industrial engineering students, I worked with Emory
            University Hospital's interventional radiology (IR) department to define and address a
            scheduling problem. We found that miscommunication between patient and provider
            scheduling teams left procedure rooms empty for long periods. We built an Excel macro tool that let
            schedulers enter constraints and generated several optimized schedules designed to
            fill rooms while minimizing gaps between procedures.
          </p>
          <p className="project-note"><a href="https://www.isye.gatech.edu/sd-projects/emory-healthcare-6678">Project summary</a></p>
          <p className="project-note"><a href="https://canva.link/6vbsr0niux0jd1z">Final capstone poster</a></p>
        </article>

        <article className="research-project">
          <h3>Conferences Attended</h3>
          <p>4S</p>
          <p>Tapia</p>
          <p>TEI</p>
          <p>Grace Hopper Celebration</p>
          <p className="project-note"><a href="https://www.isye.gatech.edu/sd-projects/emory-healthcare-6678">Project summary</a></p>
          <p className="project-note"><a href="https://canva.link/6vbsr0niux0jd1z">Final capstone poster</a></p>
        </article>
      </section>
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
        Open resume <span aria-hidden="true"></span>
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
