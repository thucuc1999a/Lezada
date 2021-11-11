import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from './../../../components/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@material-ui/core/Button';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string()
    .required('Please fill the textfield'),
    
  });
  const form = useForm({ 
    defaultValues: {
      title: '',
      title1: '',
      title2: '',
      title3: '',

     
    },
    resolver: yupResolver(schema)
  });
  const handleSubmit = (value) => {
    const {onSubmit} = props;
    if (onSubmit){
      onSubmit(value);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
     register
   
      <InputField name="title" label="tên"  form ={form}/>
      <InputField name="title1" label="tên"  form ={form}/>
      <InputField name="title2" label="tên"  form ={form}/>
      <InputField name="title3" label="tên"  form ={form}/>

     <button type="submit"> login</button>
    </form>
  );
}

export default TodoForm;
