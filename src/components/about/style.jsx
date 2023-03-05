import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  display: flex;
  justify-content: space-around;
  .block {
    width: 25%;
    padding: 80px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .box {
      min-height: 150px;
      min-width: 300px;
      height: 150px;
      width: 300px;
      border-radius: 10px;
      margin: 15px auto;
      display: flex;
      align-items: center;
      background: ${theme.div};
      color: ${theme.element};
      transition: 0.3s linear;
      position: relative;
      overflow: hidden;
      font-size: 25px;
      img {
        height: 130px;
        width: 130px;
        margin: 10px;
        transition: 0.5s;
      }
      &:hover img {
        transform: rotate(360deg);
      }
      &:hover {
        box-shadow: 0 0 20px #000;
      }
      &:hover::before {
        transition: 0.5s;
        content: "";
        position: absolute;
        bottom: 0;
        background: ${theme.element};
        height: 5px;
        animation: anime 0.5s forwards linear;
        @keyframes anime {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      }
    }
  }
  .text {
    padding: 150px 100px;
    width: 50%;
    text-align: center;
    pointer-events: none;
    p {
      color: ${theme.pColor};
      margin-bottom: 30px;
    }
    h1,
    h3 {
      color: ${theme.color};
      margin-bottom: 20px;
    }
    h3 {
      font-style: italic;
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    height: auto;
    .block {
      padding: 0;
      width: 100%;
      .box {
        margin: 10px auto;
      }
    }
    .text {
      width: 100%;
      padding: 20px;
    }
  }
`;
