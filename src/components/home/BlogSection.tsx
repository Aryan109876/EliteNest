import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogPosts';
import { formatDistanceToNow } from 'date-fns';

const BlogSection: React.FC = () => {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-3">Latest from Our Blog</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Expert insights, market updates, and tips for luxury real estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-property hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500 ml-3">
                    {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;