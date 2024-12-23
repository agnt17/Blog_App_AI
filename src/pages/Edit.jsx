import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api';

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEdited, setIsEdited] = useState(false); // State to track if the post is edited
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:5000/posts/${id}`, { title, content })
      .then(() => {
        setIsEdited(true); // Set edited flag to true
        setTimeout(() => navigate(`/post/${id}`), 2000); // Navigate after a delay
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-3xl relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Post</h1>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 p-3 mb-6 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
        {isEdited && (
          <div className="absolute bottom-2 right-2 text-sm text-gray-600 italic">
            Post edited successfully
          </div>
        )}
      </div>
    </div>
  );
}
