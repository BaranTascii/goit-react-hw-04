import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <TailSpin height={50} width={50} />
    </div>
  );
}

export default Loader;