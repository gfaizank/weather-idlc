import React, {useState} from "react";
import axios from "axios";
function Weather() {
  const [data, setData]= useState({})
  const [location, setLocation]= useState('')

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2b0a3022a72d1be4413f9506cd608b7c`

  const searchLocation =(event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }  
  }
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className="medium">{data.main.temp.toFixed()}ºC</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main!= undefined && 
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like.toFixed()}ºC</p> : null }
          <p className="small">Feels Like</p>
        </div>
        <div className="humidity"> 
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p className="small">Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
          <p className="small">Wind Speed</p>
        </div>
      </div>
        }
        
      </div>

    </div>
  );
}

export default Weather;
