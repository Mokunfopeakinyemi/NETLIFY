// CompleteAccount.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const CompleteAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [valid, setValid] = useState<boolean | null>(null);
  const [error, setError] = useState('');

  const loginUrl = "https://stage.api.withavail.com";

  useEffect(() => {
    const validateToken = async () => {
      try {
        const res = await fetch(`/${loginUrl}/auth/validate-token/${token}`);
        const data = await res.json();
        if (res.ok) {
          setValid(true);
        } else {
          setValid(false);
          setError(data.message || 'Invalid token');
        }
      } catch (err) {
        setValid(false);
        setError('Validation failed');
      }
    };

    validateToken();
  }, [token]);

  useEffect(() => {
    if (valid) {
      navigate('/');
    }
  }, [valid, navigate, token]);

  if (valid === null) return <p>Validating token...</p>;
  if (!valid) return <p>{error}</p>;
  return null;
};