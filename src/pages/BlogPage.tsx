import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import blogPosts from '../data/blogPosts';
import { formatDistanceToNow } from 'date-fns';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    if (activeCategory === 'all') {
      setPosts(blogPosts);
    } else {
      setPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Blog | EliteNest Properties</title>
        <meta name="description" content="Expert insights, market updates, and tips for luxury real estate. Stay informed with the latest trends and advice from our team." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-20 mb-10">
        <div className="container-custom">
          <h1 className="text-white font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Expert insights, market updates, and tips for navigating the luxury real estate market
          </p>
        </div>
      </div>
      
      <div className="container-custom pb-16">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.slug}`}>
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500 ml-3">
                    {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-primary-600 font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">No posts found</h2>
            <p className="text-neutral-600 mb-6">
              There are currently no posts in this category.
            </p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="btn btn-outline"
            >
              View All Posts
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;