import React from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const Bookmark = ({totalReadTime, bookmark, cards}) => {
  const bookmarkObj = []
  for(const singleBookmark of bookmark){
    const idObj = cards.find(card => card.id == singleBookmark)
    bookmarkObj.push(idObj)
  }

  return (
    <div className='col-span-1 md:col-span-2 mt-4 md:sticky top-0 h-[100vh] md:overflow-auto'>
      <div className="bg-purple-200 p-4 border-textColor border-[1px] m-3 rounded-lg">
        <p className='text-textColor font-semibold text-xl text-center'>Spent time on read : {totalReadTime} min</p>
      </div>
      <div className="bg-bgColor m-3 rounded-lg pb-3">
        <p className='text-center text-xl font-semibold py-4'>Bookmarked Blogs : 8</p>
        {/* <BookmarkItem></BookmarkItem> */}
        {
          bookmarkObj.map(oneBookmark => <BookmarkItem oneBookmark={oneBookmark} key={oneBookmark.id}></BookmarkItem>)
        }
      </div>
    </div>
  );
};

export default Bookmark;