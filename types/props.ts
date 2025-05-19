export interface IButtonProps {
  readonly label: string;
  readonly onClick: () => void;
  readonly type?: "submit" | "button" | "reset";
  readonly disabled?: boolean;
}
