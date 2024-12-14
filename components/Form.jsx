import Link from 'next/link';

const Form = ({
  type,
  post,
  setPost,
  isSubmitting,
  handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world,
        and let your imagination run wild with any
        AI-Powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
        </label>

        <textarea
          className="form_textarea"
          value={post.prompt}
          onChange={e => setPost({...post, prompt: e.target.value})}
          placeholder="write your prompt here"
          required="required"
        />

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {' '}
            <span className="font-normal">(#product, #webDevelopment, #idea)</span>
          </span>
        </label>

        <input
          className="form_input"
          value={post.tag}
          onChange={e => setPost({...post, tag: e.target.value})}
          placeholder="#tag"
          required="required"
        />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500">
            Cancel
          </Link>

          <button
            type="button"
            className="px-5 py-1.5 text-sm rounded-full bg-primary-orange text-white"
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
