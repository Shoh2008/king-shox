import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 50px;
  color: ${theme.color};
  border: 0.1px double transparent;
  background: ${theme.background};
  .card-1 {
    width: 95%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    margin: 10px auto;
    border-radius: 50px;
    .image {
      position: relative;
      .card {
        height: 233px;
        width: 500px;
        transform: rotate(-5deg);
        position: absolute;
        background: ${theme.element};
        border-radius: 20px;
        top: 0;
      }
      .box {
        height: 233px;
        width: 500px;
      }
      .img {
        z-index: 1;
        overflow: hidden;
        height: 233px;
        position: absolute;
        width: 500px;
        border-radius: 20px;
        top: 0;
      }
    }
    .info {
      h1,
      h3 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          height: 15px;
          width: 15px;
          margin: 10px;
          border-radius: 50%;
        }
      }
      button {
        height: 45px;
        width: 200px;
        margin: 10px auto;
      }
    }
    @media screen and (max-width: 750px) {
      flex-wrap: wrap;
      height: auto;
      .image {
        .card {
          height: 150px;
          width: 300px;
        }
        .box {
          height: 150px;
          width: 300px;
        }
        .img {
          height: auto;
          width: 300px;
        }
      }
      .info {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .card-2 {
    width: 95%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    margin: 10px auto;
    border-radius: 50px;
    .image {
      position: relative;
      .card {
        height: 233px;
        width: 500px;
        transform: rotate(-5deg);
        position: absolute;
        background: ${theme.element};
        border-radius: 20px;
        top: 0;
      }
      .box {
        height: 233px;
        width: 500px;
      }
      .img {
        z-index: 1;
        overflow: hidden;
        height: 233px;
        position: absolute;
        width: 500px;
        border-radius: 20px;
        top: 0;
      }
    }
    .info {
      h1,
      h3 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          height: 15px;
          width: 15px;
          margin: 10px;
          border-radius: 50%;
        }
      }
      button {
        height: 45px;
        width: 200px;
        margin: 10px auto;
      }
    }
    @media screen and (max-width: 750px) {
      flex-wrap: wrap;
      height: auto;
      .image {
        .card {
          height: 150px;
          width: 300px;
        }
        .box {
          height: 150px;
          width: 300px;
        }
        .img {
          height: auto;
          width: 300px;
        }
      }
      .info {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  img {
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;
