import React from 'react';
import RegisterForm  from './../RegisterForm';
Register.propTypes = {
    
};

function Register(props) {
    const handleSubmitForm=(formValues)=>{
  
        console.log('Form submit',formValues)
      }
    return (
        <div>
    
        <RegisterForm onSubmit={handleSubmitForm}/>
            
        </div>
    );
}

export default Register;