import '../../../chartConfig'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const InvoiceOverview = () => {
    const data = {
    labels: ['Overdue', 'Not Sent', 'Unpaid', 'Draft', 'Partially Paid', 'Paid'],
    datasets: [
      {
        data: [1, 1, 2, 0, 0, 0], 
        backgroundColor: [
          '#1e293b', // Overdue - dark blue
          '#0d9488', // Not Sent - teal
          '#dc2626', // Unpaid - red
          '#facc15', // Draft - yellow (not visible in the current chart)
          '#3b82f6', // Partially Paid (not visible in the current chart)
          '#22c55e', // Paid (not visible in the current chart)
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
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
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  };

    return (  
     <div className="w-full h-64 md:w-120 md:h-80 p-2">
          <Pie data={data} options={options} />
    </div>
    );
}
 
export default InvoiceOverview;