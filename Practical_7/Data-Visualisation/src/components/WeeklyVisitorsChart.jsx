import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  datasets: [
    {
      label: "Visitors",
      data: [100, 200, 150, 300, 250, 400, 350],

      fill: true,

      backgroundColor: "rgba(153,102,255,0.2)",

      borderColor: "rgba(153,102,255,1)",
    },
  ],
};

function WeeklyVisitorsChart() {
  return (
    <div>
      <h2>Weekly Visitors</h2>

      <Line data={data} />
    </div>
  );
}

export default WeeklyVisitorsChart;