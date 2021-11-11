import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
//import { FormHelperText } from '@material-ui/core';
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  
};

function InputField(props) {
  const { form, name, disabled } = props;

const {errors,formState}= form;
 const hasError = formState.errors[name];
  return (
    <div className="container">
    <Controller
    control={form.control}
    
    rules={{
     required: true,
    }}
    name={name}
    disabled={disabled}
    render={({ field}) => (
      <TextField
      {...field}
      fullWidth
     
    
      error ={!!hasError}
      helperText={errors ?.massage}
    
     
      
      />
     
     
    )}
  

    
  />
  
  </div>
  );
}

export default InputField;
