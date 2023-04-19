import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types"
import { connect } from "react-redux"



import ForgotPassword from './Authentication/ResetPassword/ForgotPassword';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';


import PasswordSent from './Component/PasswordSent';
import Footer from './Component/Footer';


import { useEffect } from "react";




function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

 function App() {
  return (
    <>
      <ScrollToTopOnMount />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/password-sent" element={<PasswordSent />} />



            

          
        </Routes>
        <Footer/>

    </>

  )
}

const stateProps = state => ({
    layout: state.Layout,
});

export default connect(stateProps, null)(App)

