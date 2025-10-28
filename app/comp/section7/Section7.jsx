"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./section7.module.css";
import Carousel from "../card/Carousel";
import ContactCard from "./ContactCard";

export default function Section7() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  return (
    <section ref={ref} className={styles.section7}>
      <h2 className={styles.title}>
        <motion.span
          initial={{ x: 200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          Customers{" "}
        </motion.span>
        <motion.span
          initial={{ x: -200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          reviews
        </motion.span>
      </h2>
      <Image
        src="/comp_1/rhombus.png"
        alt="Decorative rhombus"
        width={112}
        height={212}
        priority
        className={styles.rhombus}
      />

      <Carousel />
      <div className={styles.gradient}></div>
      <Image
        src="/comp_7/Rectangle_11.png"
        alt="Section bottom decoration"
        width={1584}
        height={1034}
        className={styles.bottomImage}
        priority
      />
      <ContactCard />
    </section>
  );
}
