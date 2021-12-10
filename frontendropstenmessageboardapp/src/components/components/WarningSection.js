import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const WarningSection = () => {
    return(
        <Container className="mx-auto justify-content-center">
            <Alert variant="success">
                <h4>Everything has evolved! Check out <a href="https://nfthub.netlify.com">NFTHub</a> on the Polygon Mainnet</h4>
            </Alert>
        </Container>
    )
}

export default WarningSection;