import "./App.css";
import Navbar from "./Mycomponents/Navbar";
import { useState, useEffect } from "react";
import Card from "./Mycomponents/Card";

function App() {
  const [city, setCity] = useState("moradabad");
  const [data, setData] = useState(null); // ✅ Use state for data

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=f2595ed437b6458199783436252404&q=${city}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData({ error: true });
      }
    };
    fetchdata();
  }, [city]);

  return (
    <>
      <Navbar city={city} setCity={setCity} />
      {data ? (
        data.error ? (
          <p>Error loading weather data. Please try again.</p>
        ) : (
          <Card data={data} />
        )
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}

export default App;
