import React from 'react';

const BookmarkItem = ({ oneBookmark }) => {
  const { title, user } = oneBookmark
  console.log(title.slice(0, 10))
  return (
    <div className='p-0 bg-white m-3 rounded-lg overflow-hidden h-16 flex justify-between items-center shadow animate-[wiggle_1s_ease-in-out]'>
      {/* <h1 className='text-xl font-semibold text-right'>How to Become a Programmer</h1> */}
      <img className=' object-contain rounded-full ml-[-15px] h-20 w-20  ' src={user.img} alt="" />
      <div className="ml-auto mr-8">
        <p className='text-lg '>{title.slice(0, 24)}...</p>
        <p className='text-sm font-semibold text-slate-400'>By {user.name}</p>
      </div>
    </div>
  );
};

export default BookmarkItem;