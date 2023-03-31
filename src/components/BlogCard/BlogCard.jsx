import React from 'react';

const BlogCard = ({card}) => {
  const {img, title, readTime, user} = card
  console.log(card)
  return (
    <>
      <div className="card card-compact w-[auto] bg-base-100 m-2 rounded-md shadow mt-10">
        <figure><img className='h-[783px] object-cover w-[845px]' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className='flex items-center'>
              <img className='w-16 h-16 rounded-full' src={user.img} alt="" />
              <div className="ml-6">
                <p className='text-2xl font-bold'>{user.name}</p>
                <p className='text-slate-400'>March {user.date}, 2023</p>
              </div>
            </div>
            <div className="">
              <p className='text-slate-400 text-xl font-medium'>{user.date} min to read</p>
            </div>
          </div>
          <h2 className="card-title text-4xl my-4 mb-4">{title}</h2>
          <a href="#" className='underline text-xl'>Mark as read</a>
        </div>
      </div>
    </>
  );
};

export default BlogCard;