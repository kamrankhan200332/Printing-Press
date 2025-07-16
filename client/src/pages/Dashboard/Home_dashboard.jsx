import React, { useState } from "react";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Home_dashboard = () => {
  const data = [
    { name: "Mon", uv: 400, pv: 240, amt: 240 },
    { name: "Tue", uv: 300, pv: 139, amt: 221 },
    { name: "Wed", uv: 200, pv: 980, amt: 229 },
    { name: "Thu", uv: 278, pv: 390, amt: 200 },
    { name: "Fri", uv: 189, pv: 480, amt: 218 },
    { name: "Sat", uv: 239, pv: 380, amt: 250 },
    { name: "Sun", uv: 349, pv: 430, amt: 210 },
  ];
  return (
    <div className="w-full">
      <div className="mainContent bg-gray-200 flex-1 p-3 rounded space-y-5">
        <div>
          <DashboardHeader />
        </div>

        <div className="space-y-20">
          <div className="boxes grid grid-cols-4 gap-5">
            <div className="box relative rounded-xl p-3 shadow-xl bg-white">
              <div className="text-right">
                <p className="text-gray-500">Today's Money</p>
                <h1 className="text-xl font-bold text-gray-600">$53k</h1>
              </div>
              <div className="dashboard_separator"></div>
              <div className="pt-2">
                <span className="font-semibold text-green-600">+55%</span>
                <span className="text-gray-500"> than last week</span>
              </div>

              <div className="absolute top-0 left-3 bg-black text-white rounded p-2 mt-[-9px]">
                icon
              </div>
            </div>

            <div className="box relative rounded-xl p-3 shadow-xl bg-white">
              <div className="text-right">
                <p className="text-gray-500">Today's Money</p>
                <h1 className="text-xl font-bold text-gray-600">$53k</h1>
              </div>
              <div className="dashboard_separator"></div>
              <div className="pt-2">
                <span className="font-semibold text-green-600">+55%</span>
                <span className="text-gray-500"> than last week</span>
              </div>

              <div className="absolute top-0 left-3 bg-[#b80c9e] text-white rounded p-2 mt-[-9px]">
                icon
              </div>
            </div>

            <div className="box relative rounded-xl p-3 shadow-xl bg-white">
              <div className="text-right">
                <p className="text-gray-500">Today's Money</p>
                <h1 className="text-xl font-bold text-gray-600">$53k</h1>
              </div>
              <div className="dashboard_separator"></div>
              <div className="pt-2">
                <span className="font-semibold text-green-600">+55%</span>
                <span className="text-gray-500"> than last week</span>
              </div>

              <div className="absolute top-0 left-3 bg-green-600 text-white rounded p-2 mt-[-9px]">
                icon
              </div>
            </div>

            <div className="box relative rounded-xl p-3 shadow-xl bg-white">
              <div className="text-right">
                <p className="text-gray-500">Today's Money</p>
                <h1 className="text-xl font-bold text-gray-600">$53k</h1>
              </div>
              <div className="dashboard_separator"></div>
              <div className="pt-2">
                <span className="font-semibold text-green-600">+55%</span>
                <span className="text-gray-500"> than last week</span>
              </div>

              <div className="absolute top-0 left-3 bg-blue-600 text-white rounded p-2 mt-[-9px]">
                icon
              </div>
            </div>
          </div>

          {/* <div className="charts grid grid-cols-3 gap-5">
            <div className="chart relative rounded-xl p-3 shadow-xl bg-white">
              <div className="pt-17">
                <div>
                  <p className="text-gray-700 font-semibold">Website Views</p>
                  <p className="text-gray-500">Last Campaign Performance</p>
                </div>
                <div className="dashboard_separator"></div>
                <div className="pt-2">
                  <span className="icon">icon</span>
                  <span> campaign send 2 days ago</span>
                </div>
              </div>

              <div className="absolute top-[-50px] left-0 bg-[#e91e63] text-white rounded-xl mt-[-9px] px-4 w-full h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
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
                    <Bar
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Bar type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div> */}

          <div className="charts grid grid-cols-3 gap-5">
            {/* Website Views - Bar Chart */}
            <div className="chart relative rounded-xl p-3 shadow-xl bg-white">
              <div className="pt-35">
                <div>
                  <p className="text-gray-700 font-semibold">Website Views</p>
                  <p className="text-gray-500">Last Campaign Performance</p>
                </div>
                <div className="dashboard_separator"></div>
                <div className="pt-2">
                  <span className="icon">icon</span>
                  <span> campaign sent 2 days ago</span>
                </div>
              </div>

              <div className="absolute top-[-50px] left-0 bg-[#e91e63] text-white rounded-xl mt-[-9px] px-2 w-full h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 23, right: 20, left: -15, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f06292" />
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#c2185b",
                        border: "none",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Bar dataKey="pv" fill="#fff" />
                    <Bar dataKey="uv" fill="#f8bbd0" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Daily Sales - Line Chart Green */}
            <div className="chart relative rounded-xl p-3 shadow-xl bg-white">
              <div className="pt-35">
                <div>
                  <p className="text-gray-700 font-semibold">Daily Sales</p>
                  <p className="text-gray-500">
                    (+15%) increase in today sales.
                  </p>
                </div>
                <div className="dashboard_separator"></div>
                <div className="pt-2">
                  <span className="icon">icon</span>
                  <span> updated 4 min ago</span>
                </div>
              </div>

              <div className="absolute top-[-50px] left-0 bg-green-600 text-white rounded-xl mt-[-9px] px-2 w-full h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{ top: 23, right: 15, left: -23, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4ade80" />
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#15803d",
                        border: "none",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#ffffff"
                      strokeWidth={2}
                      dot={{ fill: "#ffffff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Completed Tasks - Line Chart Dark */}
            <div className="chart relative rounded-xl p-3 shadow-xl bg-white">
              <div className="pt-35">
                <div>
                  <p className="text-gray-700 font-semibold">Completed Tasks</p>
                  <p className="text-gray-500">Last Campaign Performance</p>
                </div>
                <div className="dashboard_separator"></div>
                <div className="pt-2">
                  <span className="icon">icon</span>
                  <span> just updated</span>
                </div>
              </div>

              <div className="absolute top-[-50px] left-0 bg-neutral-900 text-white rounded-xl mt-[-9px] px-2 w-full h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{ top: 23, right: 15, left: -16, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#111", border: "none" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#ffffff"
                      strokeWidth={2}
                      dot={{ fill: "#ffffff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_dashboard;
