import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { LogoWidget } from "./LogoWidget";

export const NavBar = () => {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand><LogoWidget /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><a href="https://pathsofpain97.github.io/JavaScriptMaximillianoPippan4.github.io/">Productos</a></Nav.Link>
            <Nav.Link><a href="https://pathsofpain97.github.io/PokedexSpanish97.github.io/">PokeApi</a></Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
}