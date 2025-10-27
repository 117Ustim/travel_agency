'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from './section4.module.css';

export default function Section4() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Create a motion-enabled Image component
  const MotionImage = motion(Image);
  
  // Animation properties for the diamonds (appear 1 second earlier)
  const diamondAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { duration: 0.1, ease: "easeOut" , delay: 1}
  };
  
  // Animation properties for the images (delayed by 1 second)
  const imageAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { duration: 0.3, ease: "easeOut", delay: 1 }
  };
  
  return (
    <section className={styles.section4} ref={ref}>
      <div className={styles.backgroundImage}></div>
      <MotionImage 
        src="/comp_4/comp_img_1.png" 
        alt="Travel image" 
        width={138} 
        height={308}
        className={styles.leftImage}
        priority
        {...imageAnimationProps}
      />
      <div className={styles.heroBlock}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          Why  Lux Trips
        </motion.h1>
        <motion.p 
          className={styles.description}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: isInView ? 0 : 100, 
            opacity: isInView ? 1 : 0 
          }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine.
        </motion.p>
      </div>
      <MotionImage 
        src="/comp_4/comp_img_3.png" 
        alt="Travel image right" 
        width={144.65} 
        height={323.05}
        className={styles.rightImage}
        priority
        {...imageAnimationProps}
      />
      <MotionImage 
        src="/comp_4/comp_img_2.png" 
        alt="Travel image additional" 
        width={72.8} 
        height={162.59}
        className={styles.additionalImage}
        priority
        {...imageAnimationProps}
      />
      <div className={styles.diamond}>
        
      </div>
      <motion.div {...diamondAnimationProps}>
        <div className={styles.smallDiamond}></div>
      </motion.div>
      <motion.div {...diamondAnimationProps}>
        <div className={styles.rightSmallDiamond}></div>
      </motion.div>
      <motion.div {...diamondAnimationProps}>
        <div className={styles.additionalSmallDiamond}></div>
      </motion.div>
      <div className={styles.bottomBlock}>
        <h2 className={styles.bottomTitle}>Exclusive knowledge to provide the best of the best to clients</h2>
        <p className={styles.bottomText}>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning.</p>
      </div>
     
    </section>
  );
}