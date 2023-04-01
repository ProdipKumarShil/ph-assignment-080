import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BlogAndBookmark = ({cards, func, totalReadTime, addBookmark, bookmark }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <Blog addBookmark={addBookmark} cards={cards} func={func}></Blog>
            <Bookmark bookmark={bookmark} totalReadTime={totalReadTime} cards={cards}></Bookmark>
        </div>
    );
};

export default BlogAndBookmark;