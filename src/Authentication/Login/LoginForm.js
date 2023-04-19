import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../../_shared/components/ReduxFormFields/TextInput';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import Alert from "antd/es/alert";
import { Field, reduxForm } from 'redux-form';




const propTypes = {
    formLoading: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
    formLoading: false,
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Please enter your password';
    } else if (values.password.length < 6) {
        errors.password = 'Password should be 6+ characters';
    }
    return errors;
};


const LoginForm = (props) => {
    const {
        formLoading,
        handleSubmit,
        loginError,
        formData,
    } = props;

    const handleOnSubmit = (e, values) => {
        e.preventDefault();
        handleSubmit(values);
    };
    return (
        <>
            <form name="login-form"
                onSubmit={handleSubmit}>
                {(loginError && loginError.message) ? (
                    <Alert color="danger">{loginError.message}</Alert>
                ) : null}




                <div className="flex flex-col gap-1 mb-4">
                    <label className="p-color font-medium text-sm">
                        Email
                    </label>
                    <Field
                        type="email"
                        name="email"
                        disabled={formLoading}
                        component={InputField}
                        className="border border-gray-500 p-2 rounded-md placeholder:text-xs"
                        autoComplete='new-off'

                    />
                </div>

                <div className="mt-4 flex flex-col gap-1 mb-4">
                    <label
                        className="p-color font-medium text-sm"
                    >
                       
                        Password
                    </label>

                    <div className="flex items-center gap-2 p-2  border border-gray-500 rounded-md">
                        <Field
                            type="password"
                            name="password"
                            disabled={formLoading}
                            component={InputField}
                            className=" w-9/12  placeholder:text-xs border-r border-blue-900"

                        />
                       

                        <Link to='/'>Forget</Link>


                    </div>

                </div>





                <button
                    color="success"
                    disabled={formLoading}
                    onClick={(e) => handleOnSubmit(e, formData.values)}
                    className="button-bg p-2 mt-4 w-full text-white rounded-md text-sm mb-6"
                >
                    {formLoading ? 'Processing...' : ''}

                    Login
                </button>


                <hr className='border-t border-gray-400' />

                <div className="mt-4 flex w-full justify-center">
                    <span className='p-color text-sm font-regular text-center w-full'>Are you a partner?  <Link to='/'>Register here instead.</Link> </span>

                </div>


            </form>
        </>

    );
};
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

const stateProps = ({ form }) => ({
    formData: form.LoginForm,
});
const connectedForm = reduxForm({
    // a unique name for the form
    form: 'LoginForm',
    validate,
})(LoginForm);


export default connect(stateProps, null)(connectedForm);
