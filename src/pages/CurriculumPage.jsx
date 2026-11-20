import { curriculumData } from '../data/curriculumData';

export default function CurriculumPage() {
  return (
    <div>
      <h1>Учебный план</h1>
      <div className="grid">
        {curriculumData.map((item) => (
          <article key={item.id} className="card">
            <span>{item.course} • {item.hours} ч.</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
