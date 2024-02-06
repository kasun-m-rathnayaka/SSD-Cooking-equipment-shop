import React, { useEffect, useState } from "react";
import "./dailyCost.scss";
import { Link } from "react-router-dom";
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

const DailyCost = () => {
  const [kpi, setKpi] = useState([]);

  useEffect(() => {
    getKpi().then(setKpi);
  }, []);

  let data = [];
  let res = 0;

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
        let date = item.date.substr(4, 6);
        res += Number(expences);
        console.log(res);

        return { name: date, expences: expences };
      });
  }
  setLowItems();
  return (
    <div className="dailyCost">
      <div className="boxInfo">
        <span className="title">
          <img src="userIcon.svg" />
          Daily Expences
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
                dataKey="expences"
                strokeWidth={2}
                stroke="#e74c3c"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DailyCost;
