'use client'

import { useState, useEffect } from 'react';
import PromptCardList from '@components/PromptCardList';
import { escapeRegExp } from '@utils/regexHelpers';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);
  const [filterPrompts, setFilterPrompts] = useState([]);

  useEffect(() => {
    // IIFE - getAllPrompts
    (async () => {
      const response = await fetch('/api/prompt/', { method: "GET" });
      const data = await response.json();
      setPrompts(data);
    })();
  }, []);

  useEffect(() => {
    if (!searchText.trim().length) {
      setFilterPrompts(prompts);
      return;
    }

    const regexString = escapeRegExp(searchText);
    const regex = new RegExp(regexString.trim(), 'i');
    const filterPromptItems = prompts.filter(prompt => (
      regex.test(prompt.creator.username) ||
      regex.test(prompt.prompt) ||
      regex.test(prompt.tag)
    ));

    setFilterPrompts(filterPromptItems);
  }, [searchText, prompts]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
  }

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
        prompts={filterPrompts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed;
