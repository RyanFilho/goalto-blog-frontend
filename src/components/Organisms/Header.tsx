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
          <NavLink href="#" label="Home" />
          <NavLink href="#" label="About" />
          <NavLink href="#" label="Blog" />
          <NavLink href="#" label="Contact" />
        </ul>
      </nav>
      <div>
        <AutocompleteSearchBar onSearch={(value) => console.log("Searching " + value)} />
      </div>
    </header>
  );
};
