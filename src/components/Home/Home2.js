import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <i>
              </i>
              <br />
              <br />
              I’m a passionate Computer Science Engineering student currently in my 3rd year, with a strong interest in cloud computing and its transformative impact on modern technology. My academic journey has equipped me with a solid foundation in core subjects like algorithms, data structures, and software development, while my passion drives me to explore the world of cloud platforms, infrastructure, and services.
              <i>
                <b className="purple">
                I am constantly seeking opportunities to apply my knowledge through hands-on projects, internships, and collaborations that allow me to deepen my understanding of cloud-based solutions. Eager to contribute to the tech ecosystem
                </b>
              </i>
              <br />
              <br />
              I aim to leverage my skills to solve real-world problems through innovation and cutting-edge technology.
              <i>
                <b className="purple">
                  {" "}
                Connect with me to discuss all things cloud, tech, and future trends!
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br></br>
              <b className="purple"> I am fluent in Java , C , Python. </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AryanYadav26"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aryanyadav26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aryan_y_adav/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
