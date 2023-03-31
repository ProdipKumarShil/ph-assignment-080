import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BlogAndBookmark = ({cards}) => {
    console.log(cards)
    return (
        <div className='grid grid-cols-6'>
            <Blog cards={cards}></Blog>
            <Bookmark></Bookmark>
        </div>
    );
};

export default BlogAndBookmark;