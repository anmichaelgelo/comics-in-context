import React, { useContext } from "react";
import StylesContext from "./StylesContext";

export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <>
      <button style={buttonStyling}>Click Here!</button>
    </>
  );
}
