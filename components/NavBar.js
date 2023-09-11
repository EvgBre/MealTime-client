/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import MtLogo from '../images/MtLogo.png';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect className="navbar-custom" expand="lg" variant="dark">
      <Container>
        <Nav.Link href="/">
          <Image src={MtLogo} alt="mt-logo" width={90} height={90} />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/myFood">
              <Nav.Link>My Food</Nav.Link>
            </Link>
            <Link passHref href="/meal/">
              <Nav.Link>My Meals</Nav.Link>
            </Link>
            <Link passHref href="/calendar">
              <Nav.Link>Calendar</Nav.Link>
            </Link>
            <Button variant="dark" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
