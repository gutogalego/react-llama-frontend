import React, { useState } from 'react';
import config from '../config';

const TextCompletion = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  //TODO add error state and loading state

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fetching")
    const response = await fetch(`${config.API_BASE_URL}${config.ENDPOINTS.TEXT_COMPLETION}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: prompt }),
    });
    const data = await response.json();
    setResult(data.completion);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Text Completion</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Complete Text
          </button>
        </form>
        {result && (
          <div className="mt-4 p-4 bg-green-100 rounded-md">
            <h3 className="text-lg font-bold">Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextCompletion;
