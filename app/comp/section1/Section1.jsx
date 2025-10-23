"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./section1.module.css"
import Carousel from "./Carousel/Carousel";


export default function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.4 });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
          >
            Top Rated
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.4 
            }}
          >
            Experiences
          </motion.div>
        </div>
        <div className={styles.continents}>
          <span>World</span>
          <span>Africa</span>
          <span>Asia</span>
          <span>Europe</span>
          <span>North America</span>
          <span>South America</span>
          <span>Antarctica</span>
          <span>Australia</span>
        </div>

        <motion.div
          className={styles.rhombusContainer}
          initial={{ 
            scale: 0.3, 
            opacity: 0,
            z: -100
          }}
          animate={isInView ? { 
            scale: 1, 
            opacity: 1,
            z: 0
          } : { 
            scale: 0.3, 
            opacity: 0,
            z: -100
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.6 // Появляется после слов
          }}
          style={{ perspective: 1000 }}
        >
          <Image
            className={styles.rhombus}
            src="/comp_1/rhombus.png"
            width={112}
            height={212}
            alt="rhombus"
            loading="lazy"
            quality={85}
          />
        </motion.div>
      </div>
      
      <div className={styles.carouselWrap}>
        <Carousel />
      </div>
        
    </div>
);
}