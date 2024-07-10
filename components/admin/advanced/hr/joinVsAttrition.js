import { FaDatabase } from "react-icons/fa";
import '../../../chartConfig'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


FaDatabase
const JoinVsAttrition = () => {
    const labels = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Joining',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        borderColor: 'rgb(0, 192, 255)',
        backgroundColor: 'rgba(0, 192, 255, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Attrition',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
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
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
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
                                <div className="w-full h-64 md:w-120 md:h-80 p-4 bg-white rounded-lg shadow-md">
                                    <Line data={data} options={options} />
                                </div>
                                    {/* <div className="mx-auto bg-gray-300 rounded-t-lg rounded-bl-lg w-32 h-28 p-2 flex flex-col items-center justify-center">
                                        <FaDatabase className=" text-blue-theme  m-2" size={50} />
                                        <p className="text-xs text-blue-theme ">Not Enough Data</p>
                                    </div> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
    );
}
 
export default JoinVsAttrition;