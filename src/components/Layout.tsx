import styled from "styled-components";
import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";
import AlertMessage from "../ui/AlertMessage";
import { device } from "../ui/MediaSize";

const StyledLayout = styled.div`
  width: 100svw;
  height: 100svh;
  background-color: #f8f8ff;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
    height: 100svh;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 91svh;
  }
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

      <TodoList setAlertNotice={warningAlert} setSuccessNotice={successAlert} />
    </StyledLayout>
  );
}
