import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 60%;
    height: 15%;
    align-items: center;
  `,

  medium: css`
    width: 30vw;
    height: auto;
    flex-direction: column;
    transition: box-shadow 1s;

    &:hover {
      box-shadow: 0 0 30px 2px var(--hover-1);
      transition: box-shadow 0.5s;
    }
  `,
};

const Form = styled.form`
  border-radius: 15px;
  padding: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: var(--color-main);
  box-shadow: -5px 10px 2rem #e2dfd2;

  ${(props) => sizes[props.size]}
`;

Form.defaultProps = {
  size: "medium",
};

export default Form;
