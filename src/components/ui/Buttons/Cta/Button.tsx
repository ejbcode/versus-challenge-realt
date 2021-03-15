import {ButtonStyle} from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {
  color: "primary" | "secondary";
}

const Button: React.FC<Props> = ({children, ...props}) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
