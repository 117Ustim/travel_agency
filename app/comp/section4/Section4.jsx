import React from 'react';
import Image from 'next/image';
import styles from './section4.module.css';

export default function Section4() {
  return (
    <section className={styles.section4}>
      <div className={styles.backgroundImage}></div>
      <Image 
        src="/comp_4/comp_img_1.png" 
        alt="Travel image" 
        width={138} 
        height={308}
        className={styles.leftImage}
        priority
      />
      <div className={styles.heroBlock}>
        <h1 className={styles.title}>Why  Lux Trips</h1>
        <p className={styles.description}>
          As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine.
        </p>
      </div>
      <Image 
        src="/comp_4/comp_img_3.png" 
        alt="Travel image right" 
        width={144.65} 
        height={323.05}
        className={styles.rightImage}
        priority
      />
      <Image 
        src="/comp_4/comp_img_2.png" 
        alt="Travel image additional" 
        width={72.8} 
        height={162.59}
        className={styles.additionalImage}
        priority
      />
      <div className={styles.diamond}>
        
      </div>
      <div className={styles.smallDiamond}></div>
      <div className={styles.rightSmallDiamond}></div>
      <div className={styles.additionalSmallDiamond}></div>
      <div className={styles.bottomBlock}>
        <h2 className={styles.bottomTitle}>Exclusive knowledge to provide the best of the best to clients</h2>
        <p className={styles.bottomText}>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning.</p>
      </div>
     
    </section>
  );
}


