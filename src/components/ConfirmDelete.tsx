import styled from "styled-components";
import Button from "../ui/Button";

const StyledConfirmDeleteBox = styled.div`
  width: 100%;
  height: 110%;
  background-color: var(--bg-submit);
  color: var(--color-submit);
  display: grid;
  justify-items: center;
  align-content: center;

  border-radius: 15px;
`;

const StyledBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5rem;
  margin: 1rem;
`;

export default function ConfirmDelete({ onConfirmDelete, onCancelDelete }) {
  return (
    <StyledConfirmDeleteBox>
      <p>Are you sure to delete?</p>
      <StyledBox>
        <Button onClick={onCancelDelete} size="small">
          Cancel
        </Button>
        <Button onClick={onConfirmDelete} size="small">
          Confirm
        </Button>
      </StyledBox>
    </StyledConfirmDeleteBox>
  );
}
