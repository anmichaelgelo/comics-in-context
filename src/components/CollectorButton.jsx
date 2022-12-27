import React, { useContext } from "react";
import StylesContext from "./StyleContext";

export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <>
      <button style={buttonStyling}>Click Here!</button>
    </>
  );
}
