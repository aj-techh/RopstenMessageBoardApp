import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNav = (props) => {
    // console.log(props.global.user.attributes.ethAddress);

    return(
        <Navbar bg='dark' variant="dark" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand>Message Board</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarLinks"/>
                <Navbar.Collapse id="navbarLinks">
                    {props.global.isAuthenticated?
                        <>
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/my-messages" >My Messages</Link></Nav.Link>
                                <Nav.Link><Link to="/message-boards">Message Boards</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Text className="px-1">{props.global.user.attributes.ethAddress}</Navbar.Text>
                                <Link to="/"><Button variant="secondary" onClick={props.global.logout}>Log Out</Button></Link>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav className="d-grid mx-auto mt-3">
                                <Button variant="primary" onClick={()=>props.global.authenticate({signingMessage: 'Get Your Messages!'})}>Log In</Button>
                            </Nav>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PageNav;


