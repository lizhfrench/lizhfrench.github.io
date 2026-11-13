import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const resumeUrl =
  'https://drive.google.com/file/d/1B-FvJZQyGfJ-Ghhu-1PzXcrniEIs6ICM/view?usp=sharing';

const navigation = [
  { id: 'about', label: 'About', href: 'index.html' },
  { id: 'research', label: 'Research', href: 'research.html' },
  { id: 'experience', label: 'Experience', href: 'experience.html' },
  { id: 'resume', label: 'Resume', href: 'resume.html' },
];

const news = [
  {
    date: '10/2026',
    text: (
      <>
        Joined the <a href="https://feministmediastudio.ca/">Feminst Media Studio</a>.
      </>
    ),
  },
  {
    date: '10/2026',
    text: (
      <>
        Attended 4S and presented on a panel,{' '}
        <i>Reworking TechnoPower: Everyday Digital Practices in Marginalized Worlds</i>.
      </>
    ),
  },
  { date: '09/2026', text: "Attended Tapia." },
  { date: '03/2026', text: "Attended TEI." },
  { date: '09/2025', text: "Joined the ESCape Lab." },
  { date: '08/2025', text: "Started my Master's in CS & HCI at Georgia Tech." },
];

const experience = {
  Research: [
    ['ESCape Lab at Georgia Tech', 'Graduate Researcher', 'August 2025 – Present', 'https://www.esc-lab.org/'],
    ['Emory University Hospital', 'Senior Design', 'May – December 2024', 'https://www.isye.gatech.edu/sd-projects/emory-healthcare-6678'],
    ['HumaniTech VIP at Georgia Tech', 'Undergraduate Researcher', 'January – May 2022', 'https://vip.gatech.edu/teams/entry/1323/'],
  ],
  Industry: [
    ['Flaire', 'Product Manager Intern', 'August – November 2025', 'https://www.linkedin.com/company/flairehq/posts/?feedView=all'],
    ['The Osprey Group', 'Product Manager Intern', 'June – August 2025', 'https://flywithosprey.com/'],
    ['U.S. Bank', 'Product Manager Intern', 'June – August 2024', 'https://www.usbank.com/business-banking/payment-solutions.html'],
    ['Honeywell', 'Software Engineer Intern', 'August – December 2023', 'https://www.honeywellaerospace.com/us/en/solutions/innovation/connectivity'],
    ['Georgia-Pacific', 'Analyst Intern', 'May – August 2023', 'https://www.gppackaging.com/'],
  ],
};

/* ------------------------------------------------------------------ */
/* Shared components                                                   */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

function AboutPage() {
  return (
    <>
      <img className="profile-photo" src="/me.png" alt="Portrait of Liz French" />
      
      <p className="greeting">
          Hello, I'm Liz!
          <span className="pronouns">she/her</span>
      </p>
      
      <p>
        I'm currently a researcher in the{' '}
        <a href="https://www.esc-lab.org/">Equity &amp; Sustainability in Computing Lab</a> at
        Georgia Tech's{' '}
        <a href="https://www.ic.gatech.edu/">School of Interactive Computing</a> advised by{' '}
        <a href="https://shaowenbardzell.com/">Dr. Shaowen Bardzell</a>. I'm working towards my{' '}
        <a href="https://www.cc.gatech.edu/">M.S. in Computer Science</a>, concentrating in
        Human-Computer Interaction, and I also hold a{' '}
        <a href="https://www.isye.gatech.edu/">B.S. in Industrial Engineering</a> from Georgia
        Tech.
      </p>

      <p>
        I'm interested in HCI and STS research on labor and platform studies, particularly sex
        worker advocacy and sex education. I want to examine how intimate labor affects workers
        and their relationships, how sex workers organize and advocate for their rights, including
        through collective and unionizing efforts, and how this labor is discussed in online
        spaces. I'm also interested in how content moderation on platforms such as OnlyFans and
        Patreon shapes creators' work. For more insight into my ongoing and past research
        projects, go to <a href="research.html">Research</a>.
      </p>

      <p className="contact-note">You can contact me via <a href="https://www.linkedin.com/in/elizabethfrench1/">LinkedIn</a> or email at efrench6 [at] gatech [dot] edu.</p>

      <section className="news-section" aria-labelledby="recent-news">
        <div className="news-header">
          <h2 id="recent-news">Updates</h2>
        </div>
        <ul className="news-list">
          {news.map(({ date, text }) => (
            <li key={date}>
              <span className="news-date">{date}</span>
              <span className="news-text">{text}</span>
            </li>
          ))}
        </ul>
      </section>

    </>
  );
}

function ResearchPage() {
  return (
    <>
      <p>
        My research sits at the intersection of human-computer interaction (HCI) and science and
        technology studies (STS). I study how intimate labor affects those who participate in it
        and how workers organize themselves. I currently conduct my work in online communities
        but I plan to do in person work as well.
      </p>

      <p>See my <a href="https://www.are.na/liz-french">Are.na</a> here!</p>

      <section className="research-section" aria-labelledby="current-projects">
        <h2 id="current-projects">Current research</h2>

        <article className="research-project">
          <p className="project-kicker">First author • Work in progress</p>
          <h3>OnlyFans creators, bodies, and relationships on Reddit</h3>
          <p>
            This project examines a subreddit for OnlyFans creators: how members understand and
            relate to themselves, their bodies, and one another. The paper is planned for
            submission to <strong>CSCW 2027</strong>. I presented this work on a panel at 4S. I'm
            also developing a zine from this work, planned for submission as a pictorial to{' '}
            <strong>DIS 2027</strong>.
          </p>
          <p className="project-note">
            <a href="https://docs.google.com/presentation/d/1cZwAj12AU4ynE7tBkQ9FCrAM6dFuebfG/edit?usp=sharing&ouid=102335579661304907737&rtpof=true&sd=true">
              4S presentation slides
            </a>
          </p>
        </article>

        <article className="research-project">
          <p className="project-kicker">Co-first author • Work in progress</p>
          <h3>Mapping AI policy across countries</h3>
          <p>
            This project builds on findings from our AI in healthcare policy analysis, described
            below. We’re expanding the scope from healthcare policy documents in low- and
            middle-income (LMIC) countries to AI policy documents from countries around the
            world. We plan to create an interactive map and an in-person exhibit on Georgia Tech’s
            campus, where visitors can explore how AI policy varies across countries. We plan to
            submit the project to <strong>DIS 2028</strong>.
          </p>
          <p className="project-note">This project will be continued in spring 2027.</p>
        </article>
      </section>

      <section className="research-section" aria-labelledby="papers-under-review">
        <h2 id="papers-under-review">Papers under review</h2>

        <article className="research-project">
          <p className="project-kicker">Second author • Under review at JMIR</p>
          <h3>
            From Symptom Appraisal to Treatment Preparation: Expressed Needs and Peer Support in
            an Online Breast Health Community
          </h3>
          <p>
            For this study of a breast health community on Reddit (r/doihavebreastcancer), I
            helped the first author develop the codebook; the first author and I each coded 500
            threads. We found that what people ask for shifts over time: earlier posts ask what a
            symptom or finding means, while later ones center on procedures, next steps, and
            emotional relief. We also found that getting a reply isn't the same as getting the
            support a post calls for. Among 100 threads about reading clinical reports, 32
            received a human reply, but only 13 contained informational support.
          </p>
          <p className="project-note">
            Submitted to the Journal of Medical Internet Research (JMIR).
          </p>
        </article>

        <article className="research-project">
          <p className="project-kicker">Writing contributor • Under review at CHI 2027</p>
          <h3>Ordinary Tools, Organized Care: Bounded Mutuality in Eating-Disorder Mutual Aid</h3>
          <p>
            This paper analyzes podcast episodes from a Chinese eating-disorder mutual-aid group.
            I assisted in the proofreading and writing. The study describes how members balanced
            supporting others with protecting their own recovery, using group supervision and
            shared reflection to make sense of volunteer work and develop knowledge for wider
            sharing. Contributing could also help members find value in their own recovery.
          </p>
          <p className="project-note">
            Submitted to Conference on Human Factors in Computing Systems (CHI) 2027.
          </p>
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
            strategic intent. We also created diagrams and began writing the findings, but the
            project was halted before the analysis was completed.
          </p>
          <p className="project-note">
            <a href="https://miro.com/app/board/uXjVGhpxQqk=/?share_link_id=618290897161">
              System diagrams board
            </a>
          </p>
        </article>

        <article className="research-project">
          <p className="project-kicker">Team member • Undergraduate senior design</p>
          <h3>Improving Emory University Hospital's interventional radiology scheduling</h3>
          <p>
            With a team of seven other industrial engineering students, I worked with Emory
            University Hospital's interventional radiology (IR) department to define and address
            a scheduling problem. We found that miscommunication between patient and provider
            scheduling teams left procedure rooms empty for long periods. We built an Excel macro
            tool that let schedulers enter constraints and generated several optimized schedules
            designed to fill rooms while minimizing gaps between procedures.
          </p>
          <p className="project-note">
            <a href="https://www.isye.gatech.edu/sd-projects/emory-healthcare-6678">Project summary</a>
          </p>
          <br></br>
          <p className="project-note">
            <a href="https://canva.link/6vbsr0niux0jd1z">Final capstone poster</a>
          </p>
        </article>
      </section>
      
    </>
  );
}

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
    <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
      View my current resume (updated October 2026)
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

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
