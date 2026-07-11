import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Kancherla Sapthagiri Naveen</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I'm a <span className="purple">Computer Science undergraduate (BE CSE, 3rd year)</span> specializing in{" "}
            <span className="purple">Artificial Intelligence</span> at{" "}
            <span className="purple">Sathyabama Institute of Science and Technology</span>.
            <br />
            Currently seeking <span className="purple">internship opportunities</span> to apply my technical skills in{" "}
            <span className="purple">software development and AI-based projects</span>.
            <br />
            <br />
            Beyond coding, I'm passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building innovative AI solutions 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring IoT technologies 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open source projects 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology is my passion, innovation is my purpose!" 
          </p>
          <footer className="blockquote-footer">Naveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
