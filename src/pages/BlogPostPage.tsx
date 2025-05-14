import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import blogPosts from '../data/blogPosts';
import { formatDistanceToNow } from 'date-fns';
import { BlogPost } from '../types';
import { Calendar, User, Tag, ChevronLeft } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === id || p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
    } else {
      // If post not found, redirect to blog page
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h2>Loading post...</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | EliteNest Properties Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | EliteNest Properties Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <div className="container-custom py-10">
        {/* Back to Blog Link */}
        <Link to="/blog" className="inline-flex items-center text-primary-600 hover:underline mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to All Posts
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center mb-6">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-neutral-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Share Links */}
            <div className="border-t border-b border-neutral-200 py-6 mb-10">
              <div className="flex items-center">
                <span className="font-medium mr-4">Share this post:</span>
                <div className="flex gap-3">
                  <a href="#" className="text-neutral-600 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div>
            {/* Author Bio */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{post.author.name}</h4>
                  <p className="text-neutral-600">Real Estate Specialist</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-4">
                Luxury real estate expert with over 10 years of experience helping clients find their dream properties. Specializing in high-end listings and market analysis.
              </p>
              <a href="#" className="text-primary-600 font-medium hover:underline">
                View Full Profile
              </a>
            </div>
            
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Related Posts</h3>
              {relatedPosts.length > 0 ? (
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex items-start">
                      <Link to={`/blog/${relatedPost.slug}`} className="shrink-0">
                        <div className="w-20 h-20 rounded-md overflow-hidden mr-3">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div>
                        <h4 className="font-medium mb-1 line-clamp-2">
                          <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary-600 transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <div className="text-neutral-500 text-xs">
                          {formatDistanceToNow(new Date(relatedPost.publishedAt), { addSuffix: true })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-600">No related posts found.</p>
              )}
              
              <div className="mt-6">
                <Link to="/blog" className="btn btn-outline w-full">
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;