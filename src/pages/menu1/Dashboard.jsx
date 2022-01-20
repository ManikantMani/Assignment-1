import React from "react";
import "../page_style.css";
import { useCallback, useState } from "react";
import {
  BarChart,
  PieChart,
  Pie,
  Sector,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

//for pie chart

const data = [
  { name: "Saving", value: 400, color: '#E21717' },
  { name: "Transportation", value: 300, color: '#E21717' },
  { name: "Food", value: 300, color: '#E21717' },
  { name: "Clothing", value: 200, color: '#E21717' },
  { name: "Housing", value: 250, color: '#E21717' },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    fill1,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        fill={fill1}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius}
        outerRadius={outerRadius + 12}
        fill={fill}
        fill1={fill1}
      />
    </g>
  );
};

const Dashboard = () => {
  // for pie chart

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  // for bar chart

  const data2 = [
    {
      name: "Jan",
      Income: 8,
      Saving: 2,
      Expense: 4,
      Extra: 2,
    },
    {
      name: "Feb",
      Income: 6,
      Saving: 2,
      Expense: 3,
      Extra: 3,
    },
    {
      name: "Mar",
      Income: 5.3,
      Saving: 4.8,
      Expense: 3,
      Extra: 2.5,
    },
    {
      name: "Apr",
      Income: 8,
      Saving: 3,
      Expense: 5,
      Extra: 3.8,
    },
    {
      name: "May",
      Income: 4,
      Saving: 2,
      Expense: 4,
      Extra: 4.3,
    },
    {
      name: "June",
      Income: 8,
      Saving: 3,
      Expense: 5,
      Extra: 2.2,
    },

  ];

  return (
    <>
      <div className="container">
        <div className="main_container">
          <div className="main_heading">
            <div className="detail">
              <h1 className="welcome">Welcome</h1>
              <h1 className="name">Manikant Mani</h1>
              <button className="location_button">br, india</button>
            </div>
          </div>
          <div className="graph_group">
            <div className="pie_chart">
              <h1 className="pie_heading">Income Variations</h1>
              <div className="chart">
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  innerRadius={70}
                  outerRadius={120}
                  fill="#383CC1"
                  onMouseEnter={onPieEnter}
                />
              </PieChart></div>
            </div>
            <div className="bar_graph">
              <h1 className="bar_heading">Net Income </h1>
              <div className="graph">
              <BarChart
                width={500}
                height={300}
                data={data2}
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
                <Bar dataKey="Income" stackId="a" fill="#8884d8" />
                <Bar dataKey="Saving" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Expense" stackId="a" fill="#FF6263" />
                <Bar dataKey="Extra" stackId="b" fill="#E07C24" />
              </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
