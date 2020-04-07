//登录页
import React from 'react';
import './SignIn.scss'
import SignInTab from "./SignInTab";
import News from "./News";

const SignIn = (props) => {
    const toIndex = () => {
        console.log(props)
        props.history.replace("/index")

    }
    return (
        <div className="SignIn">
            <News></News>
            <SignInTab toIndex={toIndex}/>
        </div>
    );
}

export default SignIn