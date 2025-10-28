"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./contactCard.module.css";

export default function ContactCard() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [buttonText, setButtonText] = useState("");
  const fullText = "Call me back";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Reset button text when component goes out of view
  useEffect(() => {
    if (!isInView) {
      setButtonText("");
    }
  }, [isInView]);

  // Typewriter effect for button text
  useEffect(() => {
    if (isInView && buttonText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setButtonText(fullText.slice(0, buttonText.length + 1));
      }, 150); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [isInView, buttonText, fullText]);

  return (
    // Карточка контактов по центру, прижатая к нижней части секции
    <div
      className={styles.contactCard}
      role="region"
      aria-labelledby="contact-card-title"
      ref={ref}
    >
      <motion.h3
        id="contact-card-title"
        className={styles.contactTitle}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.h3>
      <motion.form
        className={styles.contactForm}
        onSubmit={handleSubmit}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <label className={styles.visuallyHidden} htmlFor="contact-name">
          Name
        </label>
        <motion.input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Name"
          className={styles.contactInput}
          aria-label="Name"
          required
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <label className={styles.visuallyHidden} htmlFor="contact-phone">
          Phone
        </label>
        <motion.input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          className={styles.contactInput}
          aria-label="Phone"
          required
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />

        <motion.button
          type="submit"
          className={styles.contactButton}
          aria-label="Call me back"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className={styles.contactButtonText}>{buttonText}</span>
          {/* Декоративный элемент снизу по центру */}
          <span
            className={styles.contactButtonBottomDecor}
            aria-hidden="true"
          ></span>
        </motion.button>
      </motion.form>
    </div>
  );
}
