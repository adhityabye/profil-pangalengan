"use client";

import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const healthConditionData = {
  labels: [
    "Rismansyah",
    "Pak Acin",
    "Pak Agus Setyawan",
    "Kang Kusniadi",
    "Kang Sandi",
    "Pak Iwan",
    "Pak Atep",
    "Kang Lius",
    "Kang Agus",
    "Kang Asep",
  ],
  datasets: [
    {
      label: "Sehat",
      data: [6, 6, 7, 7, 8, 9, 7, 10, 15, 29],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Sakit",
      data: [0, 0, 5, 3, 0, 2, 0, 0, 0, 0],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const genderData = {
  labels: [
    "Rismansyah",
    "Pak Acin",
    "Pak Agus Setyawan",
    "Kang Kusniadi",
    "Kang Sandi",
    "Pak Iwan",
    "Pak Atep",
    "Kang Lius",
    "Kang Agus",
    "Kang Asep",
  ],
  datasets: [
    {
      label: "Jantan",
      data: [1, 0, 1, 1, 1, 2, 2, 1, 1, 1],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Betina",
      data: [5, 6, 6, 6, 7, 7, 7, 10, 14, 28],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const vaccinationStatusData = {
  labels: [
    "Rismansyah",
    "Pak Acin",
    "Pak Agus Setyawan",
    "Kang Kusniadi",
    "Kang Sandi",
    "Pak Iwan",
    "Pak Atep",
    "Kang Lius",
    "Kang Agus",
    "Kang Asep",
  ],
  datasets: [
    {
      label: "Vaccinated",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

export default function Wilayah() {
  const [chartType, setChartType] = useState("healthCondition");

  const getChartData = () => {
    switch (chartType) {
      case "healthCondition":
        return healthConditionData;
      case "gender":
        return genderData;
      case "vaccinationStatus":
        return vaccinationStatusData;
      default:
        return healthConditionData;
    }
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Kelinci
        </h3>
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setChartType("healthCondition")}
            className={`px-4 py-2 rounded-md ${
              chartType === "healthCondition"
                ? "bg-button-primary text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Kondisi Kesehatan
          </button>
          <button
            onClick={() => setChartType("gender")}
            className={`px-4 py-2 rounded-md ${
              chartType === "gender"
                ? "bg-button-primary text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis Kelamin
          </button>
          <button
            onClick={() => setChartType("vaccinationStatus")}
            className={`px-4 py-2 rounded-md ${
              chartType === "vaccinationStatus"
                ? "bg-button-primary text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Status Vaksin
          </button>
        </div>

        <div className="w-full h-[500px] mx-auto">
          <Bar data={getChartData()} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </section>
  );
}
