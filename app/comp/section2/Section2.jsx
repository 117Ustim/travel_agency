"use client";
import styles from './section2.module.css';
import Image from 'next/image';
import Section2Carousel from './Section2Carousel';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Section2() {
  // Реф для отслеживания видимости компонента при скролле
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // Варианты анимации для заголовка Luxury
  const luxuryTitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Варианты анимации для подзаголовка Packages
  const luxurySubtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Варианты анимации для кнопки
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Варианты анимации для контейнера карточек (desktop и mobile)
  const cardsContainerVariants = {
    hidden: { 
      opacity: 0, 
      x: 300 // Начальная позиция справа за пределами экрана
    },
    visible: { 
      opacity: 1, 
      x: 0, // Конечная позиция - на своём месте
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardsData = [
    {
      id: 1,
      image: '/comp_1/carousel/Norway.jpg',
      className: styles.card1,
      title: {
        line1: 'Experiences',
        line2: 'Away From',
        line3: 'Crowd'
      },
      diamond: {
        count: '22',
        places: 'places',
        
      }
    },
    {
      id: 2,
      image: '/comp_1/carousel/japan.jpg',
      className: styles.card2,
      title: {
        line1: "The world's most",
        line2: 'extraordinary',
        line3: 'places'
      },
      diamond: {
        count: '14',
        places: 'places',
        
      }
    },
    {
      id: 3,
      image: '/comp_1/carousel/Germany.jpg',
      className: styles.card3,
      title: {
        line1: 'Your health',
        line2: 'is matter',
        line3: ''
      },
      diamond: {
        count: '34',
        places: 'places',
        
      }
    },
    {
      id: 4,
      image: '/comp_1/carousel/Croatia.jpg',
      className: styles.card4,
      title: {
        line1: 'Best',
        line2: 'Winter',
        line3: 'Destinations'
      },
      diamond: {
        count: '34',
        places: 'places',
       
      }
    },
    {
      id: 5,
      image: '/comp_1/carousel/Ukraine.jpg',
      className: styles.card5,
      title: {
        line1: 'New',
        line2: 'destinations',
        line3: 'for 2022'
      },
      diamond: {
        count: '47',
        places: 'places',
       
      }
    }
  ];

  return (
    <section ref={ref} className={styles.section2} aria-label="Luxury Travel Packages">
      {/* Background Elements */}
      <div className={styles.backgroundImage} aria-hidden="true"></div>
      <div className={styles.blurredSpot} aria-hidden="true"></div>
      <div className={styles.centerImage} aria-hidden="true"></div>
      
      {/* Luxury Packages Block */}
      <div className={styles.luxuryBlock}>
        <motion.h2 
          className={styles.luxuryTitle}
          variants={luxuryTitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Luxury
        </motion.h2>
        <motion.div 
          className={styles.luxurySubtitle}
          variants={luxurySubtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2>Packages</h2>
          <motion.button 
            className={styles.viewAllButton} 
            aria-label="View all luxury packages"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            view all
          </motion.button>
        </motion.div>
      </div>
      
      {/* Cards Container with animation */}
      <motion.div 
        className={styles.cardsContainer} 
        role="region" 
        aria-label="Travel destination cards"
        variants={cardsContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Desktop Cards */}
        <div className={styles.desktopCards}>
          {cardsData.map((card) => (
            <article 
              key={card.id}
              className={`${styles.card} ${card.className}`} 
              style={{ backgroundImage: `url('${card.image}')` }}
              role="article"
              aria-labelledby={`card-title-${card.id}`}
            >
              <div 
                className={styles.verticalLabel}
                id={`card-title-${card.id}`}
              >
                <div>{card.title.line1}</div>
                <div>{card.title.line2}</div>
                <div>{card.title.line3}</div>
              </div>
              
              <div className={styles.diamondWrap}>
                <Image 
                  src="/comp_2/Vector2.png"
                  alt="Diamond background"
                  width={257}
                  height={135}
                  className={styles.diamondOuter}
                  priority={card.id <= 2}
                  quality={80}
                  
                />
                <div className={styles.diamondInner}>
                  <div className={styles.diamondContent}>
                    <div className={styles.count} aria-label={`${card.diamond.count} ${card.diamond.places}`}>
                      {card.diamond.count}
                    </div>
                    <div className={styles.places}>{card.diamond.places}</div>
                    <div className={styles.arrow_block}>
                      <span className={styles.arrow} aria-hidden="true">
                        <span className={styles.arrowLine}></span>
                        <svg 
                          width="15" 
                          height="15" 
                          viewBox="0 0 24 24" 
                          className={styles.arrowSvg}
                          aria-hidden="true"
                        >
                          <path 
                            d="M9 6l6 6-6 6" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className={styles.mobileCarousel}>
          <Section2Carousel />
        </div>
      </motion.div>
    </section>
  );
}