import heroImgDesk from "../assets/images/steffano-photo.jpg";
import heroImgMobi from "../assets/images/steffano-photo-2.jpg";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import { skillsInf, projectsInf } from "../index.jsx";

function Main() {
  return (
    <main className="portfolio-main">
      <section className="hero-section section-padding">
        <div className="hero-container container grid">
          <div className="hero-info-box">
            <h1 className="hero-title ln-ht-md">
              Nice to meet you!
              <br />
              I'm <span>Steffano da Cruz</span>.
            </h1>
            <p className="hero-description txt-sm ln-ht-bg fade mar-btm-bg ">
              Formado em Gestão da Tecnologia da Informação, procuro uma
              oportunidade na area de desenvolvimento para aplicar minhas
              habilidades e conhecimentos em HTML, CSS, JavaScript, React,
              TypeScript, Node.js e PostgreSQL.
            </p>
            <a className="contact-button" href="#contact-section">
              Contact me
            </a>
          </div>
          <div className="hero-image-box">
            <img
              className="hero-image-desktop"
              src={heroImgDesk}
              alt="Steffano Photo"
            />
            <img
              className="hero-image-mobile"
              src={heroImgMobi}
              alt="Steffano Photo"
            />
          </div>
        </div>
      </section>

      <section className="skills-section section-padding">
        <div className="skills-container container">
          <ul className="skills-list grid grid-3-cols">
            {skillsInf.map((skillInfo) => (
              <Skills
                key={skillInfo.id}
                id={skillInfo.id}
                skillName={skillInfo.name}
                skillLevel={skillInfo.level}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="projects-section section-padding">
        <div className="projects-container container">
          <div className="projects-title-box flex mar-btm-bg">
            <h2 className="projects-title txt-hg">Projects</h2>
            <a className="contact-button" href="#contact-section">
              Contact me
            </a>
          </div>
          <ul className="projects-list grid grid-2-cols col-gap-md row-gap-hg">
            {projectsInf.map((projectInfo) => (
              <Projects
                key={projectInfo.id}
                id={projectInfo.id}
                image={projectInfo.image}
                name={projectInfo.name}
                link={projectInfo.link}
                skills={projectInfo.skills}
              />
            ))}
          </ul>
        </div>
      </section>

      <section id="contact-section" className="contact-section bg-color">
        <div className="contact-container container grid grid-2-cols">
          <div className="contact-title-box">
            <h2 className="contact-title txt-hg mar-btm-md">Contact</h2>
            <p className="contact-description txt-sm ln-ht-bg fade">
              Eu gostaria muito de ouvir sua opinião e como posso melhorar. Por
              favor, envie a sua mensagem e eu vou responder o mais breve
              possível. Obrigado!
            </p>
          </div>

          <form
            className="contact-form-box flex flex-dir-col row-gap-bg"
            name="contact"
            method="POST"
            netlify
          >
            <input
              className="contact-input-name"
              type="text"
              placeholder="NAME"
              name="name"
              required
            ></input>
            <input
              className="contact-input-email"
              type="email"
              placeholder="EMAIL"
              name="email"
              required
            ></input>
            <textarea
              className="contact-input-message"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
            <button className="message-button" type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Main;
