import { useMks } from "../../contexts/MksContext";
import { Div } from "./styledHead";
import { BiCart } from 'react-icons/bi';

export const Header = () => {
  const { cartProducts } = useMks();
  return (
    <Div>
      <div className="title">
        <span className="bigTitle">MKS</span> <span className="lowTitle">Sistemas</span>
      </div>
      <button><BiCart/>{cartProducts.length}</button>
    </Div>
  );
};
