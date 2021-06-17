import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 30, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 3,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <div className="chartarea">
      <div className="header">
        <h1 className="title">Tizen</h1>
        <img />
      </div>
      <div className="bar">
        <Bar data={data} options={options} />
      </div>
    </div>
  </>
);

export default VerticalBar;
