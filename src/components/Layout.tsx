import styled from "styled-components";
import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";
import AlertMessage from "../ui/AlertMessage";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8ff;
  /* position: fixed;
  display: flex;
  justify-content: center; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContentBox = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  /* position: fixed; */
  /* top: 15vh; */
`;

export default function Layout() {
  const [alertNotice, setAlertNotice] = useState("");
  const [successNotice, setSuccessNotice] = useState("");

  function warningAlert(word: string) {
    setAlertNotice(word);

    setTimeout(() => {
      setAlertNotice("");
    }, 3000);
  }

  function successAlert(word: string) {
    setSuccessNotice(word);

    setTimeout(() => {
      setSuccessNotice("");
    }, 3000);
  }

  return (
    <StyledLayout>
      <Header />

      {alertNotice && <AlertMessage>{alertNotice}</AlertMessage>}
      {successNotice && (
        <AlertMessage variation="success">{successNotice}</AlertMessage>
      )}

      <StyledContentBox>
        <TodoList
          setAlertNotice={warningAlert}
          setSuccessNotice={successAlert}
        />
      </StyledContentBox>
    </StyledLayout>
  );
}
