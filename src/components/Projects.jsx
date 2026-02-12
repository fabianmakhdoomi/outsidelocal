import { projects } from "../data/content";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="cards-grid projects-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="btn btn-ghost project-btn" type="button">
                {project.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;