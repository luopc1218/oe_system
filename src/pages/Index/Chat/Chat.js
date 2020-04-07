import React, {Component} from "react";
import "./Chat.scss"
import {Input, Button, Card, Menu} from 'antd';

const {Search} = Input;

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedContactsKeys: "",
            contactsList: []
        }
    }

    componentDidMount() {
        this.initWs()
    }

    //选择联系人
    onSelectContacts = () => {

    }
    //初始化wx连接
    initWs = () => {
        const ws = new WebSocket("ws://192.168.2.152:11111/websocketTest/ddd");
        let result = "";
        ws.onopen = function (e) {
            console.log('连接上 ws 服务端了');

        }
        ws.onmessage = (msg) => {
            console.log('接收服务端发过来的消息: %o', msg);
        };
        ws.onclose = function (e) {
            console.log('ws 连接关闭了');
        }
    }

    render() {
        return (
            <div className="Chat">
                <div className="Chat-contactsList">
                    <Menu
                        onSelect={this.onSelectContacts}
                        mode="inline"
                        style={{height: "100%"}}
                        selectedKeys={this.state.selectedContactsKeys}
                    >
                        {
                            this.state.contactsList.map(item => {
                                return <Menu.Item key={item.kid} title={item.menuName}>{item.menuName}</Menu.Item>
                            })
                        }
                    </Menu>
                </div>
                <div className="Chat-chatWindow">
                    <Card className="Chat-chatWindow-chartCard" title="张三" bodyStyle={{
                        flex: "1",
                        display: "flex",
                        flexDirection: " column",
                        justifyContent: "space-between"
                    }}>
                        <div className="Chat-chatWindow-chartCard-history">

                        </div>
                        <div className="Chat-chatWindow-chartCard-input">
                            <Search placeholder="请输入信息" enterButton="提交"/>
                        </div>
                    </Card>
                </div>


            </div>
        );
    }
}

export default Chat