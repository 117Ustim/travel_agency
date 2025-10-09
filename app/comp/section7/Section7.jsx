import Image from 'next/image';
import styles from './section7.module.css';
import Carousel from '../card/Carousel';
import ContactCard from './ContactCard';

export default function Section7() {
  return (
    <section className={styles.section7}>
      <h2 className={styles.title}>Customers reviews</h2>
      <Image
        src="/comp_1/rhombus.png"
        alt="Decorative rhombus"
        width={112}
        height={212}
        priority
        className={styles.rhombus}
      />
    
      <Carousel/>
      <div className={styles.gradient}></div>
      <Image
        src="/comp_7/Rectangle_11.png"
        alt="Section bottom decoration"
        width={1584}
        height={1034}
        className={styles.bottomImage}
        priority
      />
      <ContactCard/>
      {/* <div className={styles.gradient_2}></div> */}
    </section>
  );
}
