import React from "react";
import "./heading.scss";
export interface HeadingProps {
  bg: "string";
  color: "string";
  text: "string";
  boda: "string";
  display: "string";
}
export const Heading = (props: HeadingProps) => {
  const { bg, color, text, boda, display } = props;
  return (
    <>
      <button
        style={{ backgroundColor: bg, color: color, border: boda }}
        className={`heading ${display}`}
      >
        {text}
      </button>
    </>
  );
};
