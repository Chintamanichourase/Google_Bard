import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="bard__blog section__padding" id="blog">
    <div className="bard__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="bard__blog-container">
      <div className="bard__blog-container_groupA">
        <Article imgUrl={blog01} date="May 1, 2023" text="Bard: The Future of AI-Powered Writing" />
      </div>
      <div className="bard__blog-container_groupB">
        <Article imgUrl={blog02} date="May 5, 2023" text="How Google Bard Can Help You Be More Productive" />
        <Article imgUrl={blog03} date="May 15, 2023" text="The Amazing Things Google Bard Can Do" />
        <Article imgUrl={blog04} date="May 18, 2023" text="The Potential of Google Bard to Change the World" />
        <Article imgUrl={blog05} date="May 20, 2023" text="What You Need to Know About Google Bard" />
      </div>
    </div>
  </div>
);

export default Blog;