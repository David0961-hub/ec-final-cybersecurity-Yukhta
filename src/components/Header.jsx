import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">🛡️ CyberSec College</NavLink>
        <nav className="nav">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/about">О направлении</NavLink>
          <NavLink to="/curriculum">Учебный план</NavLink>
          <NavLink to="/teachers">Преподаватели</NavLink>
          <NavLink to="/career">Карьера</NavLink>
          <NavLink to="/projects">Проекты</NavLink>
          <NavLink to="/news">Новости</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
      </div>
    </header>
  );
}
