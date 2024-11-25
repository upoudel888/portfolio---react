import React, { useRef, useEffect } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Header = () => {
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
        <header id="home">
          <div className="container header__container">
            <h4>Hello I'm</h4>
            <h1>Ujjwal Paudel</h1>
            <h4 className="text-light">Computer Engineer &nbsp;|&nbsp; Full-stack Developer &nbsp;|&nbsp; AI-ML enthusiast</h4>
            <CTA />
            <a href="#contact" className="scroll__down">
              Scroll Down
            </a>
            <HeaderSocials />
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default Header;
