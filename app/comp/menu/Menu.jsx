"use client";

import Image from "next/image";
import styles from "./menu.module.css"
import { useState, useEffect } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // Функция для определения мобильного устройства и прокрутки
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
      if (window.innerWidth > 550) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Инициализация при загрузке
    handleResize();
    handleScroll();

    // Добавление слушателей событий
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Очистка слушателей при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Анимация меню через 3 секунды после загрузки
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 2000);

    return () => clearTimeout(animationTimer);
  }, []);

  // Переключение состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.menu} ${scrolled ? styles.scrolled : ''} ${isAnimated ? styles.animated : ''}`}>
      {isMobile && (
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''} ${isAnimated ? styles.animatedHamburger : ''}`} 
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''} ${isAnimated ? styles.animatedNavLinks : ''}`}>
        <a href="#" className={`${styles.navItem} ${isAnimated ? styles.animatedNavItem : ''}`}>Home</a>
        <a href="#" className={`${styles.navItem} ${isAnimated ? styles.animatedNavItem : ''}`}>Luxury packages</a>
        <a href="#" className={`${styles.navItem} ${isAnimated ? styles.animatedNavItem : ''}`}>Book with us</a>
        <a href="#" className={`${styles.navItem} ${isAnimated ? styles.animatedNavItem : ''}`}>Why Lux Trips</a>
        <a href="#" className={`${styles.navItem} ${isAnimated ? styles.animatedNavItem : ''}`}>Contact</a>
      </div>
      <div className={`${styles.blockButton} ${isAnimated ? styles.animatedBlockButton : ''}`}>
        
      <Image src="/button_menu/Subtract.png" alt="" fill sizes="(max-width: 768px) 100vw, 200px" className={styles.image1} />
<Image src="/button_menu/Layer 1.png" alt="" width={24} height={24} className={styles.image2} />
<Image src="/button_menu/Layer 3.png" alt="" width={24} height={24} className={styles.image3} />
       <button className={styles.callButton}>CALL ME</button> 
      </div>
      
    </nav>
  );
}