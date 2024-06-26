import React, { useEffect, useState } from "react";
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
import "./dailyProfit.scss";
import { Link } from "react-router-dom";

const Dailyrevenue = () => {
  const [kpi, setKpi] = useState([]);

  useEffect(() => {
    getKpi().then(setKpi);
  }, []);

  let data = [];
  let res = 0;

  async function getKpi() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/kpi";
    const response = await fetch(url);
    return await response.json();
  }

  function setLowItems() {
    data = kpi
      .filter((item, index) => index < 7)
      .map((item) => {
        let revenue = item.revenue;
        let date = item.date.substr(4, 6);
        res += Number(revenue);
        console.log(res);

        return { name: date, revenue: revenue };
      });
  }
  setLowItems();

  return (
    <div className="dailyProfit">
      <div className="boxInfo">
        <span className="title">
          <img src="weekrev.png" />
          Weekly Revenue
        </span>
        <span className="sum">Rs. {res}</span>
        <span className="link">
          <Link to="/dailychart">View all</Link>
        </span>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 105 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                strokeWidth={2}
                stroke="#2980b9"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dailyrevenue;
