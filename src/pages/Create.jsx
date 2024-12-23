import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-post', { title, content });
      
      if (response && response.data) {
        console.log('Post created:', response.data);
        console.log('Summary Text:', response.data.summary_text);
        navigate('/');
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error.response || error.message);
      alert(error.response?.data?.message || error.message || 'Failed to create post');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">Create Post</h1>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
        <button
          onClick={handleHome}
          className="w-full px-4 py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Not Interested? Getback!
        </button>
      </div>
    </div>
  );
}
