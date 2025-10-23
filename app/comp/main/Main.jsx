"use client";
import Image from "next/image";
import styles from "./main.module.css"
import Menu from "../menu/Menu";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  // Создаем ref для отслеживания видимости компонента
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Анимация будет срабатывать каждый раз при появлении
    margin: "-100px 0px" // Анимация начнется когда элемент будет на 100px от края viewport
  });

  return (
    <div className={styles.page} ref={ref}>

<div className={styles.menu}>
       <Menu /> 
      </div>

      <div className={styles.backgroundImage_1}>
        <Image
          src="/bg_main_44.png"
          alt="Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={75}
          
        />
      </div>
      
      <div className={styles.title_1}>the world's most</div>
      <motion.div 
        className={`${styles.title_text_1} ${styles.motion}`}
        initial={{ 
          y: -200, // Начальная позиция выше финальной
          opacity: 0 
        }}
        animate={isInView ? { 
          y: 0, // Финальная позиция
          opacity: 1 
        } : {
          y: -200,
          opacity: 0
        }}
        transition={{ 
          duration: 1.2, // Длительность анимации
          ease: "easeOut", // Плавное замедление
          delay: 0.2 // Первая анимация - минимальная задержка
        }}
      >
        extra ordinary
      </motion.div>
      <motion.div 
        className={`${styles.title_text_2} ${styles.motion}`}
        initial={{ 
          scale: 0.3, // Начальный масштаб (эффект глубины)
          opacity: 0,
          z: -100 // Эффект глубины через z-координату
        }}
        animate={isInView ? { 
          scale: 1, // Финальный масштаб
          opacity: 1,
          z: 0 // Финальная позиция по z
        } : {
          scale: 0.3,
          opacity: 0,
          z: -100
        }}
        transition={{ 
          duration: 1.5, // Длительность анимации
          ease: "easeOut", // Плавное замедление
          delay: 1.0 // Вторая анимация - после завершения первой
        }}
      >
        Places
      </motion.div>
      <motion.div 
        className={`${styles.vector} ${styles.motion}`}
        initial={{ 
          scale: 0, // Начальный размер - невидимый
          opacity: 0,
          rotate: 45 // Начальный поворот
        }}
        animate={isInView ? { 
          scale: 1, // Финальный размер
          opacity: 1,
          rotate: 0 // Финальный поворот
        } : {
          scale: 0,
          opacity: 0,
          rotate: 45
        }}
        transition={{ 
          duration: 1.0, // Длительность анимации
          ease: "easeOut", // Плавное замедление
          delay: 1.5 // Третья анимация - после завершения второй
        }}
      ></motion.div>
      
      <div className={styles.backgroundImage_2}>
        <Image
          src="/bg_main_11.png"
          alt="Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          quality={75}
          
          
        />
      </div>
     
      <div className={styles.backgroundImage_3}>
        <Image
          src="/bg_main_22.png"
          alt="Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          quality={75}
         
         
        />
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.find_block}>
      <div className={styles.rectangle_10}>
      <Image
          src="/rectangle/rec_10.png"
          alt="Background"
          fill
          sizes="(max-width: 768px) 90vw, 600px"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          quality={80}
        /> 
      </div>
      <div className={styles.rectangle_20}>
      <Image
          src="/rectangle/rec_20.png"
          alt="Background"
          fill
          sizes="(max-width: 768px) 90vw, 600px"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          quality={80}
        />
      
      </div>
      <div className={styles.rectangle_30}></div>
      
      
       <div className={styles.rectangle_30_text}>find your journey</div> 
      <div className={styles.rectangle}>
        
        <div className={styles.rectCol}>
          <div className={styles.rectHeader}>
            <Image src="/rectangle/icon_rectangle/icon_1.png" alt="Destination" width={9} height={17} quality={90} />
            <span className={styles.rectTitle}>Destination</span>
          </div>
          <div className={styles.rectSub}>Where are you going?</div>
        </div>

        <div className={styles.rectCol}>
          <div className={styles.rectHeader}>
            <Image src="/rectangle/icon_rectangle/icon_2.png" alt="Travel type" width={16} height={16} quality={90} />
            <span className={styles.rectTitle}>Travel type</span>
          </div>
          <div className={styles.rectSub}>Adventure Travel</div>
        </div>

        <div className={styles.rectCol}>
          <div className={styles.rectHeader}>
            <Image src="/rectangle/icon_rectangle/icon_3.png" alt="When" width={16} height={15} quality={90} />
            <span className={styles.rectTitle}>When</span>
          </div>
          <div className={styles.rectSub}>14 Dec 2022</div>
        </div>

        <div className={styles.rectCol}>
          <div className={styles.rectHeader}>
            <Image src="/rectangle/icon_rectangle/icon_4.png" alt="Travellers" width={15} height={16} quality={90} />
            <span className={styles.rectTitle}>Travellers</span>
          </div>
          <div className={styles.rectSub}>2 Persons</div>
        </div>

        <button type="button" className={styles.findButton}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.findIcon}>
            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C15.99 6.01 12.98 3 9.5 3S3 6.01 3 9.5 6.01 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          FIND
        </button>
      </div>
      </div>
      
    </div>
  );
}