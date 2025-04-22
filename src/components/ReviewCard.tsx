import React from "react"

interface Props {
  user?: string;
  nLessons?: number;
  review?: string;
}

const ReviewCard: React.FC<Props> = ({ user, nLessons, review }) => {
  return (
    <div className="bg-white flex flex-col max-w-[400px] mx-auto pt-4 px-8 pb-8">
      <p>User</p>
      <p>number of lessons</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus expedita reprehenderit vel voluptate ad ipsum placeat consequuntur quas alias.</p>
    </div>
  );
}

export default ReviewCard;
