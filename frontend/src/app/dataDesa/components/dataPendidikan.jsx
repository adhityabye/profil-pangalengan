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

const educationData = {
  labels: [
    "Belum TK",
    "TK/Playgroup",
    "7-18 Tidak Sekolah",
    "7-18 Sekolah",
    "18-56 Tidak Sekolah",
    "18-56 Tidak Tamat SD",
    "18-56 Tidak Tamat SLTP",
    "18-56 Tidak Tamat SLTA",
    "Tamat SD",
    "Tamat SMP",
    "Tamat SMA",
    "Tamat D-1",
    "Tamat D-2",
    "Tamat D-3",
    "Tamat S-1",
    "Tamat S-2",
    "Tamat S-3",
    // "Tamat SLB A",
    // "Tamat SLB B",
    // "Tamat SLB C",
  ],
  datasets: [
    {
      label: "Laki-laki",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [
        127, 51, 0, 556, 11, 87, 182, 302, 753, 312, 214, 8, 2, 9, 18, 0, 0, 0,
        0, 0,
      ],
    },
    {
      label: "Perempuan",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.7)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [
        87, 70, 0, 537, 13, 77, 174, 219, 884, 316, 255, 8, 2, 11, 19, 0, 0, 0,
        0, 0,
      ],
    },
  ],
};

const pieData = {
  labels: educationData.labels,
  datasets: [
    {
      label: "Total",
      data: educationData.datasets[0].data.map(
        (val, idx) => val + educationData.datasets[1].data[idx]
      ),
      backgroundColor: educationData.labels.map(
        (_, idx) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 0.5)`
      ),
      borderColor: educationData.labels.map(
        (_, idx) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 1)`
      ),
      borderWidth: 1,
      hoverBackgroundColor: educationData.labels.map(
        (_, idx) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 0.7)`
      ),
      hoverBorderColor: educationData.labels.map(
        (_, idx) =>
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 1)`
      ),
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw}`;
        },
      },
    },
  },
};

const pieOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw}`;
        },
      },
    },
  },
};

export default function DataPendidikan() {
  const [chartType, setChartType] = useState("bar");

  const getChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={educationData} options={options} />;
      case "pie":
        return <Pie data={pieData} options={pieOptions} />;
      default:
        return <Bar data={educationData} options={options} />;
    }
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Tingkatan Pendidikan
        </h3>
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setChartType("bar")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              chartType === "bar"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Histogram
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              chartType === "pie"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Pie Chart
          </button>
        </div>
        <div className="w-full h-[500px] mx-auto">{getChart()}</div>
        {chartType === "pie" && (
          <p className="mt-4 text-center">
            Keterangan: Diagram lingkaran menunjukkan total jumlah berdasarkan
            tingkatan pendidikan.
          </p>
        )}
      </div>
    </section>
  );
}
