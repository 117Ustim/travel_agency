"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "./section3.module.css";

export default function Section3() {
  // Создаем ref для отслеживания видимости компонента
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Данные для карточек
  const cardsData = [
    {
      id: 1,
      image: "/comp_3/book_1.png",
      title: "Adventure",
    },
    {
      id: 2,
      image: "/comp_3/book_2.png",
      title: "Discovery",
    },
    {
      id: 3,
      image: "/comp_3/book_3.png",
      title: "Exploration",
    },
    {
      id: 4,
      image: "/comp_3/book_4.png",
      title: "Journey",
    },
    {
      id: 5,
      image: "/comp_3/book_5.png",
      title: "Expedition",
    },
    {
      id: 6,
      image: "/comp_3/book_6.png",
      title: "Voyage",
    },
  ];

  // Варианты анимации для карточек
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.section3} ref={ref}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <motion.h1
            className={styles.mainTitle}
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -70, opacity: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          >
            Book
          </motion.h1>
          <motion.h2
            className={styles.subTitle}
            initial={{ opacity: 0, scale: 1 }}
            animate={
              isInView
                ? { opacity: 1, scale: [1, 1.3, 1] }
                : { opacity: 0, scale: 1 }
            }
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 1, times: [0, 0.5, 1] },
            }}
          >
            With Us
          </motion.h2>
          <motion.div
            className={styles.rhombusContainer}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Image
              src="/comp_1/rhombus.png"
              alt="Rhombus"
              width={112}
              height={212}
              className={styles.rhombus}
              quality={85}
            />
          </motion.div>
        </div>

        <div className={styles.cardsContainer}>
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                delay: index * 0.1, // Staggered delay for each card
              }}
            >
              <div className={styles.cardImageContainer}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={150}
                  className={styles.cardImage}
                  quality={80}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.vectorContainer}>
                <Image
                  src="/comp_2/Vector2.png"
                  alt="Vector"
                  width={100}
                  height={50}
                  className={styles.vectorImage}
                  quality={80}
                />
                <div className={styles.smallRhombus}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
