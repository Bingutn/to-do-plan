import styled from "styled-components";
import { device } from "../ui/MediaSize";

const StyledHeader = styled.div`
  width: 80%;
  height: 7rem;
  border-radius: 50px;
  background-color: var(--color-main);
  color: var(--hover-1);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 7px 2rem #e2dfd2;
  font-size: 20px;
  z-index: 10;

  @media ${device.mobile} {
    width: 100%;
    height: 3rem;
    font-size: x-small;
    box-shadow: 0 4px 1rem #e2dfd2;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>To do plan</h1>
    </StyledHeader>
  );
}
