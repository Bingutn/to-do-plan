import styled, { css } from "styled-components";
import { DisplayProps } from "../types/interfaces";
import { useState } from "react";
import formatDate from "../utils/formatDate";
import EditTodo from "./EditTodo";
import ConfirmDelete from "./ConfirmDelete";
import Input from "../ui/Input";
import Button from "../ui/Button";

const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 5vw 15vw 15vw 11vw 11vw;
  gap: 4rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  border-radius: 15px;
  box-shadow: 0 5px 8px #e2dfd2;

  background-color: var(--color-main);
`;

const BackCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  gap: 5rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  border-radius: 15px;
  box-shadow: 0 5px 8px black;

  background-color: var(--color-text);

  transform: rotateY(180deg);
`;

const StyledTodo = styled.li`
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 5px 8px #e2dfd2;

  text-align: center;
  margin: 3rem 0;
  background-color: blue;

  position: relative;
  transform-style: preserve-3d;
`;

export default function Display({
  todo,

  onComplete,
  onUpdate,
  onDelete,
}: DisplayProps) {
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
          <EditTodo onUpdate={onUpdate} todo={todo} setEdit={setEdit} />
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
                <Input type="checkbox" onClick={() => onComplete(id)} />
              </span>
              <p>{plan}</p>
              <p>{formatDate(planDate)}</p>

              {!completed && (
                <>
                  <Button onClick={handleToggleEdit}>Update</Button>
                  <Button onClick={handleToggleDelete} variation="danger">
                    Delete
                  </Button>
                </>
              )}
            </FrontCard>
          )}
        </>
      )}
    </StyledTodo>
  );
}
