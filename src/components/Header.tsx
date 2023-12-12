import styled from "styled-components";

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
  z-index: 10;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>To do plan</h1>
    </StyledHeader>
  );
}
