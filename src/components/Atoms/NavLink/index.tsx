import { Link } from 'react-router-dom';
import './index.scss';

export interface NavLinkProps {
  label: string;
  link: string;
}

export function NavLink({ label, link }: NavLinkProps) {
  return (
    <li>
      <Link to={link}>{label}</Link>
    </li>
  );
};
