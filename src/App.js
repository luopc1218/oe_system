import React from 'react';
import './App.scss';
//引入路由
import Router from "./router/router"

export default class App extends React.Component {


    render() {
        return (
            <div className="App">
                <Router/>
            </div>
        )
    }

}


