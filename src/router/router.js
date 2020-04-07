//引入react jsx写法的必须
import React from 'react';
//引入路由模块
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
//引入页面模块
import SignIn from "../pages/SignIn/SignIn"
import Index from "../pages/Index/Index"
import NoMatch from "../pages/NoMatch/NoMatch"

let router = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact path="/" to="/SignIn"/>
                <Route path="/SignIn" component={SignIn}></Route>
                <Route path="/Index" component={Index}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
        </Router>
    )
}

export default router