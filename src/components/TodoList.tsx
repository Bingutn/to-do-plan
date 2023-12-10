import styled from "styled-components";
import Display from "./Display";
import { useState } from "react";
import { ITodo } from "../types/interfaces";
import { generateId } from "../utils/generateId";
import formatDate from "../utils/formatDate";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Form from "../ui/Form";
import ConfirmDelete from "./ConfirmDelete";

const StyledTodoList = styled.ul`
  width: 80%;
  height: 60%;
  border: none;
  display: block;
  overflow-y: scroll;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: center;
`;

export default function TodoList() {
  const [planInput, setPlanInput] = useState<string>("");
  const [dateInput, setDateInput] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // const [confirmDelete, setConfirmDelete] = useState(false);

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

    if (!planInput) return window.alert("Please fill your plan");
    if (!dateInput) return window.alert("Please select your date plan");

    setTodoList([...todoList, newTodo]);

    setPlanInput("");
    setDateInput("");
    setIsCompleted(false);
  }

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
  }

  function deleteTodo(id: string) {
    const deleteId = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleteId);
  }

  return (
    <>
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
            />
          ))}
        </StyledTodoList>
      ) : (
        ""
      )}
    </>
  );
}
