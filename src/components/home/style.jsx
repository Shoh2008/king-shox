import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  transition: linear 0.5s;
  min-height: 100vh;
  min-width: 100%;
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box:nth-child(2) {
    width: 30%;
  }
  .skills {
    div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: ${theme.border};
      margin: 20px;
      &:hover {
        animation: skill 1s 1 !important;
        @keyframes skill {
          0% {
            transform: translate(20px, 20px);
          }
          25% {
            transform: translate(-20px, -20px);
          }
          50% {
            transform: translate(20px, -20px);
          }
          75% {
            transform: translate(-20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      }
    }
    div:nth-child(1) {
      background: url(${require("../../assets/icons/react.png")});
      background-repeat: no-repeat;
      background-size: cover;
    }
    div:nth-child(2) {
      background: url(${require("../../assets/icons/redux.png")});
      background-repeat: no-repeat;
      background-size: cover;
    }
    div:nth-child(3) {
      background: url(${require("../../assets/icons/py.png")});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .image {
    height: 400px;
    width: 300px;
    border-radius: 20px;
    border: ${theme.border};
    img {
      height: 100%;
    }
  }
  .text {
    width: 300px;
    text-align: center;
    button {
      margin: 15px auto;
    }
    h1 {
      color: ${theme.color};
    }
    p {
      margin-top: 30px;
      color: ${theme.pColor};
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    .box{
      width: 100%;
    }
    .text{
      margin-top: 50px;
    }
  }
`;
