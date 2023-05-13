import './index.scss';

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ type, children, onClick }: ButtonProps) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
