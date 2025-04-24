import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="w-1/2 mx-auto my-9 border-2  border-gray-700">
        <div className="border-2 border-b-gray-700 text-center">
          <h1>City & Time</h1>
          <h1>
            {props.data.location.name},{props.data.location.region}
          </h1>
          <h1>
            {props.data.location.country}
            &nbsp;<span>|</span>
            &nbsp;
            {props.data.location.localtime}
          </h1>
        </div>
        <div className="text-center border-2 border-b-gray-700 ">
          <h1>Weather Icon</h1>
          <img
            src={props.data.current.condition.icon}
            alt=""
            className="w-1/4 mx-auto"
          />
          <h1>{props.data.current.condition.text}</h1>
        </div>
        <div className="text-center border-2 border-b-gray-700 ">
          <h2>
            Temperature&emsp;<span>|</span>&emsp;
            {props.data.current.temp_c}&deg;C
          </h2>
          <h2>
            Feels-like&emsp;<span>|</span>&emsp;
            {props.data.current.feelslike_c}&deg;C
          </h2>
          <h2>
            Humidity&emsp;<span>|</span>&emsp;
            {props.data.current.humidity}%
          </h2>
          <h2>
            UV Index&emsp;<span>|</span>
            {props.data.current.uv}
          </h2>
        </div>
        <div className="text-center border-2 border-b-gray-700 ">
          <h2>
            Wind Speed&emsp;<span>|</span>&emsp;
            {props.data.current.wind_kph}kph
          </h2>
          <h2>
            Wind Direction&emsp;<span>|</span>&emsp;
            {props.data.current.wind_dir}
          </h2>
          <h2>
            Pressure&emsp;<span>|</span>&emsp;
            {props.data.current.pressure_mb}mb
          </h2>
          <h2>
            Visibility&emsp;<span>|</span>&emsp;
            {props.data.current.vis_km}km
          </h2>
        </div>
        <div className="text-center">
          <h2>
            Precipitation&emsp;<span>|</span>&emsp;
            {props.data.current.precip_mm}mm
          </h2>
          <h2>
            Dew Point&emsp;<span>|</span>&emsp;
            {props.data.current.dewpoint_c}&deg;C
          </h2>
          <h2>
            Cloud Cover&emsp;<span>|</span>&emsp;
            {props.data.current.cloud}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card;
