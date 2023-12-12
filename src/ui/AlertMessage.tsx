import styled, { css } from "styled-components";

const variations = {
  success: css`
    border: 2px solid #72ef40;
    text-align: center;

    &::before {
      content: "✅";
      font-size: large;
      margin-right: 8px;
    }
  `,

  warning: css`
    border: 2px solid #ef4040;
    text-align: center;

    &::before {
      content: "⚠️";
      font-size: large;
      margin-right: 8px;
    }
  `,
};

const AlertMessage = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 15px 55px;
  z-index: 11;

  background: transparent;
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  position: fixed;
  margin-top: 100px;
  min-width: fit-content;

  ${(props) => variations[props.variation]}
`;

AlertMessage.defaultProps = {
  variation: "warning",
};

export default AlertMessage;
