import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BlogAndBookmark = ({cards, func, totalReadTime}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <Blog cards={cards} func={func}></Blog>
            <Bookmark totalReadTime={totalReadTime}></Bookmark>
        </div>
    );
};

export default BlogAndBookmark;