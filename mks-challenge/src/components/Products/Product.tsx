import { useMks } from "../../contexts/MksContext";
import { Div } from "./styledProduct";
import { BiBox } from "react-icons/bi";


interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    quantity: number
  };
}

export const Product = ({ product }: ProductProps) => {
  const { addProductToCart } = useMks();

  const stringTNumber = Number(product.price);
  const priceProduct = stringTNumber.toFixed();

  return (
    <Div>
      <img src={product.photo} alt="foto" />
      <div className="namePrice">
        <span className="header">{product.name}</span>
        <span className="price">R${priceProduct}</span>
      </div>
      <p className="description">{product.description}</p>
      <button onClick={() => addProductToCart(product)}>
        <span className="icon">
          <BiBox />
        </span>
        COMPRAR
      </button>
    </Div>
  );
};
