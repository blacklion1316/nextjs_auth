'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">NextJSLoginDemo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/api/auth/signin">signIn</Nav.Link>
                        <Nav.Link href="/api/auth/signout">signOut</Nav.Link>
                        <Nav.Link href="/api/auth/session">session</Nav.Link>
                        <Nav.Link href="/api/auth/providers">providers</Nav.Link>
                        <Nav.Link href="/dashboard">dashboard</Nav.Link>
                        <Nav.Link href="/about">about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;