import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content container">{children}</main>
      <Footer />
    </div>
  );
}
