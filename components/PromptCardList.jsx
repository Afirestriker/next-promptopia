import PromptCard from "@components/PromptCard";

const PromptCardList = ({ prompts, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {prompts.map(prompt => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default PromptCardList;
