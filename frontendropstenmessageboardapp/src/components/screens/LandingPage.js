import React from 'react';
import { Container } from 'react-bootstrap';
import WarningSection from '../components/WarningSection';

const LandingPage = (props) => {

    return(
        <Container className="d-grid mx-auto" style={{height: window.screen.availHeight}}>
            <WarningSection />
            <span>this is landing page</span>
            {/* <Button variant="info" onClick={()=>props.global.authenticate({signingMessage: 'Get Your Messages'})}>Authenticate Yourself!</Button> */}
        </Container>
    )
}

export default LandingPage;