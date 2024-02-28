import React, { useRef, useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Experience = () => {
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
      <section id="experience">
        <h5>The Skills I Have</h5>
        <h2>Skills</h2>
        <div className="container experience__container">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 ,ease:'easeIn'}}
          >
            <div className="experience__frontend">
              <h3>Front-end Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Typescript</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>JavaScript</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>HTML</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>CSS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>React</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>React-Native</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>SCSS</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Tailwind</h4>
                </article>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 ,ease:'easeIn'}}
          >
            <div className="experience__backend">
              <h3>Back-end Development</h3>
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Django</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Flask</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Fast API</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Node</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>PostgreSQL</h4>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>Git/GitHub</h4>
                </article>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
