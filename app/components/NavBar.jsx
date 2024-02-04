'use client'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        console.log('mode:', mode)
        if (mode === 'light') {
            document.querySelector('body').setAttribute('data-bs-theme', 'light');
        } else {
            document.querySelector('body').setAttribute('data-bs-theme', 'dark');
        }


    }, [mode]);

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
                    <Nav>
                        <NavDropdown title="Modes" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => {
                                setMode('light');
                            }}>LightMode</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {
                                setMode('dark');
                            }}>DarkMode</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;