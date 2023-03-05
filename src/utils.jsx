import styled from "styled-components";

export const theme = {
  pColor: "#d2d2d2",
  color: "#ffffff",
  background: "#131313",
  div: "linear-gradient(-45deg, transparent,#ffdd00)",
  element: "#fee900",
  border: "2px solid #ffdd00",
};

export const Button = styled.button`
  padding: 10px 30px;
  margin: 30px 0;
  background: ${theme.element};
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  transition: background 0.5s;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  &:hover {
    animation: shake 0.3s linear infinite both;
  }
  @keyframes shake {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }

    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }

    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }

    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }

    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }

    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  .gitimg {
    margin: 0 10px;
    width: 30px;
    height: 30px;
  }
`;
