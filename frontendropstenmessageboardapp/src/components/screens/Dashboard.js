import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LandingPage from './LandingPage';
import SelectMessagesScreen from './SelectMessagesScreen';
import WriteMessagesScreen from './WriteMessagesScreen';

const Dashboard = (props) => {
    // const history = useHistory();

    if(props.global.isAuthenticated){
        return(
            <Container fluid className="d-grid">
                <Row className="py-2">
                    <Col md={8} xs={12}>
                        <SelectMessagesScreen  global={props.global} />
                    </Col>
                    <Col md={4} xs={12}>
                        <WriteMessagesScreen global={props.global} />
                    </Col>
                </Row>
            </Container>
        )
    }
    return <LandingPage />
    // <Redirect to="/" />
}

export default Dashboard;