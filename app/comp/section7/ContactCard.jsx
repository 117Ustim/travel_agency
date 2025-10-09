'use client';

import styles from './contactCard.module.css';

export default function ContactCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // Карточка контактов по центру, прижатая к нижней части секции
    <div className={styles.contactCard} role="region" aria-labelledby="contact-card-title">
      <h3 id="contact-card-title" className={styles.contactTitle}>Contact</h3>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.visuallyHidden} htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Name"
          className={styles.contactInput}
          aria-label="Name"
          required
        />
        <label className={styles.visuallyHidden} htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          className={styles.contactInput}
          aria-label="Phone"
          required
        />
        
        <button type="submit" className={styles.contactButton} aria-label="Call me back">
          <span className={styles.contactButtonText}>Call me back</span>
          {/* Декоративный элемент снизу по центру */}
          <span className={styles.contactButtonBottomDecor} aria-hidden="true"></span>
        </button>
      </form>
    </div>
  );
}


