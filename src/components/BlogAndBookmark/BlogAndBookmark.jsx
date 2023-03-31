import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BlogAndBookmark = () => {
    return (
        <div className='grid grid-cols-6'>
            <Blog></Blog>
            <Bookmark></Bookmark>
        </div>
    );
};

export default BlogAndBookmark;