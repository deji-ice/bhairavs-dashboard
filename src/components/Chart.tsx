/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "S", task: 1 },
    { name: "M", task: 2 },
    { name: "T", task: 1 },
    { name: "W", task: 2.5 },
    { name: "T", task: 1.5 },
    { name: "F", task: 2 },
    { name: "S", task: 2 },
  ];
  
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#2E2E2E",
            color: "#FFF",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <p>{`${payload[0].value} Task`}</p>
        </div>
      );
    }
    return null;
  };
  
  // Custom Dot Component
  const CustomDot = (props) => {
    const { cx, cy, stroke } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="#3b82f6" // Blue border color
        strokeWidth={3}
        fill="#FFF" // White fill for the dot
      />
    );
  };
  
  const Chart = () => {
    return (
      <div className="pr-[2rem] w-[100%] h-[100%] pt-4">
        <ResponsiveContainer  >
          <LineChart data={data}>
            {/* Light Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#D3D3D3" />
            {/* X Axis */}
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#8C8C8C" }} />
            {/* Y Axis */}
            <YAxis
              domain={[1, 3]} // Y-axis limits
              ticks={[1, 2, 3]} // Values shown on the Y-axis
              tick={{ fontSize: 12, fill: "#8C8C8C" }}
            />
            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />
            {/* Line */}
            <Line
              type="monotone"
              dataKey="task"
              stroke="#000" // Black line color
              strokeWidth={3}
              dot={<CustomDot />} // Custom dot to match the blue outline
              activeDot={{ r: 6 }} // Active dot when hovered
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default Chart;
  