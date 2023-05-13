import { Logo } from '../Atoms/Logo';
import { NavLink } from '../Atoms/NavLink';
import { AutocompleteSearchBar } from '../Molecules/AutocompleteSearchBar';
import "./Header.scss";

export function Header () {
  return (
    <header>
      <Logo />
      <nav className="navigation">
        <ul>
          <NavLink link="/" label="Home" />
          <NavLink link="/" label="About" />
          <NavLink link="/Post/All" label="Blog" />
          <NavLink link="/" label="Contact" />
          <NavLink link="/Post/Create" label="Create a post" />
        </ul>
      </nav>
      <div>
        <AutocompleteSearchBar />
      </div>
    </header>
  );
};
