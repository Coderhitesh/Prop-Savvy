
'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://www.api.propsavvyrealtors.com/api/v1/get_blogs');
            const data = response.data.data;
            //   const data = await response.json();
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching blogs:', error);
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

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.writer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* <Head>
                <title>Our Blog - Discover Latest Insights</title>
                <meta
                    name="description"
                    content="Discover our latest thoughts, ideas, and insights about technology, design, and innovation. Read our blogs to stay updated."
                />
                <meta name="keywords" content="technology, design, innovation, blogs, insights" />
                <meta name="author" content="Your Website Name" />
            </Head> */}
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our latest thoughts, ideas, and insights about technology, design, and innovation.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs && filteredBlogs.map((blog, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={blog.image.url}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <div className="flex items-center space-x-4 text-white">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span className="text-sm">{formatDate(blog.createdAt)}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <User className="w-4 h-4 mr-1" />
                                                <span className="text-sm">{blog.writer}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl line-clamp-container-single font-bold text-gray-900 mb-3 line-clamp-2">
                                        {blog.title}
                                    </h2>
                                    <div
                                        className="text-gray-600 mb-4 line-clamp-container"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    ></div>


                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>

                                <div className="px-6 pb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {/* {blog.MetaKeywords.split(',').map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {keyword.trim()}
                      </span>
                    ))} */}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && filteredBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-xl text-gray-600">No blogs found matching your search.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;