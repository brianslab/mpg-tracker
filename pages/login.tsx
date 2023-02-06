import { AuthForm } from '@/components';

export default function Login() {
  return (
    <div className='pt-4 space-y-4 grid place-content-center text-center'>
      <div className='text-2xl'>Enter your credentials:</div>
      <AuthForm type='login' authRoute='/api/register' />
    </div>
  );
}
