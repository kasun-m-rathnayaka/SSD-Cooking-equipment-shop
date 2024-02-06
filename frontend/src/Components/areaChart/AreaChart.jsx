import React, { useEffect, useState } from "react";
import "./areaChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = () => {
  const [kpi, setKpi] = useState([]);

  useEffect(() => {
    getKpi().then(setKpi);
  }, []);

  let data = [];

  async function getKpi() {
    const url = "http://localhost:3000/api/kpi";
    const response = await fetch(url);
    return await response.json();
  }

  function setLowItems() {
    data = kpi
      .filter((item, index) => index < 7)
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
    <div className="areaChart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="expences"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stackId="1"
            stroke="#2ecc71"
            fill="#27ae60"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#3498db"
            fill="#2980b9"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
