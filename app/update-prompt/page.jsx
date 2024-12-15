"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Form from "@components/Form";

const updatePrompt = ({ params }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: "",
  });
  const promptId = searchParams.get('id');

  useEffect(() => {
    // IIFE - getPromptDetails
    (async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}/`, { method: 'GET' });
        const promptData = await response.json();
        setPrompt(promptData);
      } catch (error) {
        console.error("Failed to load prompt data", error);
      }
    })();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}/`, {
        method: 'PATCH',
        body: JSON.stringify(prompt)
      });

      if (response.ok) router.push('/profile');
    } catch (error) {
      console.error('Failed to update the prompt', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Update"
      post={prompt}
      setPost={setPrompt}
      isSubmitting={isSubmitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default updatePrompt;
