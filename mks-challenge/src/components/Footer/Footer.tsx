import { Div } from "./styledFooter";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <Div>
      <p className="text">
        <span>MKS sistemas</span>
        <span className="icon">
          <BiCopyright />
        </span>
        <span>Todos os direitos reservados</span>
      </p>
    </Div>
  );
};
