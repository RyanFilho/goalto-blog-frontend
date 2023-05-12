import './index.scss';

export interface InputProps {
  type: string;
  label: string;
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Input ({ type, label, value, required, onChange, onFocus, onBlur }: InputProps) {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        type={type}
        className="input"
        value={value}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
