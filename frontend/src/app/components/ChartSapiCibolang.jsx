"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Data extracted from the provided screenshot
const genderData = {
  labels: [
    "Pak Anwar Rojab",
    "Pak Ade Heri",
    "Pak Dadang Jahana",
    "Yayan Rihana",
    "Wahyat",
    "Deni Hidayat",
    "Ade Tansa",
    "Cucun non anggota",
    "Asep Samsu",
    "Cucun anggota",
    "Nandang Suhendra",
    "Ujang Rahyana",
    "Asep Sumaryana",
    "Jajang Carli",
  ],
  datasets: [
    {
      label: "Jantan",
      data: [1, 1, 0, 0, 7, 0, 4, 2, 1, 0, 3, 2, 0, 2],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Betina",
      data: [12, 7, 7, 4, 8, 5, 0, 0, 0, 3, 5, 0, 7, 0],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const typeData = {
  labels: [
    "Pak Anwar Rojab",
    "Pak Ade Heri",
    "Pak Dadang Jahana",
    "Yayan Rihana",
    "Wahyat",
    "Deni Hidayat",
    "Ade Tansa",
    "Cucun non anggota",
    "Asep Samsu",
    "Cucun anggota",
    "Nandang Suhendra",
    "Ujang Rahyana",
    "Asep Sumaryana",
    "Jajang Carli",
  ],
  datasets: [
    {
      label: "Perah",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
    {
      label: "Daging",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const healthConditionData = {
  labels: [
    "Pak Anwar Rojab",
    "Pak Ade Heri",
    "Pak Dadang Jahana",
    "Yayan Rihana",
    "Wahyat",
    "Deni Hidayat",
    "Ade Tansa",
    "Cucun non anggota",
    "Asep Samsu",
    "Cucun anggota",
    "Nandang Suhendra",
    "Ujang Rahyana",
    "Asep Sumaryana",
    "Jajang Carli",
  ],
  datasets: [
    {
      label: "Sehat",
      data: [13, 8, 7, 4, 15, 5, 4, 2, 1, 3, 8, 2, 7, 5],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Sakit",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

export default function Wilayah() {
  const [chartType, setChartType] = useState("gender");

  const getChartData = () => {
    switch (chartType) {
      case "gender":
        return genderData;
      case "type":
        return typeData;
      case "healthCondition":
        return healthConditionData;
      default:
        return genderData;
    }
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Sapi
        </h3>

        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setChartType("gender")}
            className={`px-4 py-2 rounded-md ${
              chartType === "gender"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis Kelamin
          </button>
          <button
            onClick={() => setChartType("type")}
            className={`px-4 py-2 rounded-md ${
              chartType === "type"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis
          </button>
          <button
            onClick={() => setChartType("healthCondition")}
            className={`px-4 py-2 rounded-md ${
              chartType === "healthCondition"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Kondisi Kesehatan
          </button>
        </div>

        <div className="w-full h-[500px] mx-auto">
          <Bar data={getChartData()} options={options} />
        </div>
      </div>
    </section>
  );
}
