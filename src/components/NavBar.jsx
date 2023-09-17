import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavBar = () => {
  return (
    <div >
      {/* className="position-fixed fixed-top" */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Turbo-Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-product">New Product</Nav.Link>
            <Nav.Link href="/product-list">Product List</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
