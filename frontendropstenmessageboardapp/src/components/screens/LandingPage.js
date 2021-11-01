import React from 'react';
import { Container } from 'react-bootstrap';

const LandingPage = (props) => {

    return(
        <Container className="d-grid mx-auto align-items-center" style={{height: window.screen.availHeight}}>
            {/* <Button variant="info" onClick={()=>props.global.authenticate({signingMessage: 'Get Your Messages'})}>Authenticate Yourself!</Button> */}
        </Container>
    )
}

export default LandingPage;