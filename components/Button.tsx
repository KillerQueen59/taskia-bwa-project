import React from "react";
import classNames from "clsx";

type ButtonProps = {
  label: string;
  color?: "primary" | "danger"; // Only primary and danger colors
  type?: "fill" | "outline"; // Define the button types
  onClick?: () => void;
  fullWidth?: boolean; // Add a prop to control full width
};

export const Button: React.FC<ButtonProps> = ({
  label,
  color = "primary", // Default color is 'primary'
  type = "fill", // Default type is 'fill'
  onClick,
  fullWidth = false,
}) => {
  const buttonClass = classNames(
    "px-5 py-3 rounded-[50px] text-base font-semibold transition-colors duration-300",
    {
      "w-full": fullWidth, // Add w-full class if fullWidth is true
      "bg-gradient-to-b from-purple-start to-purple-end text-white-100":
        color === "primary" && type === "fill",
      "bg-danger text-white-100": color === "danger" && type === "fill",
      "border border-primary text-primary":
        color === "primary" && type === "outline",
      "border border-danger text-danger":
        color === "danger" && type === "outline",
      "hover:bg-opacity-80 hover:text-white-100": type === "fill", // Hover effect for filled buttons
      "hover:bg-primary hover:text-white-100":
        type === "outline" && color === "primary",
      "hover:bg-danger hover:text-white-100":
        type === "outline" && color === "danger",
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};
