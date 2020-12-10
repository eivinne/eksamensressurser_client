import React from 'react';
import SignUpFormComponent from '../components/SignUpFormComponent'
import {Footer} from '../styles/StyledComponents';
const SignUp = (loggedInn) => {
  return (
    <>
    <SignUpFormComponent></SignUpFormComponent>
    <Footer></Footer>
    </>
  );
};

export default SignUp;