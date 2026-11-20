import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>404 — Страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </main>
  );
}
