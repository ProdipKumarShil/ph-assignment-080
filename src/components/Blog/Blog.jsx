import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blog = ({ cards, func, addBookmark, }) => {
  return (
    <div className='col-span-1 md:col-span-4 '>
      {/* <BlogCard></BlogCard> */}
      {
        cards.map( card => <BlogCard addBookmark={addBookmark} func={func} card={card} key={card.id}></BlogCard>)
      }
    </div>
  );
};

export default Blog;