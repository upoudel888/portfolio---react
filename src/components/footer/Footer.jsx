import React, { useRef, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  });

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 ,ease:'easeIn'}}
      >
        <a href="#home" className="footer__logo">
          Ujjwal Paudel
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/ujjwal-paudel"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/upoudel888"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/lawjju_p/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Ujjwal {getYear()}. All rights reserved.</small>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
