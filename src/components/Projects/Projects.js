import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Helping Hands"
              description="Architected a job portal using MongoDB, Express.js, Node.js, React.js, enabling connection between semi-skilledworkers and potential employers. Implemented optimized search and matching logic using efficient data structures.Designed modular backend APIs to support scalability and easy feature extensions"
              ghLink="https://github.com/AditiDiti/Helping_Hands"
              demoLink="https://job-five-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Swadesh AI"
              description="Health Assistant ChatBot– Engineered a multilingual AI health chatbot with HTML5, Tailwind CSS, Cohere API, JavaScript, React.js, Vercel,Git, GitHub. Provides real-time voice-based symptom analysis and local health guidance without storing user data.Promotes accessible healthcare support, especially in rural and semi-urban areas"
              ghLink="https://github.com/AditiDiti/SwaDeshAI"
              demoLink="https://swadeshai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CareCircle"
              description="A responsive platform using React.js, JavaScript, CSS to assist families with conditions like ADHD.Designed secure, scalable backend APIs for efficient healthcare data access and retrieval. Optimized API calls andcomponent rendering to ensure smooth performance under concurrent usage."
              ghLink="https://github.com/AditiDiti/Care_Circle"
              demoLink="https://carecircle-gamma.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CrossWord Puzzle"
              description="Website featuring a crossword puzzle themed around the Indian government. Designed to make learning about India’s political structure, key institutions, and constitutional facts engaging and fun. Users can test their knowledge, get instant feedback, and explore civics in a gamified way."
              ghLink="https://github.com/AditiDiti/crossword-puzzle"
              demoLink="https://aditiditi.github.io/crossword-puzzle/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PetMe"
              description="A platform that connects animal lovers with pets in need of a forever home, while also providing emergency medical care for stray animals in distress. We strive to make a difference in the lives of these innocent creatures by offering options to Adopt, Donate and through our SOS feature Report stray animals in need of immediate assistance."
              ghLink="https://github.com/AditiDiti/PetMe"
              demoLink="https://aditiditi.github.io/PetMe/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PDF Parser"
              description="A Python-based PDF Parser that extracts key details such as the document title, metadata, and basic content information. It automates the process of reading and organizing PDF files, making data extraction efficient and structured for further analysis or storage."
              ghLink="https://github.com/AditiDiti/pdf_parser"
              demoLink="https://github.com/AditiDiti/challenge_1b"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
