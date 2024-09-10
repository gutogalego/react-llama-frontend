import React, { useState } from 'react';
import config from '../config';

const TextCompletion = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  //TODO add error state and loading state


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch(`${config.API_BASE_URL}${config.ENDPOINTS.TEXT_COMPLETION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: prompt }),
    });
    const data = await response.json();
    setLoading(false)
    setPrompt(data.autocompleted_text);
  };

  return (
    <div className="flex items-center justify-center min-h-96 bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Text Completion</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your text to be autocompleted here..."
            rows={6}
          />
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              loading ? 'bg-blue-100 hover:bg-blue-100' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Complete Text'}  {/* Show loading indicator */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextCompletion;
