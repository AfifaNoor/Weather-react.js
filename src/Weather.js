import React, { useEffect, useState } from "react";
import "./App.css";
const Weather = () => {
  const API_KEY = "255214cc959e20c5cb16a55c8094853e";
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);
  console.log("weatherData", weatherData);
  const [maincityname, setMainCityName] = useState();
  const [mainTemp, setMainTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [lowtTemp, setLowTemp] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunset] = useState("");
  console.log(mainTemp, "mainTemp");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data.list);
        const temperature = data.list;
        temperature.map((item) => {
          setMainTemp(item.main.temp);
          setHumidity(item.main.humidity);
          setLowTemp(item.main.temp_min);
          const sunrise = data.city.sunrise;
          setSunRise(sunrise);
          const sunset = data.city.sunset;
          setSunset(sunset);
        });
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const handle = () => {
    fetchData();
  };



  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=patna&appid=${API_KEY}`
        );
  
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data.list);
          const temperature = data.list;
          temperature.map((item) => {
            setMainTemp(item.main.temp);
            setHumidity(item.main.humidity);
            setLowTemp(item.main.temp_min);
            const sunrise = data.city.sunrise;
            setSunRise(sunrise);
            const sunset = data.city.sunset;
            setSunset(sunset);
          });
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData()
  },[])

  return (
    <>
   
      <div >
        <div class="desktop">
          <div class="rectangle-2"></div>
          <div class="search-box-rectangle"></div>
          <div class="refresh">Refresh</div>

          <svg
            class="mdi-refresh-circle"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white" />
          </svg>

          <svg
            class="mdi-weather-sun-wireless-outline"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white" />
          </svg>
          <div   style={{ zIndex: 1, position: 'relative',marginLeft:"1000px",marginTop:'100px' }}>
      <textarea
       
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search your city here.."
              />
              <br></br>
              <button  onClick={handle}>
                Submit
              </button>
              </div>
          <div class="weather-99">Weather 99</div>
          <div class="group-6">
            <div class="high-temperature-low-temperature-humidity-sunrise-time-sunset-time">
              High Temperature
              <br />
              <br />
              Low Temperature
              <br />
              <br />
              Humidity
              <br />
              <br />
              Sunrise Time
              <br />
              <br />
              Sunset Time
            </div>
            <div class="group-1">
              <div class="rectangle-3"></div>

              <svg
                class="fluent-weather-sunny-high-20-regular"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" />
              </svg>

              <div class="line-3"></div>
            
              <div class="_23-c-63-f-17-c-43-f-76-06-21-am-05-93-pm">
                {mainTemp}
                <br />
                <br />
                {lowtTemp}
                <br />
                <br />
                {humidity}
                <br />
                <br />
                {sunRise}
                <br />
                <br />
                {sunSet}
              </div>
              <div class="sunny">Sunny</div>
              <div class="_20-jan-2023">20 Jan 2023</div>
            </div>
            <div class="group-2">
              <div class="rectangle-32"></div>
              <svg
                class="material-symbols-weather-snowy-outline"
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" />
              </svg>

              <div class="line-32"></div>
              <div class="_23-c-63-f-17-c-43-f-76-06-21-am-05-93-pm2">
                {mainTemp}
                <br />
                <br />
                {lowtTemp}
                <br />
                <br />
                {humidity}
                <br />
                <br />
                {sunRise}
                <br />
                <br />
                {sunSet}
              </div>
              <div class="snowy">Snowy</div>
              <div class="_21-jan-2023">21 Jan 2023</div>
            </div>
            <div class="group-3">
              <div class="rectangle-33"></div>
              <svg
                class="carbon-mixed-rain-hail"
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_117)">
                  <path fill="white" />
                  <path fill="white" />
                  <path fill="white" />
                  <path fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_5_117">
                    <rect
                      width="44"
                      height="44"
                      fill="white"
                      transform="translate(0.100342)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div class="line-33"></div>
              <div class="_23-c-63-f-17-c-43-f-76-06-21-am-05-93-pm3">
                {mainTemp}
                <br />
                <br />
                {lowtTemp}
                <br />
                <br />
                {humidity}
                <br />
                <br />
                {sunRise}
                <br />
                <br />
                {sunSet}
              </div>
              <div class="rainy">Rainy</div>
              <div class="_22-jan-2023">22 Jan 2023</div>
            </div>
            <div class="group-4">
              <div class="rectangle-34"></div>
              <svg
                class="mdi-weather-windy"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" />
              </svg>

              <div class="line-34"></div>
              <div class="_23-c-63-f-17-c-43-f-76-06-21-am-05-93-pm4">
                {humidity}
                <br />
                <br />
                {lowtTemp}
                <br />
                <br />
                {humidity}
                <br />
                <br />
                {sunRise}
                <br />
                <br />
                {sunSet}
              </div>
              <div class="windy">Windy</div>
              <div class="_23-jan-2023">23 Jan 2023</div>
            </div>
            <div class="group-5">
              <div class="rectangle-35"></div>
              <svg
                class="carbon-mixed-rain-hail2"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_135)">
                  <path fill="white" />
                  <path fill="white" />
                  <path fill="white" />
                  <path fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_5_135">
                    <rect
                      width="51.0223"
                      height="51.0223"
                      fill="white"
                      transform="translate(0.472168 0.817841)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div class="line-35"></div>
              <div class="_23-c-63-f-17-c-43-f-76-06-21-am-05-93-pm5">
                {mainTemp}
                <br />
                <br />
                {lowtTemp}
                <br />
                <br />
                {humidity}
                <br />
                <br />
                {sunRise}
                <br />
                <br />
                {sunSet}a
              </div>
              <div class="rainy2">Rainy</div>
              <div class="_24-jan-2023">24 Jan 2023</div>
            </div>
          </div>
          <div class="group-7">
         
            <div class="_27-10-36-n-78-0-29-e">
            <h1>{city}</h1>
              27°10&#039;36&#039;&#039; N &amp; 78°0&#039;29&#039;&#039; E
            </div>

            <svg
              class="material-symbols-share-location"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#1D2540" />
            </svg>

            <div class="search-box">
              <svg
                class="search-icon"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#444444" />
              </svg>
            </div>
            <div class="agra-uttar-pradesh">{maincityname}</div>
            <div class="line-2"></div>
          </div>
          <div class="select-date">Select Date:</div>
          <div class="group-8">
            <div class="rectangle-4"></div>
            <svg
              class="simple-line-icons-calender"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_171)">
                <path fill="#444444" />
              </g>
              <defs>
                <clipPath id="clip0_5_171">
                  <rect
                    width="23.3028"
                    height="23.3028"
                    fill="white"
                    transform="translate(0.321091 0.137619)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div class="_20-jan-20232">20 Jan 2023</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
