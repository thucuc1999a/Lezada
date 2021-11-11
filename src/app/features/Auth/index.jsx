import React from 'react';
import RegisterForm from './RegisterForm';

Auth.propTypes = {
    
};

function Auth(props) {
    const handleSubmitForm=(formValues)=>{
  
    console.log('Form submit',formValues)
  }
   
    return (
        <div className="grid wide auth">
        <div className="row auth__form">
        <div className="col l-6 auth__form--login">
        this is login form
        </div>
        <div className="col l-6 auth__form--register">
        <RegisterForm onSubmit={handleSubmitForm}/>
        </div>
        
        </div>

           
        </div>
    );
}

export default Auth;