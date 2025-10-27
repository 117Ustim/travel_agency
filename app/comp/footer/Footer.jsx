'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './footer.module.css';

export default function Footer() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false , margin: "100px" });

  // Pulse animation for the call button
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  // Animation variants for nav links
  const linkVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.footer} ref={ref}>
      <div className={styles.gradientOverlay} aria-hidden="true" />
      <div className={styles.imagesWrapper}>
        <Image
          src="/footer/sky_img.png"
          alt="img"
          width={1440}
          height={960}
          priority
          className={styles.footerImage}
        />
        <Image
          src="/footer/footer_img.png"
          alt="footer"
          width={1440}
          height={960}
          className={styles.footerImage}
        />
      </div>
      <nav className={styles.footerNav} aria-label="Footer navigation">
        {/* ссылки на другие страницы */}
        <motion.div
          variants={linkVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <Link href="#" className={styles.navLink}>Luxury packages</Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <Link href="#" className={styles.navLink}>Book with us</Link>
        </motion.div>
        <motion.button 
          type="button" 
          className={styles.callButton} 
          aria-label="Call my back"
          initial={{ scale: 1 }}
          animate={isInView ? pulseAnimation : { scale: 1 }}
        >
          CALL MY BACK
        </motion.button>
        <motion.div
          variants={linkVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <Link href="#" className={styles.navLink}>Why Lux Trips</Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <Link href="#" className={styles.navLink}>Contact</Link>
        </motion.div>
      </nav>
      <div className={styles.copyright} aria-label="Copyright">
        © 2025 All Rights Reserved | Ustim
      </div>
    </section>
  );
}