import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={onClick}>
        Daha Fazla Yükle
      </button>
    </div>
  );
}

export default LoadMoreBtn;
