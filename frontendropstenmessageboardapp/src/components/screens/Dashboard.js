import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectMessagesScreen from './SelectMessagesScreen';
import WriteMessagesScreen from './WriteMessagesScreen';

const Dashboard = (props) => {
    return(
        <Container fluid className="d-grid">
            <Row className="py-2">
                <Col md={6} xs={12}>
                    <SelectMessagesScreen  global={props.global} />
                </Col>
                <Col md={6} xs={12}>
                    <WriteMessagesScreen global={props.global} />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;