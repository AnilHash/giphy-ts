import { ButtonType } from "../../Types";

const Button: React.FC<ButtonType> = ({ onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
