import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import environments from "../../environments";
import {
    updateStocks,
    updateSocketEvent,
    socketInitialized,
    _socket
} from "../../store";
import { StocksList, Header } from "../../components";

class Dashboard extends Component {
    componentDidMount() {
        this.startSocketConnection();
    }

    startSocketConnection = () => {
        this.socket = new WebSocket(environments.BASE_URL);
        this.props.onSocketInitialization(this.socket);

        /*handle socket events */
        this.socket.onopen = event => {
            this.props.onSocketOpen(event);
        };
        this.socket.onerror = event => {
            this.props.onSocketError(event);
        };
        this.socket.onmessage = event => {
            this.props.onSocketMessage(JSON.parse(event.data));
        };
        this.socket.onclose = event => {
            this.props.onSocketClose(event);
            setTimeout(() => this.startSocketConnection(), 5000);
        };
    };

    componentWillUnmount() {
        this.socket.close();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <StocksList {...this.props.socket} {...this.props.stocks} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stocks: state.stocks,
        socket: state.socket
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSocketMessage: data => dispatch(updateStocks(data)),
        onSocketInitialization: socket => dispatch(socketInitialized(socket)),
        onSocketOpen: event =>
            dispatch(updateSocketEvent(_socket.ON_OPEN, event)),
        onSocketError: event =>
            dispatch(updateSocketEvent(_socket.ON_ERROR, event)),
        onSocketClose: event =>
            dispatch(updateSocketEvent(_socket.ON_CLOSE, event))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
