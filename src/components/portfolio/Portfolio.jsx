import React, { useRef, useEffect } from "react";
import IMG1 from "../../assets/baghchal.png";
import IMG2 from "../../assets/ez-crossword.png";
import IMG3 from "../../assets/monument-lens.png";
import IMG4 from "../../assets/2048.png";
import IMG5 from "../../assets/analogClock.gif";
import IMG6 from "../../assets/productivity.png";
import { motion, useAnimation, useInView } from "framer-motion";

import "./portfolio.css";

const Portfolio = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  });

  const soloProjects = [
    {
      id: 1,
      title: "Baghchal",
      img: IMG1,
      description:
        "Bagchal (Baghchal / Tiger and Goat game) is a traditional Nepalese board game. It is a two player Board game. As acclaimed, back in the days it was played by hearders as a passtime while grazing cattles.",
      technologies: "Javascript | React",
      link: "https://www.ujjwalpaudel1.com.np/",
      github: "https://github.com/upoudel888/baghchal",
    },
    {
      id: 2,
      title: "EZ-Crossword",
      img: IMG2,
      description:
        "EZ-crossword is the ultimate destination for crossword enthusiasts, offering seamless solutions for solving challenging puzzles or creating personalized ones.",
      technologies: "Django | FastAPI",
      link: "https://ez-crossword.vercel.app/",
      github: "https://github.com/upoudel888/EZ-Crossword",
    },
    {
      id: 3,
      title: "Monument Lens",
      img: IMG3,
      description:
        "Monument Lens revolutionizes sightseeing in Kathmandu Valley with AI-powered recognition of iconic landmarks from user-submitted images. Seamlessly identify monuments from the three Durbar Squares, enhancing your exploration experience effortlessly.",
      technologies: "Django | Gradio | Flutter ",
      link: "https://huggingface.co/spaces/Ujjwal123/detectMonument",
      github:
        "https://huggingface.co/spaces/Ujjwal123/detectMonument/tree/main",
    },
    {
      id: 4,
      title: "2048 Number Game",
      img: IMG4,
      description:
        "2048 Number Game is the addictive puzzle sensation that challenges players to merge tiles and reach the elusive 2048 tile. With simple yet engaging gameplay, immerse yourself in the quest for numerical mastery.",
      technologies: "JavaScript | React | CSS",
      link: "https://github.com/upoudel888/2048NumberGame",
      github: "https://upoudel888.github.io/2048NumberGame/",
    },
    {
      id: 5,
      title: "Productivity Companion",
      img: IMG6,
      description:
        "Seamlessly integrating essential practices like to-do listing, session tracking, task scheduling, Pomodoro technique, and focused music study, this all-in-one application empowers scholars worldwide to optimize their workflow and achieve their goals with ease.",
      technologies: "C++ | SFML",
      link: "https://github.com/upoudel888/Productivity-Companion",
      github: "https://github.com/upoudel888/Productivity-Companion",
    },
    {
      id: 6,
      title: "Analog Clock",
      img: IMG5,
      description:
        "A 3D model of a wall clock that mirrors local time of the computer. This project was coded in C++ using openGL and freeGLUT",
      technologies: "C++ | openGL | GLUT",
      link: "https://github.com/upoudel888/Analog-Clock",
      github: "https://github.com/upoudel888/Analog-Clock",
    },
  ];

  return (
    <div ref={ref}>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {soloProjects.map((pro) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.5,ease:'easeIn' }}
            >
              <article className="portfolio__item" key={pro.id}>
                <div className="portfolio__item-image">
                  <img src={pro.img} alt={pro.title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
