import React from 'react';
import Image from 'next/image';
import styles from './section3.module.css';

export default function Section3 () {
  // Данные для карточек
  const cardsData = [
    {
      id: 1,
      image: '/comp_3/book_1.png',
      title: 'Adventure'
    },
    {
      id: 2,
      image: '/comp_3/book_2.png',
      title: 'Discovery'
    },
    {
      id: 3,
      image: '/comp_3/book_3.png',
      title: 'Exploration'
    },
    {
      id: 4,
      image: '/comp_3/book_4.png',
      title: 'Journey'
    },
    {
      id: 5,
      image: '/comp_3/book_5.png',
      title: 'Expedition'
    },
    {
      id: 6,
      image: '/comp_3/book_6.png',
      title: 'Voyage'
    }
  ];

  return (
    <section className={styles.section3}>
     
      <div className={styles.container}>

        <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>Book</h1>
        <h2 className={styles.subTitle}>With Us</h2>
         <div className={styles.rhombusContainer}>
        <Image 
          src="/comp_1/rhombus.png" 
          alt="Rhombus" 
          width={112} 
          height={212} 
          className={styles.rhombus}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div> 
      </div>

      <div className={styles.cardsContainer}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image 
                src={card.image} 
                alt={card.title} 
                width={200} 
                height={150} 
                className={styles.cardImage}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className={styles.smallRhombus}></div>
            </div>
          </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};


