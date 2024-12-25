import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

export default function withAuth(Component: React.FC) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const { data } = await supabase.auth.getUser();
        if (!data) {
          router.push('/login');
        } else {
          setLoading(false);
        }
      };
      checkAuth();
    }, [router]);

    if (loading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}
