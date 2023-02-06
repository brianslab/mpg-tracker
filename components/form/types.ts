type Type = 'login' | 'signup';

export default interface AuthFormProps {
  type: Type;
  authRoute: string;
}
