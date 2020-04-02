import React from 'react';
import './App.scss';
//引入路由
import Router from "./router/router"
import {Provider} from 'react-redux'
import store from "./store/store"

export default class App extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router/>
                </div>
            </Provider>
        )
    }

}


