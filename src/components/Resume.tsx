import { useState } from "react";
import { Briefcase, Download, Linkedin, Mail, Send } from "lucide-react";
import {
  certifications,
  education,
  experiences,
  languages,
  links,
  nav,
  profile,
  sections,
  skills,
  volunteering,
} from "../content";
import {
  ExternalLink,
  WithFigures,
  usePageBackground,
  useRotation,
} from "../lib/hooks";
import { CareerTimeline } from "./CareerTimeline";
import "./resume.css";

const [firstName, lastName] = profile.name.split(" ");

function SkillAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="pt-acc">
      {skills.map((s, i) => {
        const isOpen = open === i;
        return (
          <li key={s.name} className="pt-acc-item" data-open={isOpen}>
            <h3 className="pt-acc-h">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`pt-acc-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{s.name}</span>
                <span className="pt-acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={`pt-acc-${i}`} className="pt-acc-panel" role="region">
              <div>
                <p>
                  <WithFigures text={s.description} className="pt-figure" />
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Resume() {
  usePageBackground("#454545");
  const roleIndex = useRotation(profile.roles.length, 2400);

  return (
    <div className="pt">
      <a href="#experience" className="pt-skip">
        Skip to content
      </a>
      <header className="pt-header">
        <a href="#about" className="pt-wordmark">
          Resume
        </a>
        <nav aria-label="Sections">
          <ul className="pt-nav">
            {nav.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="pt-nav-mobile">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="pt-hero">
          <div className="pt-photo" aria-hidden="true">
            <img src={profile.photo} alt="" />
          </div>

          <div className="pt-hero-text">
            <p className="pt-greeting">{profile.greeting}</p>
            <h1 className="pt-name" aria-label={profile.name}>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h1>

            <p className="pt-role">
              <span className="sr-only">{profile.roles.join(", ")}</span>
              <span className="pt-role-window" aria-hidden="true">
                <span
                  className="pt-role-reel"
                  style={{ transform: `translateY(${-roleIndex * 1.2}em)` }}
                >
                  {profile.roles.map((r) => (
                    <span key={r}>{r}</span>
                  ))}
                </span>
              </span>
            </p>

            <p className="pt-summary">{profile.summary}</p>
            <p className="pt-focus">
              {profile.focus.map((f, i) => (
                <span key={f}>
                  {f}
                  {i < profile.focus.length - 1 && (
                    <>
                      <span className="pt-sep" aria-hidden="true">
                        /
                      </span>{" "}
                    </>
                  )}
                </span>
              ))}
            </p>

            <div className="pt-actions">
              <a href="#contact" className="pt-btn pt-btn-solid">
                Get in Touch
              </a>
              <a
                href={profile.resumePdf}
                download="Bekzat Manapov Resume.pdf"
                className="pt-btn pt-btn-line"
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>
              <div className="pt-social">
                <ExternalLink href={links.linkedin} label="LinkedIn">
                  <Linkedin size={19} />
                </ExternalLink>
                <ExternalLink href={links.email} label="Email">
                  <Mail size={19} />
                </ExternalLink>
                <ExternalLink href={links.telegram} label="Telegram">
                  <Send size={19} />
                </ExternalLink>
              </div>
            </div>
          </div>

          <p className="pt-tenure">{profile.badge}</p>
        </section>

        <section id="experience" className="pt-section">
          <div className="pt-section-head pt-exp-head">
            <h2 className="pt-h2">{sections.experience.title}</h2>
            <CareerTimeline />
          </div>
          <ol className="pt-jobs">
            {experiences.map((job) => (
              <li key={job.id} id={`job-${job.id}`} className="pt-job">
                <p className="pt-period">{job.period}</p>
                <h3 className="pt-h3">{job.role}</h3>
                <p className="pt-company">
                  {job.logo ? (
                    <img src={job.logo} alt="" />
                  ) : (
                    <span className="pt-company-icon" aria-hidden="true">
                      <Briefcase size={12} />
                    </span>
                  )}
                  {job.company}
                </p>
                <ul className="pt-bullets">
                  {job.description.map((d) => (
                    <li key={d}>
                      <WithFigures text={d} className="pt-figure" />
                    </li>
                  ))}
                </ul>
                <ul className="pt-tags" aria-label="Skills used">
                  {job.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="pt-section">
          <div className="pt-section-head">
            <h2 className="pt-h2">{sections.skills.title}</h2>
            <p className="pt-lede">{sections.skills.subtitle}</p>
          </div>
          <SkillAccordion />
        </section>

        <section id="education" className="pt-section">
          <div className="pt-section-head">
            <h2 className="pt-h2">{sections.background.title}</h2>
            <p className="pt-lede">{sections.background.subtitle}</p>
          </div>

          <div className="pt-bg">
            <div className="pt-bg-block">
              <h3 className="pt-h4">Education</h3>
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="pt-bg-title">{e.degree}</p>
                  <p className="pt-bg-sub">{e.institution}</p>
                  <p className="pt-bg-sub">{e.year}</p>
                  <ul className="pt-bullets pt-bullets-sm">
                    {e.bullets.map((b) => (
                      <li key={b}>
                        <WithFigures text={b} className="pt-figure" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-bg-block">
              <h3 className="pt-h4">Certifications</h3>
              {certifications.map((c) => (
                <div key={c.title}>
                  <p className="pt-bg-title">{c.title}</p>
                  <p className="pt-bg-sub">
                    {c.issuer}
                    {c.year && `, ${c.year}`}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-bg-block">
              <h3 className="pt-h4">Languages</h3>
              <dl className="pt-langs">
                {languages.map((l) => (
                  <div key={l.name}>
                    <dt>{l.name}</dt>
                    <dd>{l.proficiency}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pt-bg-block">
              <h3 className="pt-h4">Volunteering</h3>
              {volunteering.map((v) => (
                <div key={v.role}>
                  <p className="pt-bg-title">{v.role}</p>
                  <p className="pt-bg-sub">{v.period}</p>
                  <ul className="pt-events">
                    {v.events.map((ev) => (
                      <li key={ev}>{ev}</li>
                    ))}
                  </ul>
                  <ul className="pt-bullets pt-bullets-sm">
                    {v.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pt-contact">
          <h2 className="pt-contact-title">{sections.contact.title}</h2>
          <ul className="pt-contact-list">
            <li>
              <ExternalLink href={links.telegram}>
                <span className="pt-c-word">Telegram</span>
                <span className="pt-c-detail">{links.telegramHandle}</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={links.email}>
                <span className="pt-c-word">Email Me</span>
                <span className="pt-c-detail">{links.emailAddress}</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={links.whatsapp}>
                <span className="pt-c-word">WhatsApp</span>
              </ExternalLink>
            </li>
          </ul>
          <footer className="pt-footer">
            © {new Date().getFullYear()} {profile.footer}
          </footer>
        </section>
      </main>
    </div>
  );
}
