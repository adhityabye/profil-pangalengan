"use client";

import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const religionData = {
  labels: [
    "Islam",
    "Kristen",
    "Katholik",
    "Hindu",
    "Budha",
    "Khonghucu",
    "Aliran Kepercayaan lainnya",
  ],
  datasets: [
    {
      label: "Laki-laki",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [2976, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      label: "Perempuan",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.7)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [2871, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const pieReligionData = {
  labels: religionData.labels,
  datasets: [
    {
      data: religionData.datasets[0].data.map(
        (value, index) => value + religionData.datasets[1].data[index]
      ),
      backgroundColor: [
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 205, 86, 0.5)",
        "rgba(201, 203, 207, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(201, 203, 207, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function Religion() {
  const [chartType, setChartType] = useState("bar");

  const getChartData = () => {
    return chartType === "bar" ? religionData : pieReligionData;
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Agama/Aliran Kepercayaan
        </h3>

        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setChartType("bar")}
            className={`px-4 py-2 rounded-md ${
              chartType === "bar"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Bar Chart
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`px-4 py-2 rounded-md ${
              chartType === "pie"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Pie Chart
          </button>
        </div>

        <div className="w-full h-[500px] mx-auto">
          {chartType === "bar" ? (
            <Bar data={getChartData()} options={options} />
          ) : (
            <Pie data={getChartData()} options={options} />
          )}
        </div>
      </div>
    </section>
  );
}
