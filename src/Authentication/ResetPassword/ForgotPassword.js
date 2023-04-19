import React from 'react'

import { NavLink } from "react-router-dom";
import ForgotPasswordForm from "./ForgetPasswordForm";
import logo from '../../Images/fitnexcity.png';

function ForgotPassword() {
    return (
        <div className="body-bg w-full h-screen flex justify-center items-center">
            <div className="w-3/12 flex flex-col justify-center items-center">



                <img src={logo} alt="" className="" />


                <div className="bg-white rounded-lg mt-4 p-6 w-full">
                    <ForgotPasswordForm />
                </div>

            </div>



        </div>
    )
}

export default ForgotPassword
