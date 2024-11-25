import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  },[isInview,mainControls]);

  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_b5crtuj",
        "template_cjf0zmi",
        formRef.current,
        "r92KunO3zICs_p-Ty"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 ,ease:'easeIn'}}
      >
        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>upoudel888@gmail.com</h5>
                <a href="mailto:upoudel88@gmail.com">Send a message</a>
              </article>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <textarea
                placeholder="Your message"
                rows="7"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
