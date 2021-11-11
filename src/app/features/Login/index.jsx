import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
LoginFormFeature.propTypes = {
    
};
const handleSubmitLogin =(formValues)=>{
  
    console.log('Form submit',formValues)
  }

function LoginFormFeature(props) {
    return (
        <div>
        <LoginForm onSubmit={ handleSubmitLogin}>  </LoginForm>
            
        </div>
    );
}

export default LoginFormFeature;