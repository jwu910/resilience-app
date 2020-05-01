// base form
// add validated form fields as components
// base wrapped in Formik
// accept callback for onSubmit
// import Checkbox from './Checkbox';
// import DateInput from './DateInput';
import clsx from "clsx";
// import Input from './Input';
import Label from "./Label";
// import PasswordInput from './PasswordInput';
// import RadioGroup from './RadioGroup';
import React from "react";
// import SearchableSelect from './SearchableSelect';
// import Select from './Select';
// import ToggleSwitch from './ToggleSwitch';
// import { LinearProgress } from "@material-ui/core";
import { Field, Formik } from "formik";
import { PropTypes } from "prop-types";
import TextInput from "./TextInput";

const FormGroup = (props) => {
  const classes = clsx("form-group", props.className, {});

  return (
    <div style={{ marginTop: 4, marginBottom: 24 }} className={classes}>
      {props.children}
    </div>
  );
};

class FormGroupItem extends React.Component {
  static propTypes = {
    label: PropTypes.bool,
    labelSpacer: PropTypes.bool,
    shrink: PropTypes.bool,
  };

  render() {
    const { children, className, label, labelSpacer, shrink } = this.props;

    const classes = clsx("form-group-item", className, {
      "form-group-item-label": label,
      "form-group-item-label-spacer": labelSpacer,
      "form-group-item-shrink": shrink,
    });

    return <div className={classes}>{children}</div>;
  }
}

/**
 * Wrap a form component with the Formik Field component.
 * @param {Component} FormComponent
 */
export const withField = (FormComponent) =>
  React.forwardRef(({ name, ...otherParams }, ref) => {
    const innerRef = ref ? { innerRef: ref } : {};

    return <Field {...otherParams} {...innerRef} component={FormComponent} name={name} />;
  });

const Form = Formik;

Form.FormContainer = ({ className, ...otherProps }) => (
  <form className={clsx("form-root", className)} {...otherProps} />
);

// Form.DateInput = withField(DateInput);
Form.Group = FormGroup;
Form.GroupItem = FormGroupItem;
Form.TextInput = withField(TextInput);
Form.Label = Label;

export default Form;
