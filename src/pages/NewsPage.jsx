// src/pages/NewsPage.jsx
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function NewsPage() {
  return (
    <div>
      <h1>Новости и события</h1>
      <div className="grid">
        {newsData.map((item) => (
          <article key={item.id} className="card">
            <small>{item.date} | {item.category}</small>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <Link to={`/news/${item.id}`}>Читать подробнее →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
