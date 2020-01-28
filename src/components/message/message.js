import React from "react";
import DisplayMessage from '../displayMessage/displayMessage'
import BlueService from '../../blueService';

import Accordion from 'react-bootstrap/Accordion'

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            dataMessages: {},
        };
    }

    getNewMessage() {
        return this.client.getMessage().then(result => {
            console.log(result.data)
            this.setState({
                data: result.data
            })
        })
    }

    getMultipleMessages() {
        return this.client.getMultipleMessages().then(result => {
            console.log(result.data.messages)
            this.setState({
                dataMessages: result.data
            })
        })
    }


    componentDidMount() {
        this.getMultipleMessages();
    }

    render() {
        if (this.state.dataMessages.messages) {

            let messageArray = [];
            for(let i = 0; i < this.state.dataMessages.messages.length; i++){
                messageArray.push(
                    <DisplayMessage
                            key={this.state.dataMessages.messages[i].id}
                            message={this.state.dataMessages.messages[i].text}
                            username={this.state.dataMessages.messages[i].username}
                            data={this.state.dataMessages.messages[i].createdAt}
                        />
                )
            }

            return (
                <Accordion defaultActiveKey="0">
                    {/* {this.state.dataMessages.messages.map((message)=>{
                        return <DisplayMessage
                            key={message.id}
                            message={message.text}
                            username={message.username}
                            data={message.createdAt}
                        />
                    })} */}
                    {messageArray}
                </Accordion>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }

}



export default Message;