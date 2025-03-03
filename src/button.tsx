import { Link } from "react-router-dom";
import { useState } from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    fontFamily: "Be Vietnam Pro",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: "15.25px",
    color: "white",
    width: 423,
    height: 56,
    backgroundColor: "#2e2e2e",
    borderRadius: 12,
    border: "none",
    textDecoration: "none",
    opacity: isHovered ? 0.8 : 1,
    transition: "opacity 1.5s",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;
