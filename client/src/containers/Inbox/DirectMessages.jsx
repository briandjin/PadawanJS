import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation } from '../../actions/directMessageActions.jsx'
// import Message from './Message.jsx';
// import { submitMessage, fieldInput } from '../../actions/directmessageActions.jsx'

class DirectMessages extends Component {
  componentDidMount() {
    this.props.getConversation(this.props.conversation_id);
  }

  renderMessages() {
    console.log('direct messages:', this.props.directMessages)
  }

  render() {
    return (
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        {this.renderMessages()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    directMessages: state.directMessages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getConversation: getConversation}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)