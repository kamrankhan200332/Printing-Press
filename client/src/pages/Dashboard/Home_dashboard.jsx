import React, { useState } from "react";
import { FaRegStar, FaUser, FaEye, FaPencilAlt } from "react-icons/fa";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

import {
  FormControl,
  MenuItem,
  Select,
  Button,
  Pagination,
} from "@mui/material";

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
  BarChart,
  Bar,
} from "recharts";

const Home_dashboard = () => {
  const [showBy, setShowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  const [brandBy, setBrandBy] = useState("");
  const [searchBy, setSearchBy] = useState("");
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
      <div className="mainContent bg-gray-200 flex-1 p-3 rounded pt-5">
        <div className="space-y-10">
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
                    <p className="text-gray-700 font-semibold">
                      Completed Tasks
                    </p>
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
                        contentStyle={{
                          backgroundColor: "#111",
                          border: "none",
                        }}
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

          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Best Selling Products
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Show By */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">
                  SHOW BY
                </h4>
                <FormControl size="small" fullWidth>
                  <Select
                    value={showBy}
                    onChange={(e) => setShowBy(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Category By */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">
                  CATEGORY BY
                </h4>
                <FormControl size="small" fullWidth>
                  <Select
                    value={catBy}
                    onChange={(e) => setCatBy(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Brand By */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">
                  BRAND BY
                </h4>
                <FormControl size="small" fullWidth>
                  <Select
                    value={brandBy}
                    onChange={(e) => setBrandBy(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Search By */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">
                  SEARCH BY
                </h4>
                <FormControl size="small" fullWidth>
                  <Select
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-blue-700 text-left text-white font-semibold">
                  <tr>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      UID
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400 w-[200px]">
                      PRODUCT
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      CATEGORY
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      BRAND
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      PRICE
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      STOCK
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      RATING
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      ORDER
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400">
                      SALES
                    </th>
                    <th className="py-3 px-2 text-center border border-gray-400 w-[180px]">
                      ACTION
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-2 text-center border border-gray-400">
                      #1
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded border overflow-hidden">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h6 className="font-semibold text-gray-800 text-sm">
                            Tops & Skirt Set
                          </h6>
                          <p className="text-xs text-gray-500 leading-tight">
                            Summer exclusive for women
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      women's
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      richMan
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400 w-24">
                      <div className="flex flex-col items-center">
                        <del className="text-gray-400 text-sm">$21.00</del>
                        <span className="text-red-600 font-bold text-sm ml-1">
                          $21.00
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      30
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      4.9 (16)
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      380
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      $38k
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className=" gap-2 flex-wrap flex items-center justify-center">
                        <Link to="/product/details">
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className="!min-w-0"
                          >
                            <FaEye />
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          className="!min-w-0"
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          className="!min-w-0"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-2 text-center border border-gray-400">
                      #1
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded border overflow-hidden">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h6 className="font-semibold text-gray-800 text-sm">
                            Tops & Skirt Set
                          </h6>
                          <p className="text-xs text-gray-500 leading-tight">
                            Summer exclusive for women
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      women's
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      richMan
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400 w-24">
                      <div className="flex flex-col items-center">
                        <del className="text-gray-400 text-sm">$21.00</del>
                        <span className="text-red-600 font-bold text-sm ml-1">
                          $21.00
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      30
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      4.9 (16)
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      380
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      $38k
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className=" gap-2 flex-wrap flex items-center justify-center">
                        <Link to="/product/details">
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className="!min-w-0"
                          >
                            <FaEye />
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          className="!min-w-0"
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          className="!min-w-0"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-2 text-center border border-gray-400">
                      #1
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded border overflow-hidden">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h6 className="font-semibold text-gray-800 text-sm">
                            Tops & Skirt Set
                          </h6>
                          <p className="text-xs text-gray-500 leading-tight">
                            Summer exclusive for women
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      women's
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      richMan
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400 w-24">
                      <div className="flex flex-col items-center">
                        <del className="text-gray-400 text-sm">$21.00</del>
                        <span className="text-red-600 font-bold text-sm ml-1">
                          $21.00
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      30
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      4.9 (16)
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      380
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      $38k
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className=" gap-2 flex-wrap flex items-center justify-center">
                        <Link to="/product/details">
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className="!min-w-0"
                          >
                            <FaEye />
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          className="!min-w-0"
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          className="!min-w-0"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-2 text-center border border-gray-400">
                      #1
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded border overflow-hidden">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h6 className="font-semibold text-gray-800 text-sm">
                            Tops & Skirt Set
                          </h6>
                          <p className="text-xs text-gray-500 leading-tight">
                            Summer exclusive for women
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      women's
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      richMan
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400 w-24">
                      <div className="flex flex-col items-center">
                        <del className="text-gray-400 text-sm">$21.00</del>
                        <span className="text-red-600 font-bold text-sm ml-1">
                          $21.00
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      30
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      4.9 (16)
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      380
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      $38k
                    </td>
                    <td className="py-2 px-2 text-center border border-gray-400">
                      <div className=" gap-2 flex-wrap flex items-center justify-center">
                        <Link to="/product/details">
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className="!min-w-0"
                          >
                            <FaEye />
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          className="!min-w-0"
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          className="!min-w-0"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-600">
                Showing <b>12</b> of <b>60</b>
              </p>
              <Pagination
                count={10}
                color="primary"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_dashboard;
