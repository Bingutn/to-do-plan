import styled from "styled-components";
import Display from "./Display";
import { useState } from "react";
import { ITodo, ITodoListProps } from "../types/interfaces";
import { generateId } from "../utils/generateId";
import formatDate from "../utils/formatDate";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { device } from "../ui/MediaSize";

const StyledPage = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    gap: 2em;
    padding: 20px;
    justify-content: center;
  }
`;

const StyledTodoList = styled.ul`
  width: 80%;
  height: 60%;
  border: none;
  display: block;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--shadow-1);
    border-radius: 5px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 80%;
  }
`;

export default function TodoList({
  setAlertNotice,
  setSuccessNotice,
}: ITodoListProps) {
  const [planInput, setPlanInput] = useState<string>("");
  const [dateInput, setDateInput] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const hasTodo = todoList.length > 0;

  function handleSubmitTodo(e: React.FormEvent) {
    e.preventDefault();

    const id = generateId();

    const newTodo = {
      id,
      plan: planInput,
      planDate: dateInput,
      completed: isCompleted,
    };

    if (!planInput) return setAlertNotice("Please enter your plan");
    if (!dateInput) return setAlertNotice("Please select your date plan");

    setTodoList([...todoList, newTodo]);
    setSuccessNotice("Your new plan was added successfully!");

    setPlanInput("");
    setDateInput("");
    setIsCompleted(false);
  }

  // toggel todo checkbox to complete the plan

  function completePlan(id: string) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function updateTodo(id: string, updatedPlan: string, updatedDate: string) {
    const formatUpdatedDate = formatDate(updatedDate);
    const newUpdate = todoList.map((todo) =>
      todo.id === id
        ? { ...todo, plan: updatedPlan, planDate: formatUpdatedDate }
        : todo
    );
    setTodoList(newUpdate);
    setSuccessNotice("Updated your plan successfully!");
  }

  function deleteTodo(id: string) {
    const deleteId = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleteId);
  }

  return (
    <StyledPage>
      <Form onSubmit={handleSubmitTodo} size={hasTodo ? "small" : "medium"}>
        <Input
          type="text"
          placeholder="add your plan here"
          name="plan"
          value={planInput}
          onChange={(e) => setPlanInput(e.target.value)}
        />
        <Input
          name="date"
          type="date"
          value={dateInput}
          title="your plan date"
          onChange={(e) => setDateInput(e.target.value)}
        />
        <Button size={hasTodo ? "small" : "medium"}>Plan</Button>
      </Form>

      {hasTodo ? (
        <StyledTodoList>
          {todoList.map((todo) => (
            <Display
              todo={todo}
              key={todo.id}
              onComplete={completePlan}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
              setAlertNotice={setAlertNotice}
              setSuccessNotice={setSuccessNotice}
            />
          ))}
        </StyledTodoList>
      ) : (
        ""
      )}
    </StyledPage>
  );
}
