import React from 'react'

import { Link } from "react-router-dom";

function ForgotPasswordForm() {
    return (
        <>
            <form name="login-form">

                <div className="flex flex-col text-center mb-4 -gap-4">
                    <p className='p-color  text-base font-medium'>Forgot your password?</p>
                    <p className='p-color  text-xx font-medium'>Enter your email and we’ll send a link to reset your password.</p>
                </div>



                <div className="flex flex-col gap-1 mb-4 ">
                    <label className="p-color font-medium text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"

                        className="border border-gray-500 p-2 rounded-md placeholder:text-xs"
                        autoComplete='new-off'

                    />
                </div>







                <button
                    color="success"

                    className="button-bg p-2 mt-4 w-full text-white rounded-md text-sm mb-6"
                >


                    Reset Password
                </button>




                <div className="mt-4 flex w-full justify-center">
                    <Link to='/'>Return to Login</Link>

                </div>


            </form>
        </>
    )
}

export default ForgotPasswordForm;
