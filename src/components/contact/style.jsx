import styled from "styled-components";
import { theme } from "../../utils";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  color: ${theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  .block {
    position: relative;
    height: 70%;
    width: 80%;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: url(${require("../../assets/contact.webp")}) no-repeat;
    background-size: cover;
    overflow: hidden;
    .form {
      height: 100%;
      width: 50%;
      padding: 15px 30px;
      background: #000000c1;
      text-align: center;
      input,
      textarea {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        outline: none;
        border-radius: 10px;
        background: ${theme.div};
        color: #fff;
        font-size: 15px;
        border: ${theme.border};
        transition: 0.3s;
      }
      input:focus,
      textarea:focus {
        box-shadow: 0 0 10px ${theme.element}, inset 0 0 10px ${theme.element};
      }
      textarea {
        max-height: 130px;
        max-width: 100%;
        min-height: 130px;
        min-width: 100%;
        height: 130px;
      }
      button {
        margin: auto;
      }
    }
    .card {
      width: 43%;
      height: 70%;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      background: ${theme.div};
      padding: 0 30px;
      h2,
      div {
        margin: 30px 0;
      }
      h3 {
        color: ${theme.element};
      }
      .git {
        display: flex;
        align-items: center;
        margin: 10px 0;
        img {
          height: 30px;
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    padding: 0;
    display: block;
    .block {
      height: auto;
      width: 100%;
      flex-wrap: wrap;
      .form {
        padding: 20px;
        width: 100%;
      }
      .card {
        width: 90%;
        margin: 20px auto;
        border-radius: 20px;
      }
    }
  }
`;
