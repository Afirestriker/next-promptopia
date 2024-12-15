'use client';

import { use, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Profile from '@components/Profile';

const userSpecificProfilePage = ({ params }) => {
  const { userId } = use(params);
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    // IIFE - getUserPrompts
    (async () => {
      const response = await fetch(`/api/users/${userId}/prompts`);
      const data = await response.json();
      setPrompts(data);
    })();
  }, []);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination ✨`}
      data={prompts}
    />
  );
}

export default userSpecificProfilePage;
