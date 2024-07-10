import { FaDatabase } from "react-icons/fa";
import '../../../chartConfig'
import ChartConfig from '../../../chartConfig';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

FaDatabase
const HeadCount = () => {
    const labels = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'];
  
  const data = {
    labels,
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4], // Adjust these values to match the exact heights in the image
        backgroundColor: 'rgb(128, 0, 0)', // Dark red color
        barThickness: 20, // Adjust this value to match the bar width in the image
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend as it's not present in the image
      },
      tooltip: {
        enabled: false, // Disable tooltips as they're not shown in the image
      },
    },
  };


    return (  
        <div className="overflow-x-auto w-full bg-white">
                <table className="w-full">
                        <thead>
                            <tr className="text-sm text-blue-theme border border-gray-300">
                                <th className="p-3 text-center">Client</th>
                                <th className="p-3 text-center">Email</th>
                                <th className="p-3 text-center">Last login at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3" className="p-8">
                                 <div className="w-full h-64 md:w-120 md:h-80 p-2">
                                    <Bar data={data} options={options} />
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
    );
}
 
export default HeadCount;