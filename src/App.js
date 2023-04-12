import { useState } from 'react';
import { ThemeContext, CreateUserContext } from './Context';
import Panel from './components/Panel';
import ThemeToggler from './components/ThemeToggler';
import './App.css';
import './Themes.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CreateUserContext.Provider value={{ user, setUser }}>
          <Panel title="Welcome" />
        </CreateUserContext.Provider>
        <ThemeToggler />
      </ThemeContext.Provider>
    </>
  );
}
