import { useMks } from "../../contexts/MksContext";

interface ProductProps {
  product: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
  };
}

export const Product = ({ product }: ProductProps) => {
  const { addProductToCart } = useMks();
  console.log(product)

  return (
    <div>
      <img src={product.photo} alt="foto" />
      <span className="header">{product.name}</span>
      <span className="price">{product.price}</span>
      <p className="description">{product.description}</p>
      <button
        className="buyButton"
        onClick={() => addProductToCart(product)}
      >
        COMPRAR
      </button>
    </div>
  );
};
