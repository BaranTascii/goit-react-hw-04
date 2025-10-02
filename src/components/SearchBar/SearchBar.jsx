import { useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const value = input.trim();
    if (value === '') {
      toast.error('Lütfen aramak için bir metin girin.');
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
