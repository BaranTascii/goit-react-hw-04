import { useEffect } from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); // accessibility

function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleEsc = e => { if (e.code === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const { urls, alt_description, user, likes, description } = image;

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.content}
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.closeBtn} onClick={onClose}>X</button>
      <img src={urls.regular} alt={alt_description ?? 'photo'} className={styles.img} />
      <div className={styles.meta}>
        <p><strong>Yazar:</strong> {user?.name}</p>
        <p><strong>Beğeni:</strong> {likes}</p>
        {description && <p><strong>Açıklama:</strong> {description}</p>}
      </div>
    </ReactModal>
  );
}

export default ImageModal;
