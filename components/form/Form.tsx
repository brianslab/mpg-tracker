import { FormEvent, useState } from 'react';
import { Button } from '@/components';
import FormProps from './types';

export function Form({ type, onSubmit }: FormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(username, password);
  }

  switch (type) {
    case 'login':
      return (
        <>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password: </label>
              <input
                type='text'
                id='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button primary={true} type='submit'>
              Submit
            </Button>
          </form>
          <Button secondary={true}>Or Sign Up</Button>
        </>
      );
    case 'signup':
      return <div>Signup form</div>;
    default:
      return <div>Unknown form</div>;
  }
}
