import styled, { css } from "styled-components";
import { device } from "./MediaSize";

interface InputProps {
  type?: "text" | "date" | "checkbox";
}

const types = {
  text: css`
    transition: width 0.3s ease-in-out;

    &:focus {
      outline: none;
      width: 100%;
    }
  `,
  date: css`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
    &:focus {
      outline: none;
    }
  `,
  checkbox: css`
    cursor: grab;
    height: 25px;
    width: 25px;

    &:active {
      cursor: grabbing;
    }
    &:focus {
      outline: none;
    }
  `,
};

const Input = styled.input<InputProps>`
  width: 90%;
  height: 60px;
  background-color: var(--color-sub);
  border: none;
  border-radius: 20px;
  padding: 0 25px;
  position: relative;
  color: var(--color-text);

  ${(props) => types[props.type || "date" || "checkbox"]}

  @media ${device.tablet} {
    width: 100%;
    font-size: small;
  }

  @media ${device.mobile} {
    width: 80%;
    height: 50%;
    font-size: x-small;
  }
`;

export default Input;
