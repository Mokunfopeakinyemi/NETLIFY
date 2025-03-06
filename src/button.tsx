import { useState } from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    fontFamily: "Be Vietnam Pro, sans-serif", // Ensures font rendering
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: "15.25px",
    color: "white",
    width: "423.58px", // Button width
    height: "56px", // Button height
    backgroundColor: "#2e2e2e",
    borderRadius: "12px",
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
