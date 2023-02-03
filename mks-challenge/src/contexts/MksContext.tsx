import { createContext, useContext, useState } from "react";

interface MksContextProps {
  products: {}[];
  cartProducts: {}[];
  setProducts: any;
  setCartProducts: any;
  addProductToLits: any;
  addProductToCart: any;
}

interface MksProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export const MksContext = createContext({} as MksContextProps);

export const MksProvider = ({ children }: MksProviderProps) => {
  const [products, setProducts] = useState<Array<IProducts>>([]);
  const [cartProducts, setCartProducts] = useState<Array<IProducts>>([]);

  function addProductToLits(product: IProducts) {
    setProducts([...products, product]);
  }

  function addProductToCart(product: IProducts) {
    setProducts([...cartProducts, product]);
  }

  return (
    <MksContext.Provider
      value={{
        products,
        cartProducts,
        setProducts,
        setCartProducts,
        addProductToLits,
        addProductToCart,
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
