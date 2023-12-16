import { ReactNode } from "react";

export interface ITodo {
  id: string;
  plan: string;
  planDate: string;
  completed: boolean;
}

export interface ITodoListProps {
  setAlertNotice: (word: string) => void;
  setSuccessNotice: (word: string) => void;
}

export interface IDisplayProps {
  todo: ITodo;
  onComplete: (id: string) => void;
  onUpdate: (id: string, updatedPlan: string, updatedDate: string) => void;
  onDelete: (id: string) => void;
  setAlertNotice: (word: string) => void;
  setSuccessNotice: (word: string) => void;
}

export interface IEditProps {
  todo: ITodo;
  setEdit: (edit: boolean) => void;
  onUpdate: (id: string, updatedPlan: string, updatedDate: string) => void;
  setAlertNotice: (word: string) => void;
}

export interface IConfirmDelete {
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}

export interface IParentProps {
  children: ReactNode;
}

// export interface IButtonProps {
//   children: ReactNode;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   disabled?: boolean | undefined;
// }
