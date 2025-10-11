import Image from "next/image";
import styles from "./main.module.css"
import Menu from "../menu/Menu";

export default function Main() {
  return (
    <div className={styles.page}>

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
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      
      <div className={styles.title_1}>the world's most</div>
      <div className={styles.title_text_1}>extra ordinary</div>
      <div className={styles.title_text_2}>Places</div>
      <div className={styles.vector}></div>
      
      <div className={styles.backgroundImage_2}>
        <Image
          src="/bg_main_11.png"
          alt="Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
