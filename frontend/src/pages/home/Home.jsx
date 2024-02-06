import React from "react";
import "./home.scss";
import LowStock from "../../Components/lowStock/LowStock";
import BarChart from "../../Components/barChart/RevBarChart";
import DailyProfit from "../../Components/dailyProfit/DailyProfit";
import DailyCost from "../../Components/dailyCost/DailyCost";
import AreaCharts from "../../Components/areaChart/AreaChart";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <LowStock />
      </div>
      <div className="box box2">
        <DailyProfit />
      </div>
      <div className="box box3">
        <DailyCost />
      </div>
      <div className="box box5">
        <AreaCharts />
      </div>
      <div className="box box7">
        <BarChart />
      </div>
    </div>
  );
};

export default Home;
