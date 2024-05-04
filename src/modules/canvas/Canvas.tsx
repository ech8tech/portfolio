import styles from './Canvas.module.scss';
import { Link } from 'react-router-dom';

export default function Canvas() {
  return (
    <div>
      <h1 className={styles.title_main}>Canvas</h1>

      <div className={styles.section}>
        <Link to="/pixel_pioneer">
          <h2>Pixel Pioneer</h2>
        </Link>
      </div>
    </div>
  );
}
