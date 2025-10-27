'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from './section5.module.css';

// Component for animating text letter by letter
const AnimatedText = ({ text, delay = 0, isInView }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Section5() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  // Animation variants for imageBox and diamonds
  const imageBoxVariants = {
    hidden: { 
      x: -300,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4, 
        ease: "easeOut",
       
      }
    }
  };
  
  // Animation variants for text block
  const textBlockVariants = {
    hidden: { 
      x: 300,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4, 
        ease: "easeOut",
        delay: 0.5 
      }
    }
  };
  
  // Animation variants for CTA button (fade in only, no movement)
  const buttonVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.section5} ref={ref}>
      <div className={styles.contentRow}>
        <Image
          className={styles.cloudLeft}
          src="/comp_5/cloud_img__5_2.png"
          alt="decorative cloud left"
          width={639}
          height={460}
          priority
        />
        <Image
          className={styles.cloudRight}
          src="/comp_5/cloud_img_5.png"
          alt="decorative cloud"
          width={945}
          height={354}
          priority
        />
        <motion.div
          className={styles.imageBox}
          variants={imageBoxVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/comp_5/comp_img_5.png"
            alt="travel inspiration"
            fill
            sizes="(max-width: 480px) 72vw, (max-width: 600px) 60vw, (max-width: 1200px) 244px, 244px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.diamondRight}></div>
          <div className={styles.diamondBottom}></div>
        </motion.div>
        <motion.div
          className={styles.textBlock}
          variants={textBlockVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className={styles.text}>
            We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.
          </p>
          <motion.button 
            className={styles.ctaButton}
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AnimatedText text="HELP ME PLAN A TRIP" delay={1} isInView={isInView} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}