'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    if (session?.user.id) {
      // IIFE - getUserPrompts
      (async () => {
        const response = await fetch(`/api/users/${session.user.id}/prompts`);
        const data = await response.json();
        setPrompts(data);
      })();
    }
  }, []);

  const handleEdit = (promptId) => {
    router.push(`/update-prompt?id=${promptId}`);
  };

  const handleDelete = async (promptId) => {
    try {
      const response = await fetch(`/api/prompt/${promptId}/`, {
         method: 'DELETE'
      });

      if (response.ok) router.push('/profile');
    } catch (error) {
      console.error('Failed to delete prompt', error);
    }
  };

  return (
    <Profile
      name={session?.user.name}
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default ProfilePage;
