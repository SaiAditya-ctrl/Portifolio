import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
//import "./About.css"; // Import your CSS file
const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
        
    <div className="container">
      <h1>About Me</h1>
      <p>
        Hello! I'm <strong>Sai Aditya Ede</strong>, a dedicated Computer Science graduate with a passion for Full-Stack Development and a penchant for cutting-edge technologies. With over 5 years of experience in React Full-Stack Development, I've honed my skills in Cloud Computing, Databases, Big Data, and AI. I thrive on challenges and have an unwavering commitment to crafting efficient and performant code.
      </p>

      <h2>Education</h2>
      <p>
        <strong>Master of Science, Computer Science</strong><br />
        The University of Texas at Arlington, Arlington, TX, USA
      </p>
      <p>
        Throughout my master's program, I delved into a range of subjects, including Data Structures, Algorithms Analysis, ADV Information Security, Database Management, Web Technologies, Artificial Intelligence, Machine Learning, Compiler Design, and Computer Architecture.
      </p>

      <p>
        <strong>Bachelor of Technology, Computer Science and Engineering</strong><br />
        Andhra University, Andhra Pradesh, India<br />
        July 2012 – April 2016
      </p>

      <h2>Technical Expertise</h2>
      <p>My technical toolkit includes a diverse range of skills:</p>
      <ul>
        <li>Languages: Javascript, Python, Java, Go, C/C++, PL/SQL</li>
        <li>Web Technologies: JavaScript, Python, Java, Web Components, WebPack, HTML5, CSS3, React.js, Node.js, Flask, Springboot, NPM, Bash Scripts, Linux</li>
        <li>Browser Tools: Chrome extensions (Dev tools), Service workers, Lighthouse (Performance monitoring)</li>
        <li>Testing: Jest, karma, Jasmine</li>
        <li>Version Control: GIT, Bitbucket, CI/CD Pipeline</li>
        <li>Cloud: AWS, AWS Lambda (serverless), EC2, ECR, S3 Bucket, Kubernetes, Docker</li>
      </ul>

    </div>
 


        </>
      </div>
    </>
  );
};

export default About;
