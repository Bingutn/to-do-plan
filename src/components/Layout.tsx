import styled from "styled-components";
import Header from "./Header";
import TodoList from "./TodoList";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8ff;
  position: fixed;
  display: flex;
  justify-content: center;
`;

const StyledContentBox = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 8vh;
  justify-content: space-around;
`;

export default function Layout() {
  return (
    <StyledLayout>
      <Header />
      <StyledContentBox>
        <TodoList />
      </StyledContentBox>
    </StyledLayout>
  );
}
