import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm border-bottom px-3">

      {/* Mobile Sidebar Toggle */}
      <Button
        variant="outline-primary"
        className="d-lg-none me-3"
        onClick={toggleSidebar}
      >
        <List size={24} />
      </Button>

      {/* Application Title */}
      <Navbar.Brand className="fw-bold text-primary">
        Policy Management System
      </Navbar.Brand>

      {/* Right Section */}
      <div className="ms-auto">
        <span className="fw-semibold text-secondary">
          Welcome, Admin
        </span>
      </div>

    </Navbar>
  );
};

export default Header;