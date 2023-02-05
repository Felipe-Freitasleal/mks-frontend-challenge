import axios from "axios";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Product } from "../components/Products/Product";
import { IProducts, useMks } from "../contexts/MksContext";
import { useEffect, useState } from "react";
import { Main, Div } from "./styledHomePage";


export const HomePage = (props: any) => {
  const { products, setProducts } = useMks();

  const baseURL: string = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`;

  const getProducts = async (baseURL: string) => {
    try {
      const request = await axios.get(baseURL);
      setProducts(request.data.products as IProducts);

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

    } else {
      console.log("não tá funcionando");
    }
  };

  useEffect(()=>{
    checkProducts(products);
  },[products])

  return (
    <Div>
      <Header/>
      <Main>
      {listProducts.map((product)=><Product key={product.id} product={product}/>) }
      </Main>
      <Footer />
    </Div>
  );
};
