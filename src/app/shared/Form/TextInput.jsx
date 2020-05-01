import React from "react";
import { TextField } from "formik-material-ui";

const TextInput = ({ children, ...otherProps }) => {
  return <TextField {...otherProps}>{children}</TextField>;
};

TextInput.defaultProps = {
  variant: "outlined",
};

export default TextInput;
