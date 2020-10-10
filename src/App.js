import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards/Cards.js";
import Chart from "./Components/Chart/Chart.js";
import CountryPicker from "./Components/CountryPicker/CountryPicker.js";
import styles from "./App.module.css";
import fetchData, { fetchDailyData } from "./Api/index.js";
import img from "./img/image.png";
import Spinner from "./Components/Loading/Loading";

const App = () => {
  const [data, setData] = useState({ data: "", country: "" });
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const responce = async () => {
      const res = await fetchData();
      setData({ ...data, data: res });
    };
    const fetchDailyDataFunction = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchDailyDataFunction();
    responce();
  }, []);
  const countryChange = async ([country, code]) => {
    setLoading(true);
    const data = await fetchData(country);
    const dailyData = await fetchDailyData(code);
    setDailyData(dailyData);
    setData({ data, country });
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      {!loading ? null : <Spinner />}
      <img className={styles.img} alt="COVID-19" src={img} />
      {data && data.data ? <Cards data={data} /> : null}
      <CountryPicker countryChange={countryChange} />
      {data ? <Chart data={data} dailyData={dailyData} /> : null}
    </div>
  );
};

export default App;
