import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "9adfc103f31154764e8d5d054a68b28f    ",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (

    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">London,UK</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          </div>
      </main>
    </div>
  );
}