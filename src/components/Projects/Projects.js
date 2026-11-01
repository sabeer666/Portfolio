import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import manualTesting from "../../Assets/Projects/testing-project.png";
import automation1 from "../../Assets/Projects/automation1.png";
import automation2 from "../../Assets/Projects/automation2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manualTesting}
              isBlog={false}
              title="ShopKartIndia Manual Testing"
              description="Designed and executed 44 manual test cases across the Home Page, My Account and Cart List modules of an e-commerce website. Logged 12 defects with severity and priority, including a critical bug that stopped some products from being purchased, and prepared a defect distribution and test summary report."
              ghLink="/Sabeer_TK_Testing_Project.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automation1}
              isBlog={false}
              title="Selenium Web Automation Framework"
              description="Built a Selenium WebDriver automation suite in Java with TestNG and the Page Object Model, tested on the practice site The Internet. Automated JavaScript alerts, drag and drop, window handling, scrolling, file upload and screenshot capture, plus data-driven testing of a forgot-password form using test data read from Excel with Apache POI."
              ghLink="https://github.com/sabeer666/automation_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automation2}
              isBlog={false}
              title="Admin Portal UI Automation"
              description="Automated end-to-end UI tests in Java with Selenium WebDriver for a web admin portal. Covered login validation with valid and invalid credentials, navigation through a multi-level menu, and form-filling flows with dropdown selection to create records such as areas, routes, branches, customers and distributors."
              ghLink="https://github.com/sabeer666/automation_project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;