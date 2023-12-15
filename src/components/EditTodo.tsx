import { useState } from "react";
import StyledInput from "../ui/Input";
import styled from "styled-components";
import formatDate from "../utils/formatDate";
import Button from "../ui/Button";
import { IEditProps } from "../types/interfaces";
import { device } from "../ui/MediaSize";

const StyledButton = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  gap: 10px;
  display: flex;
  text-align: center;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 15vw 20vw;
  gap: 1em;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5px;
    gap: 10px;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export default function EditTodo({
  todo,
  onUpdate,
  setEdit,
  setAlertNotice,
}: IEditProps) {
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
    <StyledBox>
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
        <StyledLabel>
          {thePlanDate}
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkDate"
              onChange={(e) => setChecked(e.target.checked)}
              onClick={() => setUpdatedDate("")}
              style={{ width: "30%", height: "20%" }}
            />
            <p>Change date</p>
          </StyledLabel>
        </StyledLabel>
      )}
      <StyledButton>
        {(updatedPlan !== plan || checked) && (
          <Button variation="primary" onClick={handleUpdate}>
            Submit
          </Button>
        )}
        <Button variation="secondary" onClick={() => setEdit(false)}>
          Cancel
        </Button>
      </StyledButton>
    </StyledBox>
  );
}
