import { IProducts, useMks } from "../../contexts/MksContext";
import { Div } from "./styledHead";
import { BiCart } from "react-icons/bi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Cart } from "../Cart/Cart";

export const Header = () => {
  const { cartProducts } = useMks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);

  const total = cartProducts.reduce(
    (acc: number, product: IProducts) =>
      Number(product.price) * product.quantity + acc,
    0
  );

const [listCart, setListCard] = useState([])

  useEffect(()=>{
    setListCard(cartProducts)
  },[cartProducts])


  return (
    <Div>
      <div className="title">
        <span className="bigTitle">MKS</span>{" "}
        <span className="lowTitle">Sistemas</span>
      </div>
      <button onClick={onOpen}>
        <BiCart />
        {cartProducts.length}
      </button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent
          width={"486px"}
          height={"1024"}
          left={"954px"}
          top={"0px"}
          backgroundColor={"#0F52BA"}
          boxShadow={"-5px 0px 6px rgba(0, 0, 0, 0.13)"}
          fontFamily={"Montserrat"}
          color={"white"}
          borderRadius={"none"}
        >
          <ModalHeader fontSize={"28px"} fontWeight={"700"}>
            Carrinho de compras
          </ModalHeader>
          <ModalCloseButton
            backgroundColor={"black"}
            color={"white"}
            borderRadius={"50%"}
            placeholder={"Fechar"}
            _hover={{
              backgroundColor: "white",
              color: "black",
            }}
          />
          <ModalBody>
            {listCart.length > 0? (
              listCart.map((product: IProducts) => (
                <Cart key={product.id} product={product} />
              ))
            ) : (
              <Text>Carrinho Vazio</Text>
            )}
          </ModalBody>
          <ModalFooter display={"flex"} flexDir={"column"} p={"0px"}>
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              fontSize={"28px"}
              fontWeight={"700"}
              p={"32px"}
            >
              <Text>Total:</Text>
              <Box>
                R$<>{total}</>
              </Box>
            </Box>
            <Button
              width={"100%"}
              height={"97px"}
              backgroundColor={"black"}
              borderRadius={"none"}
              fontSize={"28px"}
              fontWeight={"700"}
              _hover={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              Finalizar Compra
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Div>
  );
};
