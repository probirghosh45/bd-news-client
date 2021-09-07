import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const AdminNavbar = () => {

   const {adminPanel}= useParams();

  return (
    <div className="pt-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
              {
                  adminPanel==="addNews"? "Add News"
                  :adminPanel==="editNews"? "Edit News"
                  :adminPanel==="manageNews"? "Manage News"
                  :adminPanel==="addAdmin"? "Add Admin"
                  : "Dashboard"

              }

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/" >Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
