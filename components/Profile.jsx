import PromptCard from "./PromptCard";

const Profile = ({
  name,
  data,
  handleEdit,
  handleDelete
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-lefts">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <p className="desc text-left">
        Welcome to your personalized profile page
      </p>

      <div className="mt-10 prompt_layout">
        {data.map(prompt => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>

  );
}

export default Profile;
