import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

interface MksContextProps {
  products: {}[];
  cartProducts: {}[];
  setProducts: any;
  setCartProducts: any;
  addProductToCart: any;
  removerProduto: any;
}

interface MksProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

export const MksContext = createContext({} as MksContextProps);

export const MksProvider = ({ children }: MksProviderProps) => {
  const [products, setProducts] = useState<Array<IProducts>>([]);
  const [cartProducts, setCartProducts] = useState<Array<IProducts>>([]);

  function addProductToCart(product: IProducts) {
    const newProduct = {...product}
    newProduct.quantity =  1
    setCartProducts([...cartProducts, newProduct]);
    swal({
      title: "Muito bem!",
      text: "O produto foi adicionado ao carrinho!",
      icon: "success",
    });
  }

  const removerProduto = (product) => {

    const novoCartData = cartProducts.filter(p => p !== product);
    setCartProducts(novoCartData);

    setCartProducts(novoCartData);

    swal({
      title: "Certo!",
      text: "O produto foi removido do carrinho!",
      icon: "success",
    });
  };

  return (
    <MksContext.Provider
      value={{
        products,
        cartProducts,
        setProducts,
        setCartProducts,
        addProductToCart,
        removerProduto,
      }}
    >
      {children}
    </MksContext.Provider>
  );
};

export const useMks = () => {
  const context = useContext(MksContext);
  return context;
};
