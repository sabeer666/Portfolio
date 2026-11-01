import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sabeer TK</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            I’m a passionate{" "}
            <span className="purple">Software Tester</span> and{" "}
            <span className="purple">Technical Support Associate</span> with
            hands-on experience helping customers and teams resolve technical
            issues quickly and clearly.
            <br />
            <br />
             I specialize in{" "}
            <span className="purple">Manual Testing</span> and{" "}
            <span className="purple">Automation Testing</span>, with working
            knowledge of{" "}
            <span className="purple">
              SQL, Java, Selenium WebDriver, JMeter, Postman
            </span>{" "}
            and <span className="purple">Jira</span>.
            <br />
            <br />
            My customer support background means I understand how real users
            experience software, which helps me write better test cases and
            catch problems before they reach production.
            <br />
            <br />
            What I bring to a team:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Sharp attention to detail and a bug-hunting mindset
            </li>
            <li className="about-activity">
              <ImPointRight /> Clear bug reports that developers can act on fast
            </li>
            <li className="about-activity">
              <ImPointRight /> Functional, API and performance testing experience
            </li>
            <li className="about-activity">
              <ImPointRight /> Strong communication and a user-first approach
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Quality is not an act, it is a habit."{" "}
          </p>
          <footer className="blockquote-footer">Sabeer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
