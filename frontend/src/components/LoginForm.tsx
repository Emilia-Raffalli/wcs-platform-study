import { useState } from 'react';
import Button from './Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Ici appeler API
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="email" className="label-style">Email</label>
        <input
          id="email"
          type="email"
          className="input-style"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="label-style">Mot de passe</label>
        <input
          id="password"
          type="password"
          className="input-style"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    <Button text="Se connecter" type="submit" disabled= {!email || !password} />
    </form>
  );
};

export default LoginForm;
