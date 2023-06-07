import Button from '../../Button';
import styles from './styles.module.scss';

interface IGeneratedLinkProps {
  url: string;
}

function GeneratedLink({ url }: IGeneratedLinkProps) {
  async function copyToClipboard () {
    await navigator.clipboard.writeText(url);
  }
  return (
    <div className={styles.generatedLink}>
      <Button onClick={copyToClipboard}>
        Copy
      </Button>
      <span className={styles.link}>{url}</span>
    </div>
  );
}

export default GeneratedLink;
