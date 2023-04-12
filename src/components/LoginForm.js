import { useState, useContext } from 'react';
import { CreateUserContext } from '../Context';
import Button from './Button';

export default function LoginForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const { setUser } = useContext(CreateUserContext);
  const allowedToLogin = firstname !== '' && lastname !== '';

  return (
    <form>
      <div className="form-control">
        <label htmlFor="firstname">Firstname</label>
        <input
          onChange={e => setFirstname(e.target.value)}
          type="text"
          value={firstname}
          id="firstname"
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={e => setLastname(e.target.value)}
          type="text"
          value={lastname}
          id="lastname"
          required
        />
      </div>

      {allowedToLogin ? '' : <p>Fill in both fields</p>}

      <Button
        onClick={() => {
          setUser({ name: `${firstname} ${lastname}` });
        }}
        disabled={!allowedToLogin}
      >
        Login
      </Button>
    </form>
  );
}
