import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CircularProgress from '@mui/material/CircularProgress';
import "./style.scss";
import { registers } from "./../userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit"; 

const SignupSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  retypePassword: yup.string().required().oneOf([yup.ref('password')],'Not match')
});

function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    form,
    handleSubmit,
   
    formState: { errors, isSubmitting}
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit =(values) => {
    console.log('Form value',values);

   
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}  method="POST" >
      <div className="container">
      <div className="title">
      <h3  className="title__heading">Register</h3>
     
      <p className="title__desc">If you don't have an account, register now!</p>
      </div>
      
      <div className="form">
     
        <label className="form__label">Full Name (*)</label>
        <br/>
        <input className="form__input" {...register("fullName")} />
        {errors.firstName && <p className="error">FirstName is required</p>}
      </div>
      
      <div className="form">
        <label className="form__label">Email (*)</label> <br/>
        <input  className="form__input"  {...register("email")} />
        {errors.email && <p className="error">Email is required</p>}
      </div>
      <div className="form">
        <label className="form__label">Password (*)</label> <br/>
        <input className="form__input" type="password" {...register("password")} />
        {errors.password && <p className="error">Password is required</p>}
      </div>
      <div className="form">
      <label className="form__label">Retype Password (*)</label> <br/>
      <input className="form__input" type="password" {...register("retypePassword")} />
      {errors.retypePassword && <p className="error">Password not match</p>}
    </div>
      <div className="btn">
     
      <button  className="btn__submit" type="submit" >Register</button>
      {isSubmitting && <CircularProgress/> } 
      
    
      </div>
      </div>
    </form>
  );
}

export default RegisterForm;
