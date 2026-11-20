// src/pages/NewsDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) return <div><h2>Новость не найдена</h2><Link to="/news">← Назад</Link></div>;

  return (
    <article>
      <Link to="/news">← Все новости</Link>
      <h1>{article.title}</h1>
      <p>{article.date} • {article.category}</p>
      <p>{article.content}</p>
    </article>
  );
}
