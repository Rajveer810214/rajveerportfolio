import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import markdown from "../assets/projects/markdown.png";
import matkart from "../assets/projects/matkart.png";
import pdf_fusion from "../assets/projects/pdf-fusion.png";
import SmartNoteBook from "../assets/projects/smartnotebook.png";
import sidhucoachingcenter from "../assets/projects/sidhucoahingcenter.png";
import currency from "../assets/projects/currency.png";
import SportsMeetGndec from '../assets/projects/sportsGndec.png'
import zealnet from '../assets/projects/zealnet.png'
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SportsMeetGndec}
              isBlog={false}
              title="SportsMeetApp"
              description="Presenting the Sports Meet application, available on both the web and Android platforms for GNDEC. This app allows students to register for various events. Prior to enrolling in any event, individuals are required to create an account, verify their credentials, and provide academic information. Once this process is complete, they can proceed to enroll in their desired events. A noteworthy feature of this app is the ability for students to download event participation certificates"
              demoLink="https://sports2024.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartNoteBook}
              isBlog={false}
              title="SmartNoteBook"
              description="Introducing SmartNook: the ultimate productivity companion that revolutionizes note-taking! Capture, organize, and access digital notes effortlessly, transforming your productivity and organization. Seamlessly manage notes: Create, edit, and organize with ease. Say goodbye to scattered files, hello to a centralized hub. Tag-based categorization: Stay organized effortlessly with customizable tags. Easily find what you need. Secure and private: Robust security measures ensure data privacy.. Responsive and user-friendly: Access SmartNook across devices. Optimal note-taking experience, anywhere."
              demoLink="http://smartnotebook.vercel.app/"
            ghLink = "https://github.com/Rajveer810214/smartNotebook_frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="Actually, I have created a currency converter website that allows users to effortlessly convert currencies to a specific country's currency. This website serves as a convenient tool for individuals who need to calculate currency conversions accurately and efficiently. With just a few clicks, users can quickly obtain the equivalent value of one currency in relation to another.
              The currency converter website was skillfully developed by Rajveer Singh, demonstrating his expertise in programming and his ability to deliver practical solutions. Rajveer's dedication and effort in creating this website are truly commendable."
              demoLink="https://currecny.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matkart}
              isBlog={false}
              title="E‑Commerce Website - Matkart"
              description="I've ingeniously crafted Matkart, a remarkable e-commerce platform powered by Redux. Engage in a shopping escapade where you're granted a distinctive balance to indulge in purchases. Each chosen item gracefully diminishes the allocated balance, orchestrating a seamless dance of sophistication and convenience. However, it's important to note that this project doesn't facilitate transactions. It's designed as a foundational venture to elucidate the mechanics of Redux in action."
              demoLink="http://matkart.netlify.app/"
              ghLink="https://github.com/Rajveer810214/Matkart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={markdown}
              isBlog={false}
              title="Markdown Editor"
              description="🚀 Excited to share my latest project! 📝✨

              I'm thrilled to announce the launch of my Markdown Editor project! 🎉📎
              
              With this powerful tool, you can create stunning slides, present your ideas, and easily download your Markdown files for future use. 🖥️📚
              
              Here are some key features:
              
              ✅ Slide Creation: Seamlessly create slides by using the --- separator and apply beautiful styling with Markdown syntax. Let your content shine through! 💡✍️
              
              ✅ Presentation Mode: Step into the spotlight and present your slides with confidence.🎤🎥
              
              "
              demoLink="https://markdowneditor-lemon.vercel.app/"
              ghLink = "https://github.com/Rajveer810214/Markdown-Editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidhucoachingcenter}
              isBlog={false}
              title="Sidhu Coaching center"
              description="I've developed a  website for Sidhu Coaching Center in NEXT js. Students can log in to ask doubts, receiving OTP verification. The platform displays their queries, offering query deletion. However, students can only delete their own queries, ensuring query privacy and security."
              ghLink="https://github.com/Rajveer810214/SidhuCoachingCenterFrontend"
              demoLink="https://sidhucoachingcenter.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdf_fusion}
              isBlog={false}
              title="PDF Fusion"
              description="PDF Fusion is a versatile software that empowers users to effortlessly combine, edit, and create PDF documents. With its intuitive interface and comprehensive features, PDF Fusion offers a seamless solution for managing and manipulating PDF files.
              One of the standout features of PDF Fusion is its ability to merge multiple PDF documents into a single file. Whether you need to consolidate reports, combine invoices, or merge different chapters of an e-book, PDF Fusion simplifies the process and saves valuable time.The software's user-friendly interface and customizable options make it accessible to users of all levels of expertise"
              demoLink="https://pdf-master-gamma.vercel.app/"
              ghLink="https://github.com/Rajveer810214/pdf-master"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zealnet}
              isBlog={false}
              title="ZealNet"
              description="I've meticulously developed ZealNet, an innovative social media platform which is in  Next.js. Upon signing up, users can effortlessly connect with friends, share captivating stories, and explore a myriad of narratives from others. Additionally, the platform facilitates interactive chats, creating an engaging and dynamic online community."
              ghLink="https://github.com/Rajveer810214/zealnet"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects