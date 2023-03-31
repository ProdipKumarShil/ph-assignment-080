import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blog = ({ cards, func }) => {
  return (
    <div className='col-span-1 md:col-span-4 '>
      {/* <BlogCard></BlogCard> */}
      {
        cards.map( card => <BlogCard func={func} card={card} key={card.id}></BlogCard>)
      }
    </div>
  );
};

export default Blog;