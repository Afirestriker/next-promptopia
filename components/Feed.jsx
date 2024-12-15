'use client'

import { useState, useEffect } from 'react';
import PromptCardList from '@components/PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    // IIFE - getAllPrompts
    (async () => {
      const response = await fetch('/api/prompt/', { method: "GET" });
      const data = await response.json();
      setPrompts(data);
    })();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="search_input pper"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search for a tag or a username"
          required="required"
        />
      </form>

      <PromptCardList
        prompts={prompts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed;
