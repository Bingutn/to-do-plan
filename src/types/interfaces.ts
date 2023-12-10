import { MouseEventHandler, ReactNode } from "react";

export interface ITodo {
  id: string;
  plan: string;
  planDate: string;
  completed: boolean;
}

export interface DisplayProps {
  todo: ITodo;
  onComplete: (id: string) => void;
  onUpdate: (id: string, updatedPlan: string, updatedDate: string) => void;
  onDelete: (id: string) => void;
}

export interface ParentProps {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean | undefined;
}
