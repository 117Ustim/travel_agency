"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./section2Carousel.module.css";

const items = [
    {
        id: 1,
        image: "/comp_1/carousel/Norway.jpg",
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
        image: "/comp_1/carousel/japan.jpg",
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
        image: "/comp_1/carousel/Germany.jpg",
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
        image: "/comp_1/carousel/Croatia.jpg",
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
        image: "/comp_1/carousel/Ukraine.jpg",
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

export default function Section2Carousel() {
    const trackRef = useRef(null);

    const allItems = [...items, ...items, ...items];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const cards = track.querySelectorAll(`.${styles.card}`);
        if (cards.length === 0) return;
        const baseStart = cards[0].offsetLeft;
        const secondStart = cards[items.length].offsetLeft - baseStart;
        track.scrollLeft = secondStart;

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
        const gapValue = cs.gap || cs.columnGap || "20px";
        const gap = parseFloat(gapValue) || 20;
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
                firstVisible = el;
                break;
            }
        }
        cards.forEach(el => el.classList.remove(styles.active));
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
                                alt={item.title.line1}
                                fill
                                sizes="(max-width: 650px) 280px, 320px"
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.titleBlock}>
                                <div className={styles.titleLine}>{item.title.line1}</div>
                                <div className={styles.titleLine}>{item.title.line2}</div>
                                {item.title.line3 && <div className={styles.titleLine}>{item.title.line3}</div>}
                            </div>
                            
                            <div className={styles.diamondWrap}>
                                <Image 
                                    src="/comp_2/Vector2.png"
                                    alt="Diamond background"
                                    width={180}
                                    height={95}
                                    className={styles.diamondOuter}
                                    priority={idx < 2}
                                />
                                <div className={styles.diamondInner}>
                                    <div className={styles.diamondContent}>
                                        <div className={styles.count}>{item.diamond.count}</div>
                                        <div className={styles.places}>{item.diamond.places}</div>
                                        <div className={styles.arrow_block}>
                                            <span className={styles.arrow_2}>
                                                <span className={styles.arrowLine_2}></span>
                                                <svg 
                                                    width="12" 
                                                    height="12" 
                                                    viewBox="0 0 24 24" 
                                                    className={styles.arrowSvg}
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
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.navNext} type="button" aria-label="Next" onClick={handleNext}>
                <span className={styles.navNextInner}>
                    <span className={styles.arrowLine_1}></span>
                    <span className={styles.arrow_1}></span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className={styles.arrowSvg} aria-hidden>
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
        </div>
    );
}
