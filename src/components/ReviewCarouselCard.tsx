import { createAvatar } from '@dicebear/core';  // Importa la función para crear avatares
import { thumbs } from '@dicebear/collection';

interface Props {
  user: string;
  review: string;
  classes: number;
}

// Random Seed
const generateRandomSeed = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const reviewCarouselCard: React.FC<Props> = ({ user, review, classes }) => {
  const seed = generateRandomSeed();

  const avatar = createAvatar(thumbs, {
    seed: seed,
  });

  return (
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <div className="flex flex-col justify-center items-center w-full h-full text-center gap-5 max-w-[600px] mx-auto">
        <img src={avatar.toDataUri()} alt="Avatar" className="w-24 rounded-full border-4 border-white" />
        <div className='flex flex-col gap-4 px-6'>
          <div className='flex flex-col gap-1 text-gray-600'>
            <p className="text-2xl font-bold text-mainColor">{user}</p>
            <p className='text-sm'>{classes} {classes === 1 ? "class" : "classes"}</p>
          </div>
          <p className='leading-[1.5rem]'>{review}</p>
        </div>
      </div>
    </div>
  )
}

export default reviewCarouselCard;
