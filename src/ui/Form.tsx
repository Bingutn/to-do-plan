import styled, { css } from "styled-components";
import { device } from "./MediaSize";

interface FormProps {
  size?: "small" | "medium";
}

const sizes = {
  small: css`
    width: 60%;
    height: 15%;
    align-items: center;

    @media ${device.tablet} {
      width: 100%;
      height: 20%;
      gap: 10px;
      padding: 1em;
    }

    @media ${device.mobile} {
      width: 100%;
      height: 30%;
      gap: 10px;
      padding: 15px;
    }
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

    @media ${device.tablet} {
      width: 80%;
      height: 60%;
      gap: 50px;
      padding: 1.5em;
    }

    @media ${device.mobile} {
      width: 90%;
      height: 50%;
      box-shadow: -2px 5px 1rem #e2dfd2;
      gap: 20px;
      padding: 20px;
    }
  `,
};

const Form = styled.form<FormProps>`
  border-radius: 15px;
  padding: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: var(--color-main);
  box-shadow: -5px 10px 2rem #e2dfd2;

  ${(props) => sizes[props.size || "small"]}
`;

Form.defaultProps = {
  size: "medium",
};

export default Form;
