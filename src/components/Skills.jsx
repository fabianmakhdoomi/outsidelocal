import { skills } from "../data/content";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-content">
        <h2>Skills</h2>
        <div className="cards-grid skills-grid">
          {skills.map((skill) => (
            <article className="card skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;