import { FormEvent, useState } from 'react';
import axios from 'axios';

import { Button } from '@/components';
import AuthFormProps from './types';

export function AuthForm({ type, authRoute }: AuthFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await axios.post(authRoute, { username, password });
    } catch (err: any) {
      console.error(err.message);
    }
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
