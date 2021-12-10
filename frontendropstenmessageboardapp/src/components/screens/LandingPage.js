import React from 'react';
import { Container } from 'react-bootstrap';
import WarningSection from '../components/WarningSection';

const LandingPage = (props) => {

    return(
        <Container className="d-grid mx-auto" style={{height: window.screen.availHeight}}>
            <WarningSection />
            {/* <br/> */}
            {/* <br/> */}
            {/* <h4>Everything has evolved! Check out <a href="https://nfthub.netlify.com">NFTHub</a> on the Polygon Mainnet</h4> */}
            {/* <Button variant="info" onClick={()=>props.global.authenticate({signingMessage: 'Get Your Messages'})}>Authenticate Yourself!</Button> */}
        </Container>
    )
}

export default LandingPage;