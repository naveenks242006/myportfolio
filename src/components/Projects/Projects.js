import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

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
              imgPath={leaf}
              isBlog={false}
              title="Smart Water Consumption Tracker"
              description="Developed an IoT-based system to monitor household water consumption in real time. Integrated water flow sensors with Blynk mobile application for remote monitoring and visualization. Designed to support efficient water usage and awareness."
              ghLink="https://github.com/naveenks242006"
              demoLink="https://github.com/naveenks242006"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Designed and built a responsive personal portfolio website using HTML, CSS, and JavaScript. Structured multiple sections including skills, projects, and contact details for clear presentation. Deployed online for improved visibility and accessibility."
              ghLink="https://github.com/naveenks242006/myportfolio"
              demoLink="https://github.com/naveenks242006/myportfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Academic Projects"
              description="Completed various academic projects applying programming and analytical skills to practical problems. Built software solutions through coursework and self-directed learning initiatives. Maintained and managed project repositories using GitHub."
              ghLink="https://github.com/naveenks242006"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
