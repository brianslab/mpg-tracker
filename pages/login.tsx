import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components';

export default function Login() {
  return (
    <div className='grid place-content-center text-center'>
      <div className='text-2xl'>Choose a method to login: </div>
      <Button
        className='place-content-center text-lg gap-4 hover:shadow-md transition duration-150 ease-in-out'
        rounded={true}
      >
        <FcGoogle />
        <a>Google</a>
      </Button>
    </div>
  );
}
