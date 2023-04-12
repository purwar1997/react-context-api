import { useContext } from 'react';
import { ThemeContext, CreateUserContext } from '../Context';
import LoginForm from './LoginForm';
import Profile from './Profile';

export default function Panel({ title }) {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(CreateUserContext);
  const className = `panel-${theme}`;

  return (
    <div className={`panel ${className}`}>
      <h1>{title}</h1>
      {user === null ? <LoginForm /> : <Profile />}
    </div>
  );
}
