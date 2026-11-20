export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div>{project.category}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        <span>Стек: {Array.isArray(project.tech) ? project.tech.join(', ') : project.tech}</span>
        <span>Автор: {project.author}</span>
      </div>
    </article>
  );
}