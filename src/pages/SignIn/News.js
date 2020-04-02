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
                <Carousel dotPosition="left">
                    <div className="News-item">

                    </div>
                    <div className="News-item">

                    </div>
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        devKey: state.dev.devKey
    }
}
export default connect(mapStateToProps, {updateDevKey})(News)