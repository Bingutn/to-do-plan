import { useState } from "react";
import StyledInput from "../ui/Input";
import StyledButton from "../ui/Button";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export default function EditTodo({ todo, onUpdate, setEdit }) {
  const { id, plan, planDate } = todo;

  const [updatedPlan, setUpdatedPlan] = useState(plan);
  const [updatedDate, setUpdatedDate] = useState(planDate);
  const [checked, setChecked] = useState(false);

  function handleUpdate() {
    onUpdate(id, updatedPlan, updatedDate);
    setEdit(false);
    setChecked(false);
  }

  return (
    <>
      <StyledInput
        type="text"
        name="plan"
        value={updatedPlan}
        defaultValue={plan}
        onChange={(e) => setUpdatedPlan(e.target.value)}
      />

      {checked ? (
        <StyledInput
          name="date"
          type="date"
          value={updatedDate}
          defaultValue={planDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
        />
      ) : (
        <StyledBox>
          {planDate}
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkDate"
              onChange={(e) => setChecked(e.target.checked)}
              checked={checked}
            />
            <p>Change date</p>
          </StyledLabel>
        </StyledBox>
      )}
      <StyledButton variation="primary" onClick={handleUpdate}>
        Submit
      </StyledButton>
      <StyledButton variation="danger" onClick={() => setEdit(false)}>
        Cancel
      </StyledButton>
    </>
  );
}
