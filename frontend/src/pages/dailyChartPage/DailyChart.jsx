import React, { useEffect, useState } from "react";
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
import "./dailyChart.scss";

const DailyChart = () => {
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

  function setLowItems() {
    data = kpi
      .filter((item, index) => index < 14)
      .map((item) => {
        let expences = item.expences;
        let profit = item.profit;
        let revenue = item.revenue;
        let date = item.date.substr(4, 6);

        return {
          name: date,
          expences: expences,
          profit: profit,
          revenue: revenue,
        };
      });
  }
  setLowItems();

  return (
    <div className="dailyChart">
      <div className="title">Daily Information</div>
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
            <Bar dataKey="profit" stackId="a" fill="#27ae60" />
            <Bar dataKey="expences" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="b" fill="#2980b9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyChart;
