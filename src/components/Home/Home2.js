import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I am a passionate Software Tester who enjoys identifying issues,
               solving problems, and ensuring the quality and reliability of software applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Manual Testing and Automation Testing,{" "}
                </b>
              </i>
              — with knowledge of SQL, Java, Selenium WebDriver, JMeter, Postman, and Jira.
              <br />
              <br />
              My key areas of interest include 
              <i>
                <b className="purple">
                  {" "}
                  Software Testing, Technical support,Application support,{" "}
                </b>
              </i>
                and ensuring smooth application functionality with a focus on quality and user experience.
              <br />
              <br />
              I also have professional experience working as an Associate in Customer Support at a multinational company,
              where I handled customer queries and provided solutions to technical issues. I am passionate about software testing,
              continuous learning, and problem-solving, and I aspire to contribute to building reliable and high-quality software applications.
              {/*Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              */}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
