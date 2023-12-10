import styled, { css } from "styled-components";

const types = {
  text: css`
    &:focus {
      outline: none;
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
    height: 30px;

    &:active {
      cursor: grabbing;
    }
    &:focus {
      outline: none;
    }
  `,
};

const Input = styled.input`
  width: 90%;
  height: 60px;
  background-color: var(--color-sub);
  border: none;
  border-radius: 20px;
  padding: 0 25px;
  position: relative;
  color: var(--color-text);

  ${(props) => types[props.type]}
`;

export default Input;
