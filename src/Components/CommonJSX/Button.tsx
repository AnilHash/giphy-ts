import { ButtonType } from "../../Types"


const Button : React.FC<ButtonType> = ({onClick, children}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button