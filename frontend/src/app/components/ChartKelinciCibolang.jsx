"use client";

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const typeData = {
  labels: ["Lokal", "Non-Lokal"],
  datasets: [
    {
      data: [162, 0],
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
      data: [147, 14],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const genderData = {
  labels: ["Jantan", "Betina"],
  datasets: [
    {
      data: [13, 148],
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
  const [chartType, setChartType] = useState("type");

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
        return typeData;
    }
  };

  const getChartText = () => {
    switch (chartType) {
      case "type":
        return "Diagram ini menunjukkan jenis kelinci yang dimiliki, baik untuk lokal maupun untuk non-lokal. Jumlah kelinci lokal adalah 161, sementara jumlah kelinci non-lokal adalah 0.";
      case "healthCondition":
        return "Diagram ini menunjukkan kondisi kesehatan kelinci, yang mencakup kelinci sehat dan kelinci sakit. Jumlah kelinci sehat adalah 147, sementara jumlah kelinci sakit adalah 14.";
      case "gender":
        return "Diagram ini menunjukkan jenis kelamin kelinci, yang mencakup jumlah kelinci jantan dan betina. Jumlah kelinci jantan adalah 13, sementara jumlah kelinci betina adalah 148.";
      case "owner":
        return "Diagram ini menunjukkan kepemilikan kelinci, yang mencakup kelinci milik KPBS dan milik mandiri. Jumlah kelinci milik KPBS adalah 79, sementara milik mandiri adalah 9.";
      default:
        return "";
    }
  };

  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="items-start text-[24px] p-2 text-black-800 font-bold font-josefin text-left mb-8 inline-block">
          Kelinci
        </h3>

        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setChartType("type")}
            className={`px-4 py-2 rounded-md ${
              chartType === "type"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Jenis Kelinci
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
            onClick={() => setChartType("owner")}
            className={`px-4 py-2 rounded-md ${
              chartType === "owner"
                ? "bg-blue-700 text-white"
                : "bg-button-primary-hover text-white"
            }`}
          >
            Kepemilikan
          </button>
        </div>

        <div className="w-full h-[500px] mx-auto flex">
          <div className="w-1/2">
            <Pie data={getChartData()} options={options} />
          </div>
          <div className="w-1/2 flex items-center justify-start pl-10">
            <p className="text-left text-lg font-josefin">{getChartText()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
