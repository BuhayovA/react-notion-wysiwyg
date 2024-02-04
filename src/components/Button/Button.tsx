import React from "react";
import "./index.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-blue-400">{props.label}</button>;
};

export default Button;
