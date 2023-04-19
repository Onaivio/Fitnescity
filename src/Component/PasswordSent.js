import React from 'react'

import logo from '../Images/fitnexcity.png';
import { Link } from "react-router-dom";


function PasswordSent() {
    return (
        <div className='body-bg w-full h-screen flex flex-col justify-center items-center'>
            <img src={logo} alt="" className="" />


            <div className="flex flex-col w-3/12 justify-center items-center bg-white rounded-lg p-6 mt-4">

                <p className='font-medium text-base mt-12'>Sent!</p>

                <div className=" text-center mb-12">
                    <p className='mt-2 font-medium text-xs'>Check your email (and your spam folder!)</p>
                    <p className='text-blue-400 mt-4'>Didn’t get an email? Resend. </p>
                    <Link className="text-blue-400  text-sm font-regular" exact to="/login"> Return to Login</Link>

                </div>

            </div>


        </div>

    )
}

export default PasswordSent