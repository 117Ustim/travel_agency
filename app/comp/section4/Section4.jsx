import React from 'react';
import Image from 'next/image';
import styles from './section4.module.css';

export default function Section4() {
  return (
    <section className={styles.section4}>
  <div className={styles.content}>
      <div className={styles.contentInner}>
        <div className={styles.leftCol}>
          <h2 className={styles.whyTitle}>Why</h2>
          <div className={styles.luxTrips}>Lux Trips</div>
        </div>
        <p className={styles.rightText}>
          Explore refined escapes crafted for discerning travelers. From curated
          itineraries to bespoke experiences, discover why our approach to
          luxury travel stands apart.
        </p>
      </div>
    </div>
    <div className={styles.gradient}></div>
    <div className={styles.bgMont}>
      <Image
        src="/comp_4/bg_mont.png"
        alt="mountain"
        fill
        sizes="100vw"
        className={styles.bgMontImage}
        priority
      />
    </div>
    {/* Floating fixed-position images */}
    <div className={styles.floatingImages}>
      <div className={styles.imgOne}>
        <Image
          src="/comp_4/comp_img_1.png"
          alt="decorative 1"
          width={138}
          height={308}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.imgTwo}>
        <Image
          src="/comp_4/comp_img_2.png"
          alt="decorative 2"
          width={76}
          height={184}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.imgThree}>
        <Image
          src="/comp_4/comp_img_3.png"
          alt="decorative 3"
          width={145}
          height={323}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
    
    </section>
  );
}


