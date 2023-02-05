import styled from "styled-components";

export const Div = styled.div`
  width: 230px;
  height: 300px;

  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: #FFFFFF;

  margin: 32px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 138px;
    min-height: 138px;
  }

  button {
    width: 100%;
    height: 32px;

    background-color: #0f52ba;
    border-color: transparent;
    border-radius: 0px 0px 8px 8px;
    color: #ffffff;

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;

    display: flex;
    flex-direction:  row;
    justify-content: center;
    align-items: center;


  }

  .namePrice {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    width: 192px;
  }

  .header {
    height: 38px;
    width: 124px;

    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;

    color: #2c2c2c;
  }

  .price {
    width: 64px;
    height: 26;

    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;

    background: #373737;
    color: #ffffff;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    height: 25px;
    width: 192px;
    padding-bottom: 32px;

    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;

    color: #2c2c2c;
  }

  .icon{
    margin: 8px;
  }
`;
