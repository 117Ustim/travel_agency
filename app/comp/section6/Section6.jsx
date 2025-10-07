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
        <h2 className={styles.subscribeTitle}>Get weekly inspiration and expert advice</h2>
        <p className={styles.subscribeSubtitle}>Sign up for our Weekly Newsletter</p>
        <div className={styles.subscribeFormRow}>
          <input className={styles.emailInput} type="email" placeholder="Email address" aria-label="Email address" />
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
