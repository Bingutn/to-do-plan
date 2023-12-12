import { useState } from "react";
import StyledInput from "../ui/Input";
import StyledButton from "../ui/Button";
import styled from "styled-components";
import formatDate from "../utils/formatDate";

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

export default function EditTodo({ todo, onUpdate, setEdit, setAlertNotice }) {
  const { id, plan, planDate } = todo;

  const thePlanDate = formatDate(planDate);

  const [updatedPlan, setUpdatedPlan] = useState(plan);
  const [updatedDate, setUpdatedDate] = useState(thePlanDate);
  const [checked, setChecked] = useState(false);

  function handleUpdate() {
    if (!updatedPlan) return setAlertNotice("Please update your plan");
    if (!updatedDate) return setAlertNotice("Please provide a new date plan");

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
        onChange={(e) => setUpdatedPlan(e.target.value)}
        onFocus={() => setUpdatedPlan("")}
        title="if click, the current plan will be cleared"
      />

      {checked ? (
        <StyledInput
          name="date"
          type="date"
          value={updatedDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
          required
        />
      ) : (
        <StyledBox>
          {thePlanDate}
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkDate"
              onChange={(e) => setChecked(e.target.checked)}
              onClick={() => setUpdatedDate("")}
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
