"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./carousel.module.css";

const items = [
  {
    id: 1,
    image: "/comp_1/carousel/image_carousel_1.png",
    country: "Austria",
    subtitleTop: "Winter Park Ski",
    subtitleMid: "Holiday",
    price: 1490,
    rating: 4.0,
  },
  {
    id: 2,
    image: "/comp_1/carousel/japan.jpg",
    country: "Japan",
    subtitleTop: "Niseko Powder",
    subtitleMid: "Holiday",
    price: 1890,
    rating: 5.0,
  },
  {
    id: 3,
    image: "/comp_1/carousel/peru.jpg",
    country: "Peru",
    subtitleTop: "Whistler Peak",
    subtitleMid: "Holiday",
    price: 1590,
    rating: 7.0,
  },
  {
    id: 4,
    image: "/comp_1/carousel/Croatia.jpg",
    country: "Croatia",
    subtitleTop: "Kitzbuhel Run",
    subtitleMid: "Holiday",
    price: 1390,
    rating: 8.0,
  },
  {
    id: 5,
    image: "/comp_1/carousel/Norway.jpg",
    country: "Norway",
    subtitleTop: "Lofoten Slopes",
    subtitleMid: "Holiday",
    price: 1720,
    rating: 6.0,
  },
  {
    id: 6,
    image: "/comp_1/carousel/Germany.jpg",
    country: "Germany",
    subtitleTop: "Lofoten Slopes",
    subtitleMid: "Holiday",
    price: 1310,
    rating: 6.0,
  },
  {
    id: 7,
    image: "/comp_1/carousel/Ukraine.jpg",
    country: "Ukraine",
    subtitleTop: "Lofoten Slopes",
    subtitleMid: "Holiday",
    price: 1720,
    rating: 6.0,
  },
];

export default function Carousel() {
  const trackRef = useRef(null);

  const allItems = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(`.${styles.card}`);
    if (cards.length === 0) return;
    const baseStart = cards[0].offsetLeft;
    const secondStart = cards[items.length].offsetLeft - baseStart;
    track.scrollLeft = secondStart; // стартуем с середины

    // выставить активную карточку при монтировании
    requestAnimationFrame(() => markActiveFirstVisible());
    return () => {
      // no-op cleanup
    };
  }, []);

  const clampLoopBounds = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(`.${styles.card}`);
    if (cards.length === 0) return;
    const baseStartLocal = cards[0].offsetLeft;
    const secondStartLocal = cards[items.length].offsetLeft - baseStartLocal;
    const thirdStartLocal = cards[items.length * 2].offsetLeft - baseStartLocal;
    const left = track.scrollLeft;
    if (left >= thirdStartLocal) {
      track.scrollLeft = left - secondStartLocal;
    } else if (left < secondStartLocal) {
      track.scrollLeft = left + secondStartLocal;
    }
  };

  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector(`.${styles.card}`);
    if (!firstCard) return;
    const cardRect = firstCard.getBoundingClientRect();
    const cs = window.getComputedStyle(track);
    const gapValue = cs.gap || cs.columnGap || "30px";
    const gap = parseFloat(gapValue) || 30;
    const delta = Math.round(cardRect.width + gap);
    track.scrollBy({ left: delta, behavior: "smooth" });
    window.setTimeout(clampLoopBounds, 450);
    window.setTimeout(markActiveFirstVisible, 470);
  };

  const markActiveFirstVisible = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(`.${styles.card}`));
    const trackRect = track.getBoundingClientRect();
    let firstVisible = null;
    for (const el of cards) {
      const r = el.getBoundingClientRect();
      if (r.right > trackRect.left + 15) {
        // учёт левого внутреннего отступа
        firstVisible = el;
        break;
      }
    }
    cards.forEach((el) => el.classList.remove(styles.active));
    if (firstVisible) firstVisible.classList.add(styles.active);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.track} ref={trackRef}>
        {allItems.map((item, idx) => (
          <div className={styles.card} key={`${item.id}-${idx}`}>
            <div className={styles.imageWrap}>
              <Image
                src={item.image}
                alt={item.country}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={idx >= items.length && idx < items.length + 3}
                loading={
                  idx >= items.length && idx < items.length + 3
                    ? undefined
                    : "lazy"
                }
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <div className={styles.cardBottom}>
              <div className={styles.leftBlock}>
                <div className={styles.countryRow}>
                  <span className={styles.countryIcon} />
                  <span className={styles.countryName}>{item.country}</span>
                </div>
                <div className={styles.lineText}>{item.subtitleTop}</div>
                <div className={styles.lineText}>{item.subtitleMid}</div>
                <div className={styles.from}>FROM</div>
                <div className={styles.price}>
                  <span className={styles.euro}>€</span>
                  {item.price}
                </div>
              </div>
              <div className={styles.rightBlock}>
                <div className={styles.ratingValue}>
                  {item.rating.toFixed(1)}
                </div>
                <div className={styles.rhombusCol}>
                  {Array.from({ length: 5 }).map((_, rIdx) => (
                    <img
                      src="/comp_1/carousel/rating.png"
                      alt="rating"
                      className={styles.ratingIcon}
                      key={rIdx}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.navNext}
        type="button"
        aria-label="Next"
        onClick={handleNext}
      >
        <span className={styles.navNextInner}>
          <span className={styles.arrowLine} aria-hidden></span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={styles.arrowSvg}
            aria-hidden
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
      </button>
    </div>
  );
}
