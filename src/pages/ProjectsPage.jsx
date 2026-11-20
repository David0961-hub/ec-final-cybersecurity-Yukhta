import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const categories = ['Все', 'Web', 'Network', 'Crypto'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProjects =
    activeCategory === 'Все'
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  return (
    <div>
      <h1>Проекты по кибербезопасности</h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: isActive ? '#0284c7' : '#1e293b',
                color: '#ffffff',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}