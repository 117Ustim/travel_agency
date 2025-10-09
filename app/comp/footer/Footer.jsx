import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';


export default function Footer() {
  return (
    <section className={styles.footer}>
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
        <Link href="#" className={styles.navLink}>Luxury packages</Link>
        <Link href="#" className={styles.navLink}>Book with us</Link>
        <button type="button" className={styles.callButton} aria-label="Call my back">
          CALL MY BACK
        </button>
        <Link href="#" className={styles.navLink}>Why Lux Trips</Link>
        <Link href="#" className={styles.navLink}>Contact</Link>
      </nav>
      <div className={styles.copyright} aria-label="Copyright">
        © 2025 All Rights Reserved | Ustim
      </div>
    </section>
  );
}
