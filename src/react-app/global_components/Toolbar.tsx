import './Toolbar.css';
import './MainLogo'
import MainLogo from './MainLogo';
const Toolbar = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-logo">
        < MainLogo />
      </div>
      <nav className="toolbar-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
