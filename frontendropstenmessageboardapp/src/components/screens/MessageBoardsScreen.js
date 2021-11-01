import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import FlatList from "flatlist-react";
import MessageBoardsInfo from '../../MessageBoardsInfo.json';

const MessageBoardScreen = (props) => {

    const renderMessage = (board, idx) => {
        console.log(board)
        return(
            <li key={idx} style={styles.listItemContainer}>
                <Link to={`/message-board/${board.address}`}>
                    <h2 style={styles.listItemMsg}>{board.name}</h2> 
                    <h5>{board.description}</h5>
                </Link>
            </li>
        )
    }

    if(props.global.isAuthenticated){
        return(
            <FlatList
                list={MessageBoardsInfo}
                renderItem={renderMessage}
            />
            // <Container>
            //     <Row>
            //         <Col>
            //             <Card>
            //                 <Card.Body>
            //                     <Card.Title>
            //                         <Link to={"/message-board/react"}>
            //                             React Board
            //                         </Link>
            //                     </Card.Title>
            //                 </Card.Body>
            //             </Card>
            //         </Col>
            //         <Col>
            //             <Card>
            //                 <Card.Body>
            //                     <Card.Title>
            //                         Title Text
            //                     </Card.Title>
            //                 </Card.Body>
            //             </Card>
            //         </Col>
            //         <Col>
            //             <Card>
            //                 <Card.Body>
            //                     <Card.Title>
            //                         Title Text
            //                     </Card.Title>
            //                 </Card.Body>
            //             </Card>
            //         </Col>
            //         <Col>
            //             <Card>
            //                 <Card.Body>
            //                     <Card.Title>
            //                         Title Text
            //                     </Card.Title>
            //                 </Card.Body>
            //             </Card>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }

    return <LandingPage />
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
            textAlign: 'center'
            // alignItems: 'left',
            // justifyContents: 'left'
          },
            listItemMsg:{
              // display: 'inline'
            }
  }

export default MessageBoardScreen;