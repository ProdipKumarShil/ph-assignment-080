import React from 'react';

const Bookmark = () => {
  return (
    <div className='col-span-2'>
      <div className="bg-purple-200 p-4 border-textColor border-[1px] m-3 rounded-lg">
        <p className='text-textColor font-semibold text-xl text-center'>Spent time on read : 177 min</p>
      </div>
      <div className="bg-bgColor m-3 rounded-lg">
        <p className='text-center text-xl font-semibold py-4'>Bookmarked Blogs : 8</p>
      </div>
    </div>
  );
};

export default Bookmark;