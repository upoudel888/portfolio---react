import React, { useRef, useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/profilepic.jpg";
import "./intro.css";

import { motion, useAnimation, useInView } from "framer-motion";

const Intro = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  });

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25,ease:'easeIn' }}
      >
        <section id="about">
          <h5>My Introduction</h5>
          <h2>About Me</h2>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="Ujjwal Paudel" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>1+ year</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>10+ Completed Projects</small>
                </article>
              </div>
              <ul className="my-proficiency">
                <li>
                  - &nbsp;Skilled Computer Engineering student specializing in
                  Full Stack Web Development with expertise in React for
                  front-end and Django for back-end.
                </li>
                <li>
                  - &nbsp;Experienced in game development, I thrive on crafting
                  immersive experiences and optimizing performance using React
                  and React Native.
                </li>
                <li>
                  - &nbsp; Fascinated by AI/ML, I'm eager to explore innovative
                  applications and contribute to cutting-edge projects. <br />
                  <br />
                  Let's connect and collaborate on exciting ventures!
                </li>
              </ul>

              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Intro;
