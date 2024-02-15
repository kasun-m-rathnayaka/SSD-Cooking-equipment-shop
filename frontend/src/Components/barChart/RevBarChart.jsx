import React, { useEffect, useState } from "react";
import "./barChart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevBarChart = () => {
  const [kpi, setKpi] = useState([]);

  useEffect(() => {
    getKpi().then(setKpi);
  }, []);

  let data = [];

  async function getKpi() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/kpi";
    const response = await fetch(url);
    return await response.json();
  }

  let date = Date();
  console.log(date.substring(4, 7) + date.substring(10, 15));
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let revenue = 0;

  function setLowItems() {
    for (let i = 0; i < 12; i++) {
      kpi
        .filter(
          (item) =>
            item.date.substring(4, 7) + date.substring(10, 15) ==
            monthNames[i] + date.substring(10, 15)
        )
        .map((item) => {
          revenue += item.revenue;
        });
      data.push({ name: monthNames[i], revenue: revenue });
      revenue = 0;
    }
  }
  setLowItems();

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="revenue.png" />
          <span>Monthly Revenue</span>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevBarChart;
