import styles from '@/styles/components/profile/Interests.module.css';

const interestsData = [
  {
    title: "Interés 1",
    description: "Descripción del interés 1.",
  },
  {
    title: "Interés 2",
    description: "Descripción del interés 2.",
  },
  {
    title: "Interés 3",
    description: "Descripción del interés 3.",
  },
];

const Interests = () => (
  <section className={styles.interests}>
    <h2>Intereses</h2>
    <ul>
      {interestsData.map((interest, index) => (
        <li key={index} className={styles.card}>
          <div className={styles.image}></div>
          <div className={styles.content}>
            <a href="#">
              <span className={styles.title}>{interest.title}</span>
            </a>
            <p className={styles.desc}>{interest.description}</p>
            <a className={styles.action} href="#">
              Descubre mas
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Interests;
