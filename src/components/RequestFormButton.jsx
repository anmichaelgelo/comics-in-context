import React, { useContext } from "react";
import StylesContext from "./StyleContext";

export default function RequestFormButton() {
    const buttonStyling = React.useContext(StylesContext)

    return (
        <>
            <button style={buttonStyling}>Click Here!</button>
            <input type="submit" value="Submit" />
        </>
    );
}
