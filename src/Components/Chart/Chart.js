import React from "react";
import { Bar, Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { data, country }, dailyData }) => {
  const lineChart =
    dailyData?.length !== 0 ? (
      <Line
        data={{
          labels: dailyData?.map(({ date }) => date),
          datasets: [
            {
              data: dailyData?.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData?.map(({ deaths }) => deaths),
              label: "Death",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart = data?.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            lable: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data?.confirmed?.value,
              data?.recovered?.value,
              data?.deaths?.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <>
      <div className={styles.container}>{lineChart}</div>
      <div className={styles.container}>{barChart}</div>
    </>
  );
};

export default Chart;
