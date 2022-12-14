import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">aria</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/products">SHOP</Nav.Link>
                    <Nav.Link href="/about">OUR STORY</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/login">SIGN IN</Nav.Link>
                        <Nav.Link href="/register">REGISTER</Nav.Link>
                        <Nav.Link href="/cart">WISHLIST</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu