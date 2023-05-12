import './index.scss';

export interface NavLinkProps {
  label: string;
  href: string;
}

export function NavLink({ label, href }: NavLinkProps) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};
