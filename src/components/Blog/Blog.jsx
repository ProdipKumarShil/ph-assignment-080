import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blog = ({ cards }) => {
  console.log(cards)
  return (
    <div className='col-span-1 md:col-span-4 '>
      {/* <BlogCard></BlogCard> */}
      {
        cards.map( card => <BlogCard card={card}></BlogCard>)
      }
    </div>
  );
};

export default Blog;