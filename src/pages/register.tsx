import { useState } from 'react';
import { signUpWithEmail } from '../services/auth';
import withAuth from '@/hoc/withAuth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signUpWithEmail(email, password);
      alert('Registration successful. Please login.');
      window.location.href = '/login';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
