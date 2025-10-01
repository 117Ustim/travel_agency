import Image from 'next/image';
import styles from './section6.module.css';

export default function Section6() {
  return (
    <section className={styles.section6}>
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
      <div className={styles.title}>Customise your trip with us</div>
      <div className={styles.block_row}>
        <div className={styles.leftBlock}>
          <div className={styles.diamond}>1</div>
          <div className={styles.connector}></div>
          <div className={styles.diamond}>2</div>
          <div className={styles.connector}></div>
          <div className={styles.diamond}>3</div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Describe your dream trip</h3>
            <p className={styles.infoText}>
              Let us know what your perfect vacation is. Destinations, preferences, and personal interests.
            </p>
          </div>
          <div className={styles.infoBlock}>
            <h3 className={`${styles.infoTitle} ${styles.infoTitleShort}`}>Get matched</h3>
            <p className={styles.infoText}>
              Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.
            </p>
          </div>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Book your vacation</h3>
            <p className={styles.infoText}>
              Confirm your trip only when you are completely satisfied with the proposed travel plan.
            </p>
          </div>
        </div>
        <button className={styles.blockRowButton}>Start a trip request</button>
      </div>
    </section>
  );
}
