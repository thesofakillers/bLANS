import React from "react";

const buttonSytles = [
  "cursor-pointer",
  "p-2",
  "rounded-md",
  "hover:brightness-105",
  "transition",
  "ease-in-out",
  "focus:scale-90",
];

function Button(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      className={[
        ...buttonSytles,
        props.color,
        props.bgColor,
        props.position,
      ].join(" ")}
      onClick={(e) => e.currentTarget.blur()}
    />
  );
}

Button.defaultProps = {
  type: "submit",
  // color: ["bg-ans-yellow"],
  position: undefined,
};

export default Button;
