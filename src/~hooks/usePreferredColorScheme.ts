import { useEffect, useState } from 'react';

function usePreferredColorScheme() {
  const [preferredColorScheme, setPreferredColorScheme] = useState('');

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (event) => {
      setPreferredColorScheme(event.matches ? 'dark' : 'light');
    };

    setPreferredColorScheme(matchMedia.matches ? 'dark' : 'light');
    matchMedia.addListener(handleColorSchemeChange);

    return () => {
      matchMedia.removeListener(handleColorSchemeChange);
    };
  }, []);

  return preferredColorScheme;
}

export default usePreferredColorScheme;