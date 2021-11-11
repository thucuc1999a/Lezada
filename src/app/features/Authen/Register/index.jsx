import React from "react";
//import PropTypes from 'prop-types';
import RegisterForm from "./../RegisterForm";
import { registers } from "./../userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

Register.propTypes = {};

function Register(props) {
 const dispatch = useDispatch();
  const handleSubmitRegister = async (values) => {
    try {
      //auto username = email 
      values.username = values.email;
      const action = registers(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('New user: ', user);
 
 
      
    } catch (error) {
      console.log('Fail to register',error);
      
    }
    
  };
  return (
    <div className="grid wide form">
      <RegisterForm onSubmit={()=>handleSubmitRegister()} />
    </div>
  );
}

export default Register;
