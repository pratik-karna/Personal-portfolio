import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import kickstart from "../assets/projects/kickstart.png";
import native from "../assets/projects/native.png";
import weather from "../assets/projects/weather.png";
import accident from "../assets/projects/accident.png";
import alexa from "../assets/projects/alexa.png";
import stock from "../assets/projects/stock.png";

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
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/pratik-karna/Ecommerce-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Website"
              description="Users of this weather app will find it quick and simple to access the most recent weather forecasts for any city in the world. It offers information on the current temperature, wind direction and speed, humidity levels, and other things, and users may search for cities by name or zip code. The programme also shows a map of the city's location and a seven-day prediction. The fact that the app is accessible in a variety of languages makes it helpful for tourists who need to know the weather conditions at their destination."
              ghLink="https://github.com/pratik-karna/Weather-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accident}
              isBlog={false}
              title="Accident-Detection-Alert-System"
              description="The Accident Detection Alert System is a tool used to immediately notify emergency services once an accident is detected. In order to identify the occurrence of an accident, the system continuously analyses the surroundings and employs a mix of sensors and algorithms. When a problem is found, the system notifies the appropriate emergency agencies, including the police, fire, and ambulance services, so they can offer prompt help. The system is typically coupled to a GPS system so that it can precisely determine the accident's location and dispatch the appropriate emergency personnel."
              ghLink="https://github.com/pratik-karna/Accident-Detection-Alert-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={native}
              isBlog={false}
              title="React-Native Application"
              description="Users may register and open accounts on this React Native application. It has a form where users may fill up their name, email address, password, and other pertinent information. The user can submit their information to establish their account after completing the form. Users of the app may access their accounts and log in from any device. The app also gives users the ability to adjust their settings, see their account history, and edit their profile. To guarantee that user data is kept safe and secure, the app also has a secure login system."
              ghLink="https://github.com/pratik-karna/Player-Registration-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alexa}
              isBlog={false}
              title="Alexa"
              description="Voice assistants are digital assistants that respond to voice commands and perform tasks such as playing music, setting reminders, and answering questions. These assistants use natural language processing (NLP) and speech recognition technologies to understand user commands and respond appropriately.
              Python is a popular programming language that is widely used in developing voice assistants. Python-pip is a package manager that allows easy installation of Python libraries, including those used in developing voice assistants."
              ghLink="https://github.com/kaviyapriyavkl/Voice-Assistance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Prediction"
              description="Stock price prediction refers to the use of various techniques and models to forecast the future movement of a stock's price. This is an important area of study for investors and traders who are looking to make profitable decisions in the stock market.There are many different factors that can influence the price of a stock, including market trends, economic indicators, news events, and company performance. Predicting how these factors will interact to affect a stock's price is a complex task, and there is no one-size-fits-all approach to stock price prediction."
              ghLink="https://github.com/pratik-karna/Stock-Prediction-Mechine-Learning"
            />
            </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
