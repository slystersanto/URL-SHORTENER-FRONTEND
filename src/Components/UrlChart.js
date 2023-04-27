import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UrlChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://url-shortener-backend-s80x.onrender.com/urls",{
          headers:{
            Authorization:`${localStorage.getItem("login_credential")}`,
          },
        });
        console.log(response.data);
        const urlsPerDay = response.data.urlsPerDay;
        const urlsPerMonth = response.data.urlsPerMonth;
        const data = [
          { name: 'URLs per day', count: urlsPerDay },
          { name: 'URLs per month', count: urlsPerMonth },
        ];
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>URLs</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default UrlChart;
