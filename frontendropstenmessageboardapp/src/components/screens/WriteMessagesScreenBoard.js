import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MessageBoardAppInfo from '../../ContractInfo.json';

const WriteMessagesScreenBoard = (props) => {
    const [recipient, setRecipient] = useState("");
    const [message, setMessage] = useState('');
    const [sendValue, setSendValue] = useState(0);

    props.global.Moralis.enableWeb3();
    let web3 = new props.global.Moralis.Web3(window.ethereum);
    const MessageBoardAppContract = new web3.eth.Contract(MessageBoardAppInfo.abi, MessageBoardAppInfo.address);

    // Function to send messages to users
    function sendMessage(to, message, value){
        MessageBoardAppContract.methods.sendMessage(
            web3.utils.toChecksumAddress(to), 
            message
        ).send({
            from: props.global.user.attributes.ethAddress, 
            value: value
        }).on('receipt',(receipt)=>{
        console.log(receipt);
        }).on('error', (err)=>{
        // break;
        })
    }

    return(
        <Container>
            <Row className="d-flex" md={2}>
                {/* <Col md={2}>
                    <p>To:</p>
                </Col> */}
                <Col md={12}>
                    <input
                        type="text"
                        placeholder="Write to Board"
                        onChange={(e)=>setRecipient(e.target.value)}
                        value={recipient}
                        style={{width: '100%'}}
                        disabled
                    />
                </Col>
            </Row>
            <Row>
                <textarea
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                    placeholder="Type message text."
                ></textarea>
            </Row>
            <Row>
                <input
                    type="number"
                    onChange={(e)=>setSendValue(e.target.value)}
                    value={sendValue}
                    placeholder="Input value to send(optional)"
                ></input>
            </Row>
            <Row>
                <Button 
                    variant="primary"
                    onClick={()=>{
                        try{
                            sendMessage(props.id,message,sendValue);
                            setRecipient('');
                            setMessage('');
                            setSendValue(0);
                        }catch(err){
                            alert('Invalid recipient. Please reenter')
                        }
                    }}
                    >Send Message</Button>
            </Row>
        </Container>
    )
}

export default WriteMessagesScreenBoard;