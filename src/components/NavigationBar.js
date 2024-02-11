import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from "../Assets/gojo.png";
import "./Styles/Navigation.css";

function NavBar() {
  const [activeLink, setactiveLink] = useState("home");
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scroller" : ""}>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Added className span} */}
        <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            {/* Adding one more Link */}
            <Nav.Link
              href="#Resume"
              className={
                activeLink === "resume" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Link
            </Nav.Link>
          </Nav>

          {/* removed drop down */}
          {/* Adding social links */}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#Home">
                <img src={"nav"} alt="social icon" />
              </a>
              <img src={""} alt="social icon" />
              <img src={""} alt="social icon" />
            </div>
            <button className="vvd" onClick={() => console.log("connecting")} />
            <span>Lets connect</span>
          </span>
          {/*  */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
