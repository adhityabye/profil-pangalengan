"use client";

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const typeData = {
  labels: ["Perah", "Daging"],
  datasets: [
    {
      data: [88, 0],
      backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

const healthConditionData = {
  labels: ["Sehat", "Sakit"],
  datasets: [
    {
      data: [880, 0],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const vaccineData = {
  labels: ["Vaksin", "Tidak Vaksin"],
  datasets: [
    {
      data: [81, 7],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const genderData = {
  labels: ["Jantan", "Betina"],
  datasets: [
    {
      data: [22, 66],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const ownerData = {
  labels: ["KPBS", "Mandiri"],
  datasets: [
    {
      data: [79, 9],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

export default function Wilayah() {
  const [chartType, setChartType] = useState("healthCondition");

  const getChartData = () => {
    switch (chartType) {
      case "type":
        return typeData;
      case "healthCondition":
        return healthConditionData;
      case "vaccineStatus":
        return vaccineData;
      case "gender":
        return genderData;
      case "owner":
        return ownerData;
      default:
        return healthConditionData;
    }
  };

  const getChartText = () => {
    switch (chartType) {
      case "type":
        return "Diagram ini menunjukkan jenis sapi yang dimiliki, baik untuk perah maupun untuk daging. Jumlah sapi perah adalah 88, sementara jumlah sapi daging adalah 0.";
      case "healthCondition":
        return "Diagram ini menunjukkan kondisi kesehatan sapi, yang mencakup sapi sehat dan sapi sakit. Jumlah sapi sehat adalah 880, sementara jumlah sapi sakit adalah 0.";
      case "vaccineStatus":
        return "Diagram ini menunjukkan status vaksinasi sapi, yang mencakup sapi yang sudah divaksin dan yang belum divaksin. Jumlah sapi yang sudah divaksin adalah 81, sementara yang belum divaksin adalah 7.";
      case "gender":
        return "Diagram ini menunjukkan jenis kelamin sapi, yang mencakup jumlah sapi jantan dan betina. Jumlah sapi jantan adalah 22, sementara jumlah sapi betina adalah 66.";
      case "owner":
        return "Diagram ini menunjukkan kepemilikan sapi, yang mencakup sapi milik KPBS dan milik mandiri. Jumlah sapi milik KPBS adalah 79, sementara milik mandiri adalah 9.";
      default:
        return "";
    }
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-4 md:px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Sapi
        </h3>

        <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
          <button
            onClick={() => setChartType("healthCondition")}
            className={`px-4 py-2 m-1 rounded-md ${
              chartType === "healthCondition"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Kondisi Kesehatan
          </button>
          <button
            onClick={() => setChartType("type")}
            className={`px-4 py-2 m-1 rounded-md ${
              chartType === "type"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis Sapi
          </button>
          <button
            onClick={() => setChartType("vaccineStatus")}
            className={`px-4 py-2 m-1 rounded-md ${
              chartType === "vaccineStatus"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Status Vaksin
          </button>
          <button
            onClick={() => setChartType("gender")}
            className={`px-4 py-2 m-1 rounded-md ${
              chartType === "gender"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis Kelamin
          </button>
          <button
            onClick={() => setChartType("owner")}
            className={`px-4 py-2 m-1 rounded-md ${
              chartType === "owner"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Kepemilikan
          </button>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:justify-center">
          <div className="w-full md:w-1/2 h-64 md:h-[500px]">
            <Pie data={getChartData()} options={options} />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-4 md:pl-10 mt-6 md:mt-0">
            <p className="text-left text-lg font-josefin">{getChartText()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
