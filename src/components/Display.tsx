import styled from "styled-components";
import { IDisplayProps } from "../types/interfaces";
import { useState } from "react";
import formatDate from "../utils/formatDate";
import EditTodo from "./EditTodo";
import ConfirmDelete from "./ConfirmDelete";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { device } from "../ui/MediaSize";

const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 5vw 15vw 15vw 20vw;
  gap: 4rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  border-radius: 15px;
  box-shadow: 0 5px 8px #e2dfd2;
  background-color: var(--color-main);

  @media ${device.tablet} {
    width: 100%;
    height: 55%;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
  }
`;

const BackCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: grid;
  /* grid-template-columns: 20vw 15vw 20vw; */
  gap: 5rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  border-radius: 15px;
  box-shadow: 0 5px 8px black;

  background-color: var(--color-text);
  color: var(--color-main);

  transform: rotateY(180deg);

  @media ${device.tablet} {
    width: 100%;
    height: 55%;
  }

  @media ${device.mobile} {
    font-size: x-small;
    box-shadow: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
  }
`;

const StyledTodo = styled.li`
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 5px 8px #e2dfd2;

  text-align: center;
  margin: 3rem 0;

  position: relative;
  transform-style: preserve-3d;

  @media ${device.tablet} {
    font-size: small;
    box-shadow: none;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: 12px 0;
    box-shadow: 0 5px 8px #e2dfd2;
  }

  @media ${device.mobile} {
    font-size: x-small;
    box-shadow: none;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin: 13px 0;
    box-shadow: 0 5px 8px #e2dfd2;
  }
`;

const StyledButton = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  gap: 10px;
  display: flex;
  text-align: center;

  @media ${device.tablet} {
    width: 100%;
    height: 80%;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 80%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
`;

export default function Display({
  todo,

  onComplete,
  onUpdate,
  onDelete,

  setAlertNotice,
  setSuccessNotice,
}: IDisplayProps) {
  const { id, plan, planDate, completed } = todo;

  const [edit, setEdit] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleToggleEdit() {
    setEdit(!edit);
  }

  function handleToggleDelete() {
    setConfirmDelete(true);
  }

  function handleDeleteTodo() {
    onDelete(id);
    setSuccessNotice("Successfully to delete plan!");
    setConfirmDelete(false);
  }

  return (
    <StyledTodo
      style={{
        textDecoration: completed ? "line-through" : "",
        color: completed ? "#acacac" : "",
        transform: edit ? "rotateY(180deg)" : "",
        transition: edit ? "transform 1.2s" : "transform 1.6s",
      }}
    >
      {edit ? (
        <BackCard>
          <EditTodo
            onUpdate={onUpdate}
            todo={todo}
            setEdit={setEdit}
            setAlertNotice={setAlertNotice}
          />
        </BackCard>
      ) : (
        <>
          {confirmDelete ? (
            <ConfirmDelete
              onConfirmDelete={handleDeleteTodo}
              onCancelDelete={() => setConfirmDelete(false)}
            />
          ) : (
            <FrontCard>
              <span>
                <Input
                  type="checkbox"
                  onClick={() => onComplete(id)}
                  title="complete ?"
                />
              </span>
              <p style={{ wordBreak: "break-word" }}>{plan}</p>
              <p>{formatDate(planDate)}</p>

              {!completed && (
                <StyledButton>
                  <Button onClick={handleToggleEdit}>Update</Button>
                  <Button onClick={handleToggleDelete} variation="danger">
                    Delete
                  </Button>
                </StyledButton>
              )}
            </FrontCard>
          )}
        </>
      )}
    </StyledTodo>
  );
}
