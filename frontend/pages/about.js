import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

let items = ["/blackpink_dark.png", "/suicideboys.jpg", "olivia.jpg", "the-weeknd.jpg"];
let itemList = items.map((item, index) => {
    return <Carousel.Item interval={3000} img={item} alt={index}>
        <img
            className="d-block w-100"
            src={item}
            alt={index}
            style={{ width: 1920, height: 1080 }}
        />
        <Carousel.Caption>
            <h1>
                Spotify Together - because music is best enjoyed together!
            </h1>
        </Carousel.Caption>
    </Carousel.Item>
})

export default function About() {
    return (
        <div>
            <Navigation></Navigation>
            <div>
            <Carousel pause={false} fade>
                {itemList}
            </Carousel>
            </div>
        </div>
    )
}

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Spotify Together</Navbar.Brand>
                    <Navbar.Collapse id="spotify-tg-navbar">
                        <Nav variant="dark">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="About" id="spotify-about-dropdown">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="https://github.com/montgomerysamantha/spotify-together">Source Code</Nav.Link>
                            </NavDropdown>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
