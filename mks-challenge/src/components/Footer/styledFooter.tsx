import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 34px;
  left: 0px;
  top: 990px;

  background: #eeeeee;
  .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    height: 17px;
    left: 604px;
    top: 998px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #000000;

    .icon{
        padding: 4px;
    }
  }
`;
