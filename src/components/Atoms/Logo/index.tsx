import { useNavigate } from "react-router-dom";
import './index.scss';

export function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo-container">
      <svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate("/")}>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="48">
          Lorem ipsum!
        </text>
      </svg>
    </div>
  );
};
