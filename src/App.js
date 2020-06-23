import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards/Cards.js";
import Chart from "./Components/Chart/Chart.js";
import CountryPicker from "./Components/CountryPicker/CountryPicker.js";
import styles from "./App.module.css";
import fetchdata from "./Api/index.js";
import img from "./img/image.png";

const App = () => {
  const [data, setData] = useState({ data: "", country: "" });
  useEffect(() => {
    fetchdata().then((responce) => setData({ ...data, data: responce }));
  }, [setData]);
  const countryChange = async (country) => {
    const data = await fetchdata(country);
    setData({ data, country });
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} alt="COVID-19" src={img} />
      <Cards data={data} />
      <CountryPicker countryChange={countryChange} />
      <Chart data={data} />
    </div>
  );
};

export default App;
