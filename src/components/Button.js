import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function Button({ children, onClick, disabled }) {
  const { theme } = useContext(ThemeContext);
  const className = `button-${theme}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
