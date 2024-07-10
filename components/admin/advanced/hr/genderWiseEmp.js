import { FaDatabase } from "react-icons/fa";
import '../../../chartConfig'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

FaDatabase
const GenderWiseEmp = () => {
    const data = {
        labels: ['Male', 'Other'],
        datasets: [
          {
            data: [98, 2], // Adjust these values to match the exact proportions in the image
            backgroundColor: [
              'rgb(0, 122, 255)', // Blue for Male
              'rgba(0, 122, 255, 0.1)'  // Very light blue for the tiny slice
            ],
            borderColor: [
              'rgb(0, 122, 255)',
              'rgb(0, 122, 255)'
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 20,
              padding: 20,
              font: {
                size: 14
              },
              filter: (legendItem, data) => legendItem.text === 'Male' // Only show "Male" in the legend
            }
          },
          tooltip: {
            enabled: true
          }
        },
        cutout: '0%', // Makes it a full pie chart, not a donut
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
                                <div className="flex flex-col items-center p-2">
                                    <div className="w-full h-64 md:w-96 md:h-96">
                                        <Pie data={data} options={options} />
                                    </div>
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
 
export default GenderWiseEmp;