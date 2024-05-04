import styles from './Main.module.scss';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <h1 className={styles.title_main}>Code Constellation</h1>

      <div className={styles.section} id="section-math">
        <h2 className={styles.section_title}>
          <Link to="/">Math</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-algorithms">
        <h2 className={styles.section_title}>
          <Link to="/">Algorithms</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-js">
        <h2 className={styles.section_title}>
          <Link to="/">JS</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-d3.js">
        <h2 className={styles.section_title}>
          <Link to="/">D3.JS</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-animate">
        <h2 className={styles.section_title}>
          <Link to="/">Animate</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-canvas">
        <h2 className={styles.section_title}>
          <Link to="/canvas">Canvas</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-python">
        <h2 className={styles.section_title}>
          <Link to="/">Python</Link>
        </h2>
        <p>### empty...</p>
      </div>

      <div className={styles.section} id="section-neural-networks">
        <h2 className={styles.section_title}>
          <Link to="/">Neural networks</Link>
        </h2>
        <p>### empty...</p>
      </div>
    </div>
  );
}
