import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  height: 80px;
  backdrop-filter: blur(30px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  z-index: 15;
  transition: 0.3s;
  .links {
    width: 35%;
    display: flex;
    justify-content: start;
    align-items: center;
    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        margin: 0 10px;
      }
    }
  }
  .active {
    background: ${theme.div};
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
    animation: a 0.5s 1 linear;
    @keyframes a {
      0% {
        transform: scale(0.7, 1.3);
      }
      25% {
        transform: scale(1.3, 0.7);
      }
      50% {
        transform: scale(0.7, 1.3);
      }
      75% {
        transform: scale(1.3, 0.7);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }
  h2 {
    text-align: center;
    width: 30%;
    font-size: 25px;
    color: ${theme.element};
  }
  .end {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 35%;
    .gitlink {
      display: flex;
      align-items: center;
      img {
        height: 30px;
        margin: 10px;
      }
    }
  }
  .open {
    left: -100%;
  }
  @media screen and (max-width: 750px) {
    height: 100vh;
    width: 100%;
    flex-wrap: wrap;
    backdrop-filter: blur(10px);
    background: #1e1e1ed7;
    left: -100%;
    h2,
    a {
      text-align: center;
      margin: auto;
      width: 100%;
    }
    .end{
      width: auto;
      margin: auto;
    }
  }
`;
