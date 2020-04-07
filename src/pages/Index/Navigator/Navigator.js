import React, {Component} from "react";
import {Avatar, Menu, Tag, Button} from 'antd';
import {UserOutlined, LogoutOutlined} from '@ant-design/icons';
import "./Navigator.scss"
import {connect} from "react-redux";

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            selectedKeys: []
        }
    }


    componentDidMount() {
        this.getMenuList()
    }

    //获取导航列表
    getMenuList = () => {
        this.setState({
            menuList: [
                {
                    menuName: "模块1",
                    kid: "1",
                    path: "1"
                },
                {
                    menuName: "模块2",
                    kid: "2",
                    path: "2"
                },
                {
                    menuName: "模块3",
                    kid: "3",
                    path: "3"
                },
                {
                    menuName: "即时通讯",
                    kid: "4",
                    path: "/index/chat"
                }
            ],
        }, () => {
            if (this.state.menuList.length > 0) {
                this.setState({
                    selectedKeys: [this.state.menuList[0].kid]
                })
                this.routeJumpByIndex(0)
            }
        })

    }
    //点击导航项目
    onSelect = (event) => {
        const index = event.item.props.index
        this.routeJumpByIndex(index)
    }
    //根据下标跳转路由
    routeJumpByIndex = (index) => {
        let target = this.state.menuList[index]
        this.setState({
            selectedKeys: target.kid
        }, () => {
            this.props.routeJump(target.path)
        })

    }

    render() {
        return (
            <div className="Navigator">
                <div className="Navigator-header">
                    <div className="Navigator-header-avatar">
                        <Avatar size="large" icon={<UserOutlined/>}/>
                        <span
                            style={{padding: "1rem", boxSizing: "border-box"}}>{this.props.user.userName}

                    </span>
                        <Tag color="magenta">ID:{this.props.user.userId}</Tag>
                    </div>
                    <div className="Navigator-header-userInfo">
                        <div>用户类型:{this.props.user.userType === 1 ? '学生' : this.props.user.userType === 2 ? '教师' : ''}
                        </div>
                    </div>
                </div>
                <div className="Navigator-body">
                    <Menu
                        onSelect={this.onSelect}
                        mode="inline"
                        style={{height: "100%"}}
                        selectedKeys={this.state.selectedKeys}
                    >
                        {
                            this.state.menuList.map(item => {
                                return <Menu.Item key={item.kid} title={item.menuName}>{item.menuName}</Menu.Item>
                            })
                        }
                    </Menu>
                </div>
                <div className="Navigator-footer">
                    <Button type="primary" block shape="round" icon={<LogoutOutlined/>}>
                        注销
                    </Button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {})(Navigator)