import Image from "next/image";
import styles from "./section1.module.css"
import Carousel from "./Carousel/Carousel";


export default function Section1() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>Top Rated</div>
          <div>Experiences</div>
        </div>
        <div className={styles.continents}>
          <span>World</span>
          <span>Africa</span>
          <span>Asia</span>
          <span>Europe</span>
          <span>North America</span>
          <span>South America</span>
          <span>Antarctica</span>
          <span>Australia</span>
        </div>

        <Image
        className={styles.rhombus}
        src="/comp_1/rhombus.png"
        width={112}
        height={212}
        alt="rhombus"
        loading="lazy"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      </div>
      
      <div className={styles.carouselWrap}>
        <Carousel />
      </div>
        
    </div>
);
}