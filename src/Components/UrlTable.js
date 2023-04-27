import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlTable = () => {
  const [urls, setUrls] = useState([]);
  const [urlsPerDay, setUrlsPerDay] = useState(0);
  const [urlsPerMonth, setUrlsPerMonth] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://url-shortener-backend-s80x.onrender.com/urls",{
          headers:{
            Authorization:`${localStorage.getItem("login_credential")}`
          }
        });
        console.log(response.data);
        setUrls(response.data.urls);
        setUrlsPerDay(response.data.urlsPerDay);
        setUrlsPerMonth(response.data.urlsPerMonth);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Created On</th>
            
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>{url.longURL}</td>
              <td>{url.shortURL}</td>
              <td>{new Date(url.created_at).toLocaleString()}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
