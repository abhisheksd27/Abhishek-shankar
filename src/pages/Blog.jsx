import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs_abhishek from '../constants/blogs';
import CTA from '../components/CTA';
import { marked } from 'marked'; // Make sure you have marked installed: npm install marked

const Blog = () => {
  const { id } = useParams();

  // Find the blog with the matching ID
  const blog = blogs_abhishek.find(blog => blog.id.toString() === id);

  // Handle the case where the blog is not found
  if (!blog) {
    return (
      <section className='max-container p-4 sm:p-6 md:p-8 lg:p-10'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-slate-700'>Blog Not Found</h1>
          <p className='text-lg text-slate-500 mt-4'>
            Sorry, we couldn't find the blog you're looking for.
          </p>
          <Link to='/' className='text-blue-600 hover:underline mt-6 inline-block'>
            Go back to the home page
          </Link>
        </div>
      </section>
    );
  }

  // Filter out the current blog from related posts and sort the remaining blogs by date
  const sortedBlogs = blogs_abhishek
    .filter(post => post.id !== blog.id) // Exclude the current blog
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort blogs by date, newest first

  // Take the most recent 2 or 3 blogs
  const recentPosts = sortedBlogs.slice(0, 3);

  // Convert Markdown content to HTML
  const htmlContent = marked(blog.content);

  return (
    <section className='max-container p-4 sm:p-6 md:p-8 lg:p-10'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-10 text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
          {blog.title}
        </h1>
        <p className='text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto'>
          {blog.summary}
        </p>
        <p className='text-sm text-slate-300'>
          {blog.date}
        </p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row mt-12 gap-12'>
        {/* Blog Content */}
        <div className='flex-1'>
          <div
            className='prose prose-lg max-w-full text-slate-700'
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Sidebar for Related Posts */}
        <aside className='lg:w-1/3'>
          <h3 className='text-xl sm:text-2xl font-semibold text-slate-700 mb-6'>
            Related Posts
          </h3>
          <div className='flex flex-col gap-6'>
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className='flex items-center gap-4 p-4 bg-slate-200 rounded-lg hover:bg-slate-300 transition'
              >
                <div className='flex-1'>
                  <h4 className='text-lg font-medium text-slate-800'>
                    {post.title}
                  </h4>
                  <p className='text-slate-600 text-sm'>
                    {post.summary}
                  </p>
                  <p className='text-xs text-slate-500'>
                    {post.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
      <br />
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default Blog;
