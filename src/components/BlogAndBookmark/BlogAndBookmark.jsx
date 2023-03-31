import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BlogAndBookmark = ({cards, func, totalReadTime, addBookmark, changeIcon, icon}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <Blog icon={icon} changeIcon={changeIcon} addBookmark={addBookmark} cards={cards} func={func}></Blog>
            <Bookmark totalReadTime={totalReadTime}></Bookmark>
        </div>
    );
};

export default BlogAndBookmark;