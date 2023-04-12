import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <input
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        type="checkbox"
        checked={theme === 'dark'}
        id="toggler"
      />
      <label htmlFor="toggler">Use {theme === 'light' ? 'dark' : 'light'} mode</label>
    </div>
  );
}
