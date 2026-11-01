import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSelenium, SiApachejmeter, SiJira } from "react-icons/si";
import { FaBug, FaRobot } from "react-icons/fa";
import Java from "../../Assets/TechIcons/Java.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaBug fontSize={"24px"} />
        <div className="tech-icons-text">Manual Testing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot fontSize={"24px"} />
        <div className="tech-icons-text">Automation Testing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium fontSize={"24px"} />
        <div className="tech-icons-text">Selenium WebDriver</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachejmeter fontSize={"24px"} />
        <div className="tech-icons-text">JMeter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira fontSize={"24px"} />
        <div className="tech-icons-text">Jira</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;