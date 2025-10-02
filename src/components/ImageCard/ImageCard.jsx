import styles from './ImageCard.module.css';

 function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;
  return (
    <div className={styles.card} onClick={onClick} role="button" tabIndex={0}>
      <img src={urls.small} alt={alt_description ?? 'photo'} className={styles.img} />
    </div>
  );
}

export default ImageCard;