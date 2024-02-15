import React, { useEffect, useState } from "react";
import "./monthlyInfo.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonthlyInfo = () => {
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
  let cost = 0;
  let profit = 0;

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
          cost += item.expences;
          profit += item.profit;
        });
      data.push({
        name: monthNames[i],
        revenue: revenue,
        expences: cost,
        profit: profit,
      });
      revenue = 0;
      cost = 0;
      profit = 0;
    }
  }
  setLowItems();

  return (
    <div className="monthlyInfo">
      <div className="title">Monthly Information</div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
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
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2980b9"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expences" stroke="#8884d8" />
            <Line type="monotone" dataKey="profit" stroke="#27ae60" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyInfo;
