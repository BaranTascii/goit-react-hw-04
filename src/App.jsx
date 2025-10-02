// src/App.jsx
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { searchPhotos } from './api/unsplash-api';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchPhotos({ query, page, per_page: 12 });
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages(prev => [...prev, ...data.results]);
        }
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) {
      toast('Aynı sorgu zaten görüntüleniyor.');
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = image => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={value => handleSearch(value)} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && page < totalPages && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={closeModal} />
      )}
    </div>
  );
}

console.log("Unsplash Key:", import.meta.env.VITE_UNSPLASH_ACCESS_KEY);