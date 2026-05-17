import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Facebook", "Instagram", "TikTok", "YouTube"],

  datasets: [
    {
      label: "Customers",
      data: [120, 190, 300, 150],
      backgroundColor: "rgba(75,192,192,0.6)",
    },
  ],
};

function CustomerAcquisitionChart() {
  return (
    <div>
      <h2>Customer Acquisition</h2>

      <Bar data={data} />
    </div>
  );
}

export default CustomerAcquisitionChart;