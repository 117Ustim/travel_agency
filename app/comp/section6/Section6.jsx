"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "./section6.module.css";

export default function Section6() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [buttonVisible, setButtonVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Start a trip request";

  // Reset button visibility and text when component goes out of view
  useEffect(() => {
    if (isInView) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
      setDisplayText("");
    }
  }, [isInView]);

  // Typewriter effect for button text
  useEffect(() => {
    if (buttonVisible && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [buttonVisible, displayText, fullText]);

  return (
    <section className={styles.section6} ref={ref}>
      <Image
        src="/comp_6/Rectangle_comp_6_1.png"
        alt="decorative shape"
        width={1083.11}
        height={778.96}
        className={styles.decorTopRight}
        priority
      />
      <Image
        src="/comp_6/Rectangle_comp_6_2.png"
        alt="decorative shape 2"
        width={720}
        height={518}
        className={styles.decorRight_2}
        priority
      />
      <Image
        src="/comp_6/Rectangle_comp_6_3.png"
        alt="decorative shape 3"
        width={720}
        height={518}
        className={styles.decorLeft_3}
        priority
      />
      <motion.div
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Customise your trip with us
      </motion.div>
      <div className={styles.block_row}>
        <motion.div
          className={styles.leftBlock}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.diamond}>1</div>
          <div className={styles.connector}></div>
          <div className={styles.diamond}>2</div>
          <div className={styles.connector}></div>
          <div className={styles.diamond}>3</div>
        </motion.div>
        <motion.div
          className={styles.rightBlock}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Describe your dream trip</h3>
            <p className={styles.infoText}>
              Let us know what your perfect vacation is. Destinations,
              preferences, and personal interests.
            </p>
          </div>
          <div className={styles.infoBlock}>
            <h3 className={`${styles.infoTitle} ${styles.infoTitleShort}`}>
              Get matched
            </h3>
            <p className={styles.infoText}>
              Our team will create perfect travel itinerary for you, based on
              your personalized needs and wishes.
            </p>
          </div>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Book your vacation</h3>
            <p className={styles.infoText}>
              Confirm your trip only when you are completely satisfied with the
              proposed travel plan.
            </p>
          </div>
        </motion.div>
        <motion.button
          className={styles.blockRowButton}
          initial={{ opacity: 0 }}
          animate={{ opacity: buttonVisible ? 1 : 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          {displayText}
          {displayText.length < fullText.length && (
            <span className={styles.cursor}>|</span>
          )}
        </motion.button>
      </div>
      {/* Subscribe card */}
      <div className={styles.subscribeCard}>
        <Image
          src="/comp_6/image_80.png"
          alt="Newsletter background"
          fill
          className={styles.subscribeCardImage}
          sizes="(max-width: 1110px) 100vw, 1110px"
          priority={false}
        />
        <span className={styles.subscribeCardIcon} aria-hidden="true"></span>
        <h2 className={styles.subscribeTitle}>
          Get weekly inspiration and expert advice
        </h2>
        <p className={styles.subscribeSubtitle}>
          Sign up for our Weekly Newsletter
        </p>
        <div className={styles.subscribeFormRow}>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button className={styles.subscribeButton} type="button">
            <span className={styles.subscribeButtonText}>Subscribe</span>
          </button>
        </div>
      </div>
      <Image
        src="/comp_6/img_button_comp_6.png"
        alt="bottom decorative"
        width={2114}
        height={1409}
        className={styles.bottomImage}
        quality={55}
        loading="lazy"
        sizes="100vw"
      />
      <div className={styles.line}></div>
    </section>
  );
}
