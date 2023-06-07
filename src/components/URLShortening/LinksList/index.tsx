import { API_URL } from '../index.tsx';
import { ILinks, } from '../types.ts';
import styles from './styles.module.scss';


interface ILinksListProps {
  links: ILinks;
}

function LinksList({ links }: ILinksListProps) {
  return(
    <div className={styles.linksList}>
      {Object.keys(links).length
        ? (
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.shortUrl}>Short url</span>
              <span className={styles.longUrl}>Long url</span>
            </li>
            {Object.keys(links).map((link) => {
              return (
                <li
                  key={link}
                  className={styles.listItem}
                >
                  <span className={styles.shortUrl}>
                    {API_URL}{link}
                  </span>
                  <span className={styles.longUrl}>
                    {links[link]}
                  </span>
                </li>
              );
            })}
          </ul>
        )
        : 'No data'
      }
    </div>
  );
}

export default LinksList;
