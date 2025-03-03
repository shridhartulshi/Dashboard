import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from "recharts";

const data = [
  { name: "Jan", sales: 400, profit: 240 },
  { name: "Feb", sales: 300, profit: 139 },
  { name: "Mar", sales: 200, profit: 980 },
  { name: "Apr", sales: 278, profit: 390 },
  { name: "May", sales: 189, profit: 480 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 300 },
  { name: "Grocery", value: 300 },
  { name: "Furniture", value: 200 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

export default function Dashboard() {
  return (
    <div className="px-9 flex w-5/6 flex-col items-center min-h-screen ml-16  bg-gray-100">
      <h1 className="text-4xl font-bold my-8 text-center">📊 Dashboard</h1>
      
      {/* Bar Chart */}
      <div className="bg-white w-full p-6 shadow-lg rounded-lg mb-8 h-[450px]">
        <h2 className="text-2xl font-semibold mb-4 text-center w-full">Sales & Profit (Bar Chart)</h2>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data} barSize={60}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="profit" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Pie Chart */}
      <div className="bg-white w-full p-6 shadow-lg rounded-lg mb-8 h-[450px]">
        <h2 className="text-2xl font-semibold mb-4 text-center w-full">Category Sales (Pie Chart)</h2>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="value">
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Line Chart */}
      <div className="bg-white w-full p-6 shadow-lg rounded-lg h-[450px]">
        <h2 className="text-2xl font-semibold mb-4 text-center w-full">Sales Trend (Line Chart)</h2>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}