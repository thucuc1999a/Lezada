import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
//import { FormHelperText } from '@material-ui/core';
import { Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
//import FormHelperText from "@mui/material/FormHelperText";
//import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, placeholder, disabled } = props;
  const [showPw, setShowPw] = useState(false);
  const toggleShowPassword = () => {
    setShowPw((x) => !x);
  };
  return (
    <Controller
      placeholder={placeholder}
      control={form.control}
      name={name}
      disabled={disabled}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          placeholder={placeholder}
          type={showPw ? "text" : "password"}
          disabled={disabled}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPw ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }

          //error = {!!hasErorrs}
          //helperTex={errors[name]?.massage}
        />
      )}
    />
  );
}

export default PasswordField;
