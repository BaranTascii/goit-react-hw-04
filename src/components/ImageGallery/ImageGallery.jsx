import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  if (!images || images.length === 0) return null;
  return (
    <ul className={styles.gallery}>
      {images.map(img => (
        <li key={img.id} className={styles.item}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;