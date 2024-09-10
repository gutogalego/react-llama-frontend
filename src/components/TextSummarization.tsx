import { useState } from "react";
import config from "../config";


const TextSummarization = () =>{
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(e)
        const response = await fetch(`${config.API_BASE_URL}${config.ENDPOINTS.SUMMARIZE}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: prompt})
        })
        const data = await response.json();
        console.log(data.summarized_text)
    }

    return(
        <div className="flex items-center justify-center min-h-96 bg-red-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2>Summarization</h2>
            <form onSubmit={handleSubmit}>
            <textarea 
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder=""
            rows={6}
            />
            <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
                loading ? 'bg-blue-100 hover:bg-blue-100' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >{loading ? 'Loading...' : 'Summarize'}</button>
            </form>
        </div>
        </div>
    )
}

export default TextSummarization;