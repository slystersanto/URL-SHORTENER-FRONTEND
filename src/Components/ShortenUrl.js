import React, { useState } from "react";
import axios from "axios";



function ShortenUrl() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://url-shortener-backend-s80x.onrender.com/enterurl", {longURL: longUrl},{
        headers:{
          Authorization:`${localStorage.getItem("login_credential")}`,
        },
      });
      setShortUrl(response.data.shortURL);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Failed to generate short URL.");
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
    const fullShortUrl=`https:${shortUrl}`
    navigator.clipboard.writeText(fullShortUrl);
    alert(" short url copied✔️✔️")
  };

  const handleRedirect = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.get(`https://url-shortener-backend-s80x.onrender.com/${shortUrl}`,{
        headers:{
          Authorization:`${localStorage.getItem("login_credential")}`,
        },
      });
      window.location.href = response.data.originalURL;
    
      setError("");
    } catch (error) {
      console.log(error);
      setError("Failed to redirect to URL.");
    }
  };

  const shortUrlLink = shortUrl && (`https://url-shortener-backend-s80x.onrender.com/short/${shortUrl}`,{
    headers:{
      Authorization:`${localStorage.getItem("login_credential")}`,
    },
  }); // Construct absolute short URL

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="long-url">
         Paste Your Long URL:
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Generate Short URL</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <br />
      {shortUrl && (
        <div className="short-url-section">
          <label>
            Short URL:
            <a href={shortUrlLink} target="_blank" onClick={handleRedirect}>
             {`https://url-shortener-backend-s80x.onrender.com/short/${shortUrl}`}
              </a>

          </label>
          <br />
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default ShortenUrl;
