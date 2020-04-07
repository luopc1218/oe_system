//主页
import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {message} from 'antd';
import {connect} from "react-redux";
import {updateUser} from "../../actions/userAction"
import Navigator from "./Navigator/Navigator"
import "./Index.scss"

//引入子页面
import Chat from "./Chat/Chat"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLogin: false
        }
    }

    componentDidMount() {
        if (this.checkHasSignIn()) {
            this.setState({hasLogin: true})
        } else {
            this.setState({hasLogin: false})
            this.signOut()
        }
    }

    //检测是否已登录
    checkHasSignIn = () => {
        this.props.updateUser({
            userId: "0001",
            userName: "王岳明",
            userType: 1
        })
        return true
    }
    signOut = () => {
        message.warning('未登录,请重新登录');
        this.props.history.replace("/")
    }

    render() {
        const routeJump = (path) => {
            if (path !== "") {
                console.log(this.props.history)
                this.props.history.push(path)
            }

        }

        return (
            <div className="Index">
                {
                    this.state.hasLogin && (
                        <Navigator routeJump={routeJump}/>

                        // <div> index</div>
                    )
                }
                <div className="Index-body">
                    <Switch>
                        <Route path="/index/chat" component={Chat}></Route>
                    </Switch>
                </div>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {updateUser})(Index)
// export default Index