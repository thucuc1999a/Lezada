import React from 'react';
//import PropTypes from 'prop-types';
import Register from './../Authen/Register'
import RegisterForm from './RegisterForm';
Authen.propTypes = {
    
};

function Authen(props) {
    return (
        <div className="container">
        <div className="sidebar">
        <div className="Breadcrumb">
        </div>
        <div className=" grid wide content">
        <div className="row form ">
        <div className="col l-6 form__login">
        this is login form
        
        </div>
        <div className="col l-6 form__register" style={{padding:"60px 50px"}}>
        <RegisterForm > </RegisterForm>
        </div>
        
        </div>
        </div>
        
        </div>
            
        </div>
    );
}

export default Authen;