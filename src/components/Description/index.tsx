import styles from './styles.module.scss';

function Description() {
  return (
    <div className={styles.description}>
      <header>
        <h1>Intersecting rectangles</h1>
      </header>
      <div className={styles.requirements}>
        <p>
          Requirements:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            {'values >= 0'}
          </li>
          <li className={styles.item}>
            {'x0 < x1'}
          </li>
          <li className={styles.item}>
            {'y0 < y1'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
