import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const WarningSection = () => {
    return(
        <Container className="mx-auto justify-content-center">
            <Alert variant="danger">
                <h3>WARNING: This app is in beta mode. You may lose your messages at any time</h3>
            </Alert>
        </Container>
    )
}

export default WarningSection;