import React, {Component} from "react";
import axios from "axios";
import {Carousel} from "antd";
import {connect} from "react-redux";
import {updateDevKey} from "../../actions/devAction";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            loading: false
        }
    }

    getNewsList = () => {
        this.setState({
            loading: true
        })
        axios.get("http://api.juheapi.com/japi/toh", {
            params: {
                key: this.props.devKey,
                v: "1.0",
                month: new Date().getMonth() + 1,
                day: new Date().getDate()
            }
        }).then(res => {
            console.log(res)
        })
    }

    componentDidMount() {
        // this.getNewsList()
    }

    render() {
        return (
            <div className="News">
                <Carousel dotPosition="left" autoplay>
                    <div className="News-item"><img alt=""
                                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586232897155&di=17420a12d926639fd1efed38a33a1a2c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb58f8c5494eef01f9030c91ce7fe9925bd317dc7.jpg">
                    </img></div>
                    <div className="News-item"><img alt=""
                                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586233220955&di=5c94f680cc7d6d97b0a21c4b5a13aed4&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2983551573%2C2792178880%26fm%3D214%26gp%3D0.jpg">
                    </img></div>
                    <div className="News-item"><img alt=""
                                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586232897155&di=17420a12d926639fd1efed38a33a1a2c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb58f8c5494eef01f9030c91ce7fe9925bd317dc7.jpg">
                    </img></div>
                    <div className="News-item"><img alt=""
                                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586233220955&di=5c94f680cc7d6d97b0a21c4b5a13aed4&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2983551573%2C2792178880%26fm%3D214%26gp%3D0.jpg">
                    </img></div>
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // devKey: state.dev.devKey
    }
}
export default connect(mapStateToProps, {updateDevKey})(News)