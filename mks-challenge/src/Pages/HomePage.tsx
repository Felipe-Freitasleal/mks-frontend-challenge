import axios from "axios";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Product } from "../components/Products/Product";
import { IProducts, useMks } from "../contexts/MksContext";
import { useEffect, useState } from "react";

export const HomePage = (props: any) => {
  const { products, setProducts } = useMks();

  const baseURL: string = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`;

  const getProducts = async (baseURL: string) => {
    try {
      const request = await axios.get(baseURL);
      setProducts(request.data.products as IProducts);
      console.log(request.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(baseURL);
  }, []);

  const [listProducts, setListProducts] = useState([]);

  const checkProducts = async (products) => {
    if (products) {
      let sendProducts = await products;
      setListProducts(sendProducts);
      console.log("passou por aqui")
    } else {
      console.log("não tá funcionando");
    }
  };

  checkProducts(products);

  // const renderProduct = (listProducts) => {
  //   if (listProducts) {
  //     console.log("chegou aqui tbem")
  //     listProducts.map((product)=><Product product={product}/>) 
  //   } else {
  //     return "CARREGANDO";
  //   }
  // };

  return (
    <div>
      <Header />
      <Cart />
      {listProducts.map((product)=><Product product={product}/>) }
      <Footer />
    </div>
  );
};
