type Type = 'login' | 'signup';

export default interface FormProps {
  type: Type;
  onSubmit: (username: string, password: string) => void;
}
