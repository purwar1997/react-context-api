import { useContext } from 'react';
import { CreateUserContext } from '../Context';
import Button from './Button';

export default function Profile() {
  const { user, setUser } = useContext(CreateUserContext);

  return (
    <>
      <p>You are now logged in as {user.name}</p>
      <Button onClick={() => setUser(null)}>Logout</Button>
    </>
  );
}
