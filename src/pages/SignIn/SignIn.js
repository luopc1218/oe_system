//登录页
import React, {Component} from 'react';
import './SignIn.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "ss"
        }
    }

    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <div className="SignIn">登录页</div>
        );
    }

}