import {
  CloseButton,
  Flex,
  Img,
  Stack,
  Text,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { IProducts, useMks } from "../../contexts/MksContext";

interface CartProps {
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

export const Cart = ({ product }: CartProps) => {
  const { removerProduto, cartProducts, setCartProducts } = useMks();

  const stringTNumber = Number(product.price);
  const priceProduct = stringTNumber.toFixed();

  const onClickAdd = (product) => {
    const newCart = [...cartProducts]
    product.quantity = product.quantity + 1

    setCartProducts(newCart)
  }

  const onClickRemoveQuantity = (product) => {
    const newCart = [...cartProducts]

    if (product.quantity > 1) {
      product.quantity = product.quantity - 1
    }

    return setCartProducts(newCart)
  };


  return (
    <Flex
      border={"1px solid lightgrey"}
      borderRadius={" 8px"}
      overflow={"hidden"}
      height={"95px"}
      width={"379px"}
      margin={"16px"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      backgroundColor={"white"}
      color={"#2C2C2C"}
      fontFamily={"Montserrat"}
    >
      <Img
        src={product.photo}
        alt="Capa disco"
        borderRadius="lg"
        rounded={"lg"}
        objectFit={"cover"}
        maxW={"70px"}
        minW={"70px"}
        maxH={"70px"}
        minH={"70px"}
      />
      <Flex
        w={"100%"}
        p={4}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          fontSize={"13px"}
          fontWeight={"400"}
          w={"113px"}
          top={"37px"}
          left={"90px"}
        >
          {product.name}
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Text
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"6px"}
            w={"11"}
            top={"34px"}
            left={"212px"}
          >
            Qtd:
          </Text>
          <Box
            display={"flex"}
            flexDir={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            padding={"8px"}
          >
            <Button
              colorScheme="teal"
              size="xs"
              maxW={"18px"}
              minW={"18px"}
              maxH={"18px"}
              minH={"18px"}
              borderRightRadius={"0px"}
              border={"1px solid #BFBFBF"}
              backgroundColor={"white"}
              color={"black"}
              _hover={{
                backgroundColor: "black",
                color: "white",
              }}
              onClick={()=> onClickRemoveQuantity(product)}
            >
              -
            </Button>
            <Text
              border={"1px solid #BFBFBF"}
              maxW={"18px"}
              minW={"18px"}
              maxH={"18px"}
              minH={"18px"}
              fontSize={"10px"}
              fontWeight={"400"}
              lineHeight={"6px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"black"}
            >
              {product.quantity}
            </Text>
            <Button
              colorScheme="teal"
              size="xs"
              maxW={"18px"}
              minW={"18px"}
              maxH={"18px"}
              minH={"18px"}
              borderLeftRadius={"0px"}
              border={"1px solid #BFBFBF"}
              backgroundColor={"white"}
              color={"black"}
              _hover={{
                backgroundColor: "black",
                color: "white",
              }}
              onClick={()=> onClickAdd(product)}
            >
              +
            </Button>
          </Box>
        </Box>

        <Text
          fontSize={"14px"}
          fontWeight={"700"}
          lineHeight={"17px"}
          left={"78.44%"}
          right={"5.45%"}
          top={"44.55%"}
          bottom={"38.61%"}
        >
          R${priceProduct}
        </Text>
        <Box
        h={"95px"}

        >
          <CloseButton
            alignSelf={"flex-start"}
            justifySelf={"right"}
            size="sm"
            backgroundColor={"black"}
            color={"white"}
            borderRadius={"50%"}
            placeholder={"Fechar"}
            maxW={"18px"}
            minW={"18px"}
            maxH={"18px"}
            minH={"18px"}
            fontSize={"8px"}
            fontWeight={"400"}
            lineHeight={"17px"}
            _hover={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => removerProduto(product)}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
