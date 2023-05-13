import './index.scss';

export interface ITextAreaProps {
  label: string;
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function TextArea ({ label, value, required, onChange, onFocus, onBlur }: ITextAreaProps) {
  return (
    <div className="textarea-wrapper">
      <label className="textarea-label">{label}</label>
      <textarea
        className="textarea"
        value={value}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
