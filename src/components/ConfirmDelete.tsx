import styled from "styled-components";
import Button from "../ui/Button";

const StyledConfirmDeleteBox = styled.div`
  width: 100%;
  height: auto;
  background-color: aqua;
  color: brown;
  display: grid;
  justify-items: center;
  padding: 1rem;
`;

const StyledBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin: 2rem;
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
