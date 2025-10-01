import Image from 'next/image';
import styles from './section5.module.css';

export default function Section5() {
  return (
    <section className={styles.section5}>
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
        <div className={styles.imageBox}>
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
        </div>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.
          </p>
          <button className={styles.ctaButton}>HELP ME PLAN A TRIP</button>
        </div>
      </div>
    </section>
  );
}