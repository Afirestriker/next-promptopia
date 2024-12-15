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
    if (!confirm('Are your sure, you want to delete this prompt?')) return;

    try {
      const response = await fetch(`/api/prompt/${promptId}/`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete prompt!');

      const filterPrmompt = prompts.filter(prompt => prompt._id.toString() !== promptId);

      setPrompts(filterPrmompt);
    } catch (error) {
      console.error('Failed to delete prompt', error);
    }
  };

  return (
    <Profile
      name={session?.user.name}
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default ProfilePage;
