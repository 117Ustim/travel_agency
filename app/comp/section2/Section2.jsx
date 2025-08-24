import styles from './section2.module.css';
import Image from 'next/image';
import Section2Carousel from './Section2Carousel';

export default function Section2() {
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
    <section className={styles.section2} aria-label="Luxury Travel Packages">
      {/* Background Elements */}
      <div className={styles.backgroundImage} aria-hidden="true"></div>
      <div className={styles.blurredSpot} aria-hidden="true"></div>
      <div className={styles.centerImage} aria-hidden="true"></div>
      
      {/* Luxury Packages Block */}
      <div className={styles.luxuryBlock}>
        <h2 className={styles.luxuryTitle}>Luxury</h2>
        <div className={styles.luxurySubtitle}>
          <h3>Packages</h3>
          <button className={styles.viewAllButton} aria-label="View all luxury packages">
            view all
          </button>
        </div>
      </div>
      
      {/* Cards Container */}
      <div className={styles.cardsContainer} role="region" aria-label="Travel destination cards">
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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
      </div>
    </section>
  );
}
