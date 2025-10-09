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
     <div className={styles.vector}></div>
  
    
    <div className={styles.floatingImages}>
      <div className={styles.imgOne}>
        <Image
          src="/comp_4/comp_img_1.png"
          alt="decorative 1"
          fill
          sizes="(max-width: 480px) 90px, (max-width: 768px) 105px, (max-width: 1000px) 118px, 138px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.imageVector}></div>
      </div>
      <div className={styles.imgTwo}>
        <Image
          src="/comp_4/comp_img_2.png"
          alt="decorative 2"
         fill
         sizes="(max-width: 768px) 0px, (max-width: 1000px) 66px, 76px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.imageVector}></div>
      </div>
      <div className={styles.imgThree}>
        <Image
          src="/comp_4/comp_img_3.png"
          alt="decorative 3"
          fill
          sizes="(max-width: 480px) 100px, (max-width: 768px) 110px, (max-width: 1000px) 125px, 145px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.imageVector}></div>
      </div>
    </div>
     {/* Новый блок с заголовком и текстом */}
    <div className={styles.exclusiveKnowledge}>
      <h2 className={styles.exclusiveTitle}>
        Exclusive knowledge to provide the best of the best to clients
      </h2>
      <p className={styles.exclusiveText}>
        Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning.
      </p>
    </div>

    {/* Новая секция с изображением, текстом и кнопкой */}
    <div className={styles.planningSection}>
      {/* <div className={styles.planningImage}>
        <Image
          src="/comp_4/comp_img_3.png"
          alt="Planning image"
         fill
         sizes='(max-width: 650px) 280px, 320px'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}
      <div className={styles.planningContent}>
        <p className={styles.planningText}>
          We craft and plan unique itineraries tailored to customers' interests and with strong attention to detail.
        </p>
        <button className={styles.planningButton}>
          HELP MY PLAN A TRIP
        </button>
      </div>
      <div className={styles.cloudImage}>
        <Image
          src="/comp_5/cloud_img_5.png"
          alt="Cloud decoration"
          fill
          sizes="850px"
          className={styles.cloudImg}
        />
      </div>
    </div>

    </section>
  );
}


