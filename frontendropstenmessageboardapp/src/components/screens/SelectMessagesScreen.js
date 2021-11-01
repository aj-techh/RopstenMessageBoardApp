import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import FlatList from "flatlist-react";
import MessageBoardAppInfo from '../../ContractInfo.json';

const SelectMessagesScreen = (props) => {
    const [Messages, setMessages] = useState([]);
    props.global.Moralis.enableWeb3();
    let web3 = new props.global.Moralis.Web3(window.ethereum);
    let userMessages = [];

    const MessageBoardAppContract = new web3.eth.Contract(MessageBoardAppInfo.abi, MessageBoardAppInfo.address);
    const getMessages = async ()=>{
        let NoOf = await MessageBoardAppContract.methods.returnNoOfMsgs(props.global.user.attributes.ethAddress).call();
        for(let i = 0; i < NoOf; i++){
          let pulledMsg = await MessageBoardAppContract.methods.returnMessages(props.global.user.attributes.ethAddress, i).call();
          userMessages.push({from:pulledMsg[0],msg:pulledMsg[1]})
        }
        setMessages(userMessages);
    }

    const renderMessage = (message, idx) => {
        return(
            <li key={idx} style={styles.listItemContainer}>
                <h2 style={styles.listItemMsg}>{message.msg}</h2> 
                <h5>From: {message.from}</h5>
            </li>
        )
    }

    return(
        <Container style={styles.messageScreen}>
          <Row>
            <Button onClick={()=>getMessages()}>Refresh</Button>
          </Row>
            <Row style={styles.flatlistContainer}>
                <FlatList
                list={Messages}
                renderItem={renderMessage}
                />
            </Row>
        </Container>
    )
}

const styles={
    messageScreen:{
      // width: '100%',
      // height: 'inherit',
      height: window.innerHeight*0.9,
      // backgroundColor: 'green',
      marginBottom: '5vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContents: 'center'
    },
      innerContainer:{
        width: '80%',
        height: '100%',
        marginBottom: '5%',
        border: '2px solid black',
      },
      button:{
        width: '100%',
        padding: '10px'
      },
      flatlistContainer:{
          // whiteSpace: 'wrap',
          // display: 'flex',
          // flexDirection: 'column',
          // height: '90%',
          overflowX: 'scroll',
          // overflowY: 'none',
          // wordWrap: 'normal',
          // textAlign: 'left',
          // inlineSize: '100%',
        },
          listItemContainer:{
            textDecoration: 'none',
            display: 'grid',
            flexDirection: 'column',
            borderBottom: '1px solid #eee',
            // alignItems: 'left',
            // justifyContents: 'left'
          },
            listItemMsg:{
              // display: 'inline'
            }
  }

export default SelectMessagesScreen;