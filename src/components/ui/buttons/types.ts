export type ButtonProps = {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  fullWidth?: boolean;
};
