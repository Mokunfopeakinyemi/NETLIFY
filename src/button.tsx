import { useState } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    fontFamily: "Be Vietnam Pro, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: "15.25px",
    color: "white",
    width: "423.58px",
    height: "56px",
    backgroundColor: disabled ? "#a0a0a0" : "#2e2e2e", // Disabled style
    borderRadius: "12px",
    border: "none",
    textDecoration: "none",
    opacity: isHovered && !disabled ? 0.8 : 1,
    transition: "opacity 0.3s",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
