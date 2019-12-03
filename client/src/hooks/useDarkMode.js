import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
  const [darkMode, setDarkmode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    const bodyEl = document.querySelector('body');

    if (darkMode) {
      bodyEl.classList.add('dark-mode');
    } else {
      bodyEl.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkmode];
};

export default useDarkMode;
