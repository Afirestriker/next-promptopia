'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: '',
    tag: ''
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          prompt: prompt.prompt,
          tag: prompt.tag,
        })
      });

      if (response.ok) router.push('/');
    } catch (error) {
      console.error("Error while submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form
      type="Create"
      post={prompt}
      setPost={setPrompt}
      isSubmitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
