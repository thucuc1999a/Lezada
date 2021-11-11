import React from 'react';
import PropTypes from 'prop-types';
//import InputField from './InputField';
import InputField from './../../../components/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './style.scss';
import Button from '@mui/material/Button';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func
  
};

function RegisterForm(props) {
  const schema=yup.object().shape({});
  const form = useForm({
    defaultValues:{ 
      firstName: '',
      lastName:'',
      email:'',
      passWord:'',
      retypePassword:'',
      
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit =(values) => {
   const {onSubmit}=props;
   if (onSubmit){
     onSubmit(values);
     console.log('form values:',values);
   }
   form.reset();
  };
  return (
    <div className="container">
      <h2>LOGIN</h2>
      <p>Great to have you back!</p>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="firstName"   label="First Name" form={form}/>
      <InputField name="lastName" label="Last Name" form={form}/>
      <InputField name="email" label="Email" form={form}/>
      <InputField name="passWord" label="PassWord" form={form}/>
      <InputField name="retypePassword" label="Retype PassWord" form={form}/>
      </form>
      <Button type="submit"  className="btn_buy"> 
      Register
    </Button>
    </div>
  );
}

export default RegisterForm;