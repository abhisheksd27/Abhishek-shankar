import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { arrow } from '../assets/icons';
import blogs_abhishek from '../constants/blogs';
import blog_icon from '../assets/icons/blogs_icon.svg';

const Blogs = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Blogs
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Throughout my journey, I have penned down numerous blogs, sharing my
        insights, experiences, and knowledge. Below are some of my favorite
        articles. Feel free to dive in, read, and share your thoughts.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {blogs_abhishek.map((blog) => (
          <div className='lg:w-[400px] w-full' key={blog.id}>
            <div className='block-container w-12 h-12 relative'>
              <div className={`btn-back rounded-xl ${blog.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center absolute inset-0'>
                <img
                  src={blog_icon}
                  alt={blog.title}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {blog.title}
              </h4>
              <p className='mt-2 text-slate-500'>{blog.summary}</p>
              <p className='mt-1 text-sm text-slate-400'>{blog.date}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={`/blog/${blog.id}`}
                  className='font-semibold text-blue-600'
                >
                  Read More
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Blogs;
