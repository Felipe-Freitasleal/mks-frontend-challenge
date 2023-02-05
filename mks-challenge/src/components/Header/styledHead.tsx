import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 101px;

  background: #0f52ba;

  button {
    width: 90px;
    height: 45px;
    left: 1262px;
    top: 29px;

    background: #ffffff;
    border-radius: 8px;

    margin-right: 120px;

    font-family: "Montserrat";

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;

    color: #ffffff;

    mix-blend-mode: normal;

    margin-left: 110px;

    .bigTile {
      left: 4.51%;
      right: 86.6%;
      top: 2.73%;
      bottom: 92.97%;
    }

    .lowTitle {
      left: 11.46%;
      right: 74.65%;
      top: 4.39%;
      bottom: 91.31%;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
    }
  }
`;
