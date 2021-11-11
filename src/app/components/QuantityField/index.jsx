import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
////import { FormHelperText } from '@material-ui/core';
import { Controller } from "react-hook-form";
import {
  FormControl,
  Box,
  IconButton,
 
} from "@material-ui/core";
//import AddCircle from '@material-ui/icons/AddCircle';
//import RemoveIcon from '@material-ui/icons/RemoveIcon';
//import OutlinedInput from "@material-ui/core/OutlinedInput";
import "./style.scss";
QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, disabled , label} = props;
  const {setValue } = form;
 // const hasError = !!errors[name];

  return (
    <FormControl >
    
    <Controller
    label={label}
    
    
      control={form.control}
      name={name}
      disabled={disabled}
      rules={{ required: true }}
    
      render={({ field: { onChange, onBlur, value, name, label } }) => (
        <Box  style={{textAlign:"center"}}>
          <IconButton
            onClick={() => setValue(name,  Number.parseInt(value) ? Number.parseInt(value)- 1 :1)}
          >
            -
          </IconButton>
          <TextField id="standard-basic" 
          
          
          
          label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
           name={name}
            type="number"
            onwheel="this.blur()"
           style={{justifyContent:"center"}}
          />
          <IconButton
            onClick={() => setValue(name,Number.parseInt(value) ? Number.parseInt(value)+1 :1)}
          >
            +
          </IconButton>
        </Box>
      )}
    />
    
    </FormControl>
  );
}

export default QuantityField;
