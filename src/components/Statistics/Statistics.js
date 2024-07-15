import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Statistics = ({
  chartData,
  chartOptions,
}) => {
  return (
    <>
      <div>
        <Line data={chartData} options={chartOptions} />{" "}
      </div>
    </>
  );
};

export default Statistics;
