//登录页
import React from 'react';
import './SignIn.scss'
import SignInTab from "./SignInTab";
import News from "./News";

const SignIn = () => {
    return (
        <div className="SignIn">
            <News></News>
            <SignInTab/>
        </div>
    );
}

export default SignIn