import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className='bg-dark bg-gradient'>
      <Container fluid >
      <LinkContainer to="/" className='mx-5'>
        <Navbar.Brand>Movies break Quiz&apos;s Marilyne</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <LinkContainer to="/quiz" className='mx-1'>
            <Nav.Link>Quiz</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" className='mx-1'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Header;
