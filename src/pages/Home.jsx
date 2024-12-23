import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch posts on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/posts').then((res) => setPosts(res.data));
  }, []);

  // Update a specific post in the state
  const handlePostUpdate = (updatedPost) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Blog Posts</h1>
        <div className="text-right mb-6">
          <Link
            to="/create"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Post
          </Link>
        </div>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary_text || 'No summary available!'}</p>
              <Link
                to={`/post/${post._id}`}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
