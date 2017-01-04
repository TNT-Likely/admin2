import PubSub from 'pubsub-js';
import _ from 'lodash';
import React from 'react'
import ReactDOM from 'react-dom'
import {newId} from '../utils';

const ADD_MESSAGE = 'PUBSUB_MSG_ADD';
const REMOVE_MESSAGE = 'PUBSUB_MSG_RM';
const CLEAR_MESSAGE = 'PUBSUB_MSG_CLEAR';

let messages = {};
let containerDOM = null;
let containerElement = null;

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }
    dismiss() {
        if (this.props.dismissed)
            return;

        this.timer && clearTimeout(this.timer);
        this.props.onDismiss(this.props.index);
    }
    componentDidMount() {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(function() {
            this.dismiss();
        }.bind(this), this.props.timeout)
    }
    render() {
        let {dismissed, content, type} = this.props;
        return (
            <div className={`reveal message-content ${type} ${dismissed? 'dismissed': ''}`}>
                <button className="close-button" data-close aria-label="Close reveal"
                        type="button" onClick={this.dismiss.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                { content }
            </div>
        )
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    dismiss(index) {
        PubSub.publish(REMOVE_MESSAGE, index);
    }
    render() {
        let {messages} = this.props;

        let items = [];
        _.forIn(messages, (msg, key) => {
            items.push(<Item key={key} index={key} onDismiss={this.dismiss} {...msg}/>)
        })

        let style = {
            display: _.isEmpty(messages)? 'none': 'block'
        }
        return (
            <div className="message-container" style={style}>
                {items}
            </div>
        )
    }
}

Message.propTypes = {
    content: React.PropTypes.string,
    type: React.PropTypes.string,
    timeout: React.PropTypes.number,
}


Message.show = (content, type='info', timeout=3500) => {
    if (!containerDOM) {
        containerDOM = document.createElement('div');
        document.body.appendChild(containerDOM);
    }
    PubSub.publishSync(ADD_MESSAGE, {
        content,
        type,
        timeout
    })
    return containerElement;
};

PubSub.subscribe(ADD_MESSAGE, (topic, data) => {
    messages = {...messages, [newId()]: data};
    renderContainer();
});

PubSub.subscribe(REMOVE_MESSAGE, (topic, index) => {
    let msg = messages[index];
    msg.dismissed = true;
    messages = {...messages};
    renderContainer();
    setTimeout(() => {
        messages = _.omit(messages, index);
        renderContainer();
    }, 400);
});

PubSub.subscribe(CLEAR_MESSAGE, () => {
    // messages = messages.map(m => {
    //     m.dismissed = true;
    //     return m;
    // })
    // renderContainer();
    // setTimeout(() => {
    //     messages = [];
    //     renderContainer();
    // }, 400);
})

function renderContainer() {
    containerElement = ReactDOM.render(<Message messages={messages} />, containerDOM);
}


export default Message;
