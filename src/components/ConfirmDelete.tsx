import styled from "styled-components";
import Button from "../ui/Button";
import { IConfirmDelete } from "../types/interfaces";
import { device } from "../ui/MediaSize";

const StyledConfirmDeleteBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--bg-submit);
  color: var(--color-submit);
  display: grid;
  justify-items: center;
  align-content: center;

  box-shadow: 0 5px 8px #e2dfd2;
  border-radius: 15px;

  @media ${device.mobile} {
    width: 100%;
    height: 80%;
    display: grid;
    gap: 5px;
    justify-content: space-evenly;
    align-items: center;
  }
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

export default function ConfirmDelete({
  onConfirmDelete,
  onCancelDelete,
}: IConfirmDelete) {
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
