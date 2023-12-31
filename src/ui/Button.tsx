import styled, { css } from "styled-components";
import { device } from "./MediaSize";

interface ButtonProps {
  variation?: "primary" | "secondary" | "danger";
  size?: "small" | "medium";
}

const sizes = {
  small: css`
    width: 30%;
  `,
  medium: css`
    width: 65%;
  `,
};

const variations = {
  primary: css`
    color: var(--color-text);
    background-color: var(--button-bg1);
    transition: letter-spacing 0.5s, box-shadow 0.5s ease-in-out, color 1s;

    &:hover {
      color: var(--text-hover);
      letter-spacing: 3.3px;
      box-shadow: 0 8px 5px var(--shadow-1);
      transition: box-shadow 0.3s ease-in-out, letter-spacing 0.3s, color 0.3s;
    }
  `,

  secondary: css`
    color: var(--color-submit);
    background: var(--bg-submit);
    transition: box-shadow 0.5s ease-in-out, color 1s;

    &:hover {
      background-color: var(--color-main);
      color: var(--text-hover);
      box-shadow: 0 8px 5px var(--shadow-1);
      transition: box-shadow 0.3s ease-in-out;
    }
  `,

  danger: css`
    color: var(--color-del);
    background-color: var(--bg-del);
    transition: box-shadow 0.5s ease-out, background-color 0.5s;
    transition-delay: 0.3s;

    &::after {
      content: " ?";
      opacity: 0;
      transition: opacity 0.3s ease-in 0.1s;
    }

    &:hover {
      background-color: var(--del-hover);
      box-shadow: 0 8px 5px var(--shadow-1);
      transition: box-shadow 0.3s ease-out, background-color 0.3s;
    }

    &:hover::after {
      content: " ?";
      opacity: 1;
      transition: opacity ease-in 0.3s;
    }
  `,
};

const Button = styled.button<ButtonProps>`
  border: none;
  text-align: center;
  height: 50px;
  border-radius: 20px;
  box-shadow: 0 2px 1px var(--shadow-1);

  ${(props) => sizes[props.size || "small"]}
  ${(props) => variations[props.variation || "secondary" || "danger"]}


  @media ${device.tablet} {
    width: 70%;
    font-size: small;
  }

  @media ${device.mobile} {
    width: 50%;
    height: 50%;
    text-align: center;
    border-radius: 10px;
    font-size: x-small;
    box-shadow: 0 2px 1px var(--shadow-1);
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
