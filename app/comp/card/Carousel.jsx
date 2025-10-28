"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./carousel.module.css";

const items = [
  {
    id: 1,
    avatar: "/comp_7/image_11.jpg",
    quote:
      "Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team",
    name: " - Eduard Hand",
    surname: "Müller-Egerer",
  },
  {
    id: 2,
    avatar: "/comp_7/image_12.jpg",
    quote:
      "Fantastic planning and clear communication. We felt supported at every step. The itinerary matched our wishes perfectly.",
    name: " - Leila Rahman",
    surname: "Al-Basri",
  },
  {
    id: 3,
    avatar: "/comp_7/image_13.jpg",
    quote:
      "Great coordination and friendly guidance. Hotels and transfers were seamless. We truly enjoyed our vacation.",
    name: " - Marco Silva",
    surname: "Pereira",
  },
  {
    id: 4,
    avatar: "/comp_7/image_16.jpg",
    quote:
      "Everything was smooth and well-prepared. The team responded quickly and accommodated our last-minute changes.",
    name: " - Ananya Das",
    surname: "Mukherjee",
  },
  {
    id: 5,
    avatar: "/comp_7/image_14.jpg",
    quote:
      "Thoughtful details and excellent service. Our guide was knowledgeable and the schedule balanced. Highly recommend!",
    name: " - Jonas Weber",
    surname: "Schmidt",
  },
  {
    id: 6,
    avatar: "/comp_7/image_15.jpg",
    quote:
      "Memorable experience from start to finish. Clear briefings and responsive support made it easy and enjoyable.",
    name: " - Sara Cohen",
    surname: "Levy",
  },
  {
    id: 7,
    avatar: "/comp_7/image_17.jpg",
    quote:
      "Well-structured trip with great care for comfort. The team listened and delivered exactly what we asked for.",
    name: " - Nikos Papas",
    surname: "Karamanlis",
  },
];

export default function Carousel() {
  const trackRef = useRef(null);
  const rootRef = useRef(null);

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

  const handleGoTo = (targetIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(`.${styles.card}`);
    if (cards.length === 0) return;
    const baseStart = cards[0].offsetLeft;
    const targetCard = cards[items.length + targetIndex];
    if (!targetCard) return;
    const targetLeft = targetCard.offsetLeft - baseStart;
    track.scrollTo({ left: targetLeft, behavior: "smooth" });
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

    // sync nav bars
    const root = rootRef.current || track.parentElement;
    if (root) {
      const bars = root.querySelectorAll(`.${styles.navBar}`);
      bars.forEach((bar) => bar.classList.remove(styles.navBarActive));
      if (firstVisible) {
        const idx = Number(firstVisible.getAttribute("data-idx")) || 0;
        const activeBar = root.querySelector(
          `.${styles.navBar}[data-idx="${idx}"]`
        );
        if (activeBar) activeBar.classList.add(styles.navBarActive);
      }
    }
  };

  return (
    <div className={styles.carousel} ref={rootRef}>
      <div className={styles.track} ref={trackRef}>
        {allItems.map((item, idx) => (
          <div
            className={styles.card}
            key={`${item.id}-${idx}`}
            data-idx={idx % items.length}
          >
            <span className={styles.cardTopIcon} aria-hidden></span>
            <div className={styles.avatarWrap}>
              <Image
                src={item.avatar}
                alt={item.name}
                width={100}
                height={100}
                className={styles.avatar}
                priority={idx >= items.length && idx < items.length + 3}
                loading={
                  idx >= items.length && idx < items.length + 3
                    ? undefined
                    : "lazy"
                }
              />
            </div>

            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.personBlock}>
              <div className={styles.personName}>{item.name}</div>
              <div className={styles.personSurname}>{item.surname}</div>
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

      <div
        className={styles.navBars}
        role="tablist"
        aria-label="Carousel navigation"
      >
        {items.map((_, idx) => (
          <button
            key={`bar-${idx}`}
            type="button"
            className={styles.navBar}
            data-idx={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => handleGoTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
