'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowLeft,
  BookOpen,
  Tag,
  Info,
  ExternalLink
} from 'lucide-react';
import { useParams } from "next/navigation";

const Page = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/v1/get_blog_by_slug/${slug}`);
      setBlog(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to load blog post. Please try again later.');
      console.error('Error fetching blog:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <div className="mt-4 text-indigo-600 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation Bar */}
      {/* <nav className="bg-white/80 backdrop-blur-md relative top-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Articles
            </button>
            <div className="flex items-center space-x-4">
              <ShareButton icon={<Facebook className="w-5 h-5" />} color="bg-blue-600" />
              <ShareButton icon={<Twitter className="w-5 h-5" />} color="bg-sky-500" />
              <ShareButton icon={<Linkedin className="w-5 h-5" />} color="bg-blue-700" />
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                  {blog.writer}
                </span>
                <span className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(blog.createdAt)}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {blog.MetaKeywords.split(',').map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-medium inline-flex items-center"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={blog.largeImage.url}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-indigo-600">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">About the Author</h3>
                  <p className="text-gray-600">{blog.writer}</p>
                </div>
              </div>
            </div>

            {/* Meta Information Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                Article Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Meta Title</h4>
                  <p className="text-gray-900">{blog.MetaTitle}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Meta Description</h4>
                  <p className="text-gray-900">{blog.MetaDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareButton = ({ icon, color }) => (
  <button 
    className={`${color} p-2 rounded-full text-white hover:opacity-90 transition-opacity duration-200 transform hover:scale-110`}
  >
    {icon}
  </button>
);

export default Page;