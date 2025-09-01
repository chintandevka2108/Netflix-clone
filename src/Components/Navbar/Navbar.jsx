import React, { useState, useEffect } from 'react';
import { Container, Navbar as BsNavbar, Nav, Dropdown, Image } from 'react-bootstrap';
import './Navbar.css';

// Import your assets
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';

// New ProfileDropdown component for cleaner code
const ProfileDropdown = ({ setExpanded }) => {
  const handleProfileClick = () => {
    // This is where you would put the logic for handling the profile upload.
    // For now, it will simply show an alert.
    alert('Profile Upload option clicked!');
    setExpanded(false); // Close the menu after clicking
  };

  return (
    <Dropdown align="end" className="d-flex align-items-center">
      <Dropdown.Toggle variant="link" id="dropdown-basic" className="navbar-profile p-0">
        <Image src={profile_img} alt="Profile" className="navbar-profile-img" />
        <Image src={caret_icon} alt="" className="navbar-caret ms-1" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="navbar-dropdown-menu">
        <Dropdown.Item onClick={handleProfileClick}>Upload Profile Picture</Dropdown.Item>
        <Dropdown.Item onClick={() => setExpanded(false)}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BsNavbar
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      variant="dark"
      className={`fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <Container fluid className="px-2 px-sm-3 d-flex justify-content-between align-items-center">
        <BsNavbar.Brand href="#">
          <Image src={logo} alt="Netflix" className="navbar-logo" />
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />

        <BsNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#" onClick={() => setExpanded(false)}>TV Shows</Nav.Link>
            <Nav.Link href="#" onClick={() => setExpanded(false)}>Movies</Nav.Link>
            <Nav.Link href="#" onClick={() => setExpanded(false)}>New & Popular</Nav.Link>
            <Nav.Link href="#" onClick={() => setExpanded(false)}>My List</Nav.Link>
            <Nav.Link href="#" onClick={() => setExpanded(false)}>Kids</Nav.Link>
          </Nav>
          
          <Nav className="ms-auto right-icons-desktop d-flex align-items-center">
            <Image src={search_icon} alt="Search" className="navbar-icon me-3" />
            <Image src={bell_icon} alt="Notifications" className="navbar-icon me-3" />
            <ProfileDropdown setExpanded={setExpanded} />
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};