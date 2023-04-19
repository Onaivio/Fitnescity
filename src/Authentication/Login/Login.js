import React, { useEffect } from 'react';
import logo from '../../Images/fitnexcity.png';
import LoginForm from "./LoginForm";
import store from '../../redux/store';
import { login } from '../../redux/actions/app';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';







const Login = () => {



    return (

        <div className="body-bg w-full h-screen flex justify-center items-center">
            <div className="w-3/12 flex flex-col justify-center items-center">



                <img src={logo} alt="" className="" />


                <div className="bg-white rounded-lg mt-4 p-6 w-full">
                    <LoginForm />
                </div>

            </div>



        </div>

    )

}
export default Login;