import './Header.css';
import Nav from '../Navigation/Navigation';

export const HeaderPart = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default HeaderPart;
