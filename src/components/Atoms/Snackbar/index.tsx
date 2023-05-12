import "./index.scss";

export interface ISnackbarProps {
  message: string;
  onClose: () => void;
}

export function Snackbar({ message, onClose }: ISnackbarProps) {
  return (
    <div className="snackbar success">
      <div className="message">{message}</div>
      <div className="close" onClick={onClose}>
        X
      </div>
    </div>
  );
};
