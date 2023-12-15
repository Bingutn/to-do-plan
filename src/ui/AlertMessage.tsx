import styled, { css } from "styled-components";
import { device } from "./MediaSize";

const variations = {
  success: css`
    border: 2px solid #72ef40;
    text-align: center;

    &::before {
      content: "✅";
    }
  `,

  warning: css`
    border: 2px solid #ef4040;
    text-align: center;

    &::before {
      content: "⚠️";
    }
  `,
};

const AlertMessage = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  padding: 15px 55px;
  z-index: 11;

  background: transparent;
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  position: fixed;
  margin-top: 80px;
  min-width: fit-content;

  ${(props) => variations[props.variation]}

  &::before {
    margin-right: 8px;
  }

  @media ${device.mobile} {
    width: auto;
    font-size: x-small;
    padding: 2px 5px;
    margin-top: 40px;
    background-color: #fafafa;
  }
`;

AlertMessage.defaultProps = {
  variation: "warning",
};

export default AlertMessage;
