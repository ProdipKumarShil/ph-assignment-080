import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blog = ({ cards }) => {
  console.log(cards)
  return (
    <div className=' col-span-4 h-[100vh]'>
      {/* <BlogCard></BlogCard> */}
      {
        cards.map( card => <BlogCard card={card}></BlogCard>)
      }
    </div>
  );
};

export default Blog;