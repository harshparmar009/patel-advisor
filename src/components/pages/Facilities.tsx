'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Facilities.module.css'; // Assuming you're using CSS modules

const cities = [
  { name: '- Shree Nivas', image: 'Patel Legal Advisors EXPERT Team helped me to manage my compliances and filing on time, C AND C EXPERT Team helped me to manage my compliances and filing on time. I am really impressed with their services.It was great experience to have this kind of co-operation' },
  { name: '- Jai Shree', image: 'Package suggested to us is Very Affordable is a Plus Point. I would definitely recommend their service' },
  { name: '- Anand', image: 'Patel Legal Advisors EXPERT provides phenomenal service and support to us. They have excellent team of employees who takes great effort in satisfing our queries and requirements.' },
  { name: '- Ramesh', image: 'this firm really help me alot, their behaviour is also so good.' },
];

export default function Facilities() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>- Our Reviews -</h2>
        </div>
        <div className={styles.subHeaderWrapper}>
          <h1 className={styles.subHeader}>Clients Love Our Work</h1>
        </div>
        <div className={styles.sliderContainer}>
          <div ref={sliderRef} className={styles.slider} style={{ transform: `translateX(-${index * 100}%)` }}>
            {cities.map((city, idx) => (
              <div key={idx} className={styles.slide}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>{city.name}</h3>
                  <p className={styles.cardText}>{city.image}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
