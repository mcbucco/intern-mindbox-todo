import { ReactNode } from "react";

type TButtonUIProps = {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const ButtonUI: React.FC<TButtonUIProps> = ({
  id,
  children,
  disabled,
  className,
  onClick,
  type,
}) => {
  const buttonType = type ?? "button";
  const isDisabled = disabled ?? false;
  return (
    <button
      id={id}
      disabled={isDisabled}
      onClick={(onClick)}
      type={buttonType}
      className={className}
    >
      {children}
    </button>
  );
};

export default ButtonUI;
