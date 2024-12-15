'use client'

import { useState } from 'react';
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete
}) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [copiedText, setCopiedText] = useState(false);

  const handlePromptCopy = (prompt) => {
    navigator.clipboard.writeText(prompt).then(() => setCopiedText(prompt));
    setTimeout(() => setCopiedText(''), 3000);
  }

  const handleCreatorClick = () => {
    (session?.user.id === prompt.creator._id.toString())
      ? router.push('/profile')
      : router.push(`/profile/${prompt.creator._id.toString()}/?name=${prompt.creator.username}`);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleCreatorClick}
        >
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>

        <div
          className="copy_btn"
          onClick={() => { handlePromptCopy(prompt.prompt) }}
        >
          <Image
            src={copiedText === prompt.prompt
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
            }
            alt="copy_image"
            width={12}
            height={12}
          />
        </div>
      </div>

      <p
        className="my-4 font-satoshi text-sm text-gray-700"
      >
        {prompt.prompt}
      </p>

      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => { handleTagClick && handleTagClick(prompt.tag) }}
      >
        {prompt.tag}
      </p>

      {
        (session?.user.id === prompt.creator._id && pathname === '/profile')
        &&
        <div
          className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3"
        >
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => { handleEdit(prompt._id.toString()) }}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => { handleDelete(prompt._id.toString()) }}
          >
            Delete
          </p>
        </div>
      }
    </div>
  );
}

export default PromptCard;
