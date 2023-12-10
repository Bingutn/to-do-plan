import { useState } from "react";
import StyledInput from "../ui/Input";
import StyledButton from "../ui/Button";

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
        <>
          {planDate}
          <label>
            <StyledInput
              type="checkbox"
              name="checkDate"
              onChange={(e) => setChecked(e.target.checked)}
              checked={checked}
            />
            Change date
          </label>
        </>
      )}
      <StyledButton variation="secondary" onClick={handleUpdate}>
        Submit
      </StyledButton>
      <StyledButton variation="danger" onClick={() => setEdit(false)}>
        Cancel
      </StyledButton>
    </>
  );
}
