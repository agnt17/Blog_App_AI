import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/posts/${id}`).then(() => navigate('/'));
  };

  const handleHome = () => {
    navigate('/');
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {post ? (
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6"><p className='font-bold'>Summarized Data: </p>{post.summary_text}</p>
          <p className="text-gray-700 mb-6"><p className='font-bold'>Actual Data: </p>{post.content}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate(`/edit/${id}`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
            <button
              onClick={handleHome}
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Back to Homepage
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600">Loading post...</p>
        </div>
      )}
    </div>
  );
}
