import React, {Component} from "react";
import {Button, Form, Input, Select} from "antd";
import {updateUser} from "../../actions/userAction"
import {connect} from "react-redux";
// import axios from "axios"

const SignInTabForm = (props) => {
    const {Option} = Select
    return (
        <Form
            name="form"
            hideRequiredMark
            labelCol={{span: 3}}
            onFinish={props.handleSignIn}
            colon={false}
        >
            <Form.Item name="school" label="学校" rules={[{required: true, message: '请选择学校!'}]}>
                <Select
                    placeholder="请选择学校"
                    allowClear
                >
                    <Option value="A学院">A学院</Option>
                    <Option value="B学院">B学院</Option>
                    <Option value="C学院">C学院</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label={props.userType === 1 ? "学号" : "工号"}
                name="account"
                rules={[{required: true, message: '请输入学号!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{required: true, message: '请输入密码!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 3}}>
                <Button block loading={props.loading} type="primary" shape="round"
                        htmlType="submit">
                    登入
                </Button>
            </Form.Item>
        </Form>
    )
}

class SignInTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userType: 1
        };
    }

    handleSignIn = (values) => {
        // values.userType = this.state.userType
        this.setState({
            loading: true
        })
        // axios.post("/login", {
        //     school: values.school,
        //     account: values.account,
        //     password: values.password,
        // }).then(res => {
        //     this.setState({
        //         loading: false
        //     })
        //
        // })
        this.props.toIndex()
        // console.log(this.props)


    }

    render() {
        const changeUserType = (type) => {
            this.setState({
                userType: type
            })
        }
        return (
            <div className="SignIn-tab">
                <div className="SignIn-tab-title">{this.state.userType === 1 ? "学生版" : "教师版"}</div>
                <div className="SignIn-tab-form">
                    <SignInTabForm loading={this.state.loading} userType={this.state.userType}
                                   handleSignIn={this.handleSignIn}/>
                </div>
                <div className="SignIn-tab-copyright">
                    made by luopc1218@outlook.com
                </div>
                <Button type="link" className="switchButton"
                        onClick={() => {
                            changeUserType(this.state.userType === 1 ? 2 : 1)
                        }}>切换到{this.state.userType === 1 ? "教师版" : "学生版"}</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {updateUser})(SignInTab)
