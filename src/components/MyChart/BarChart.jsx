import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
    datasets: [
        {
            label: "Sales",
            data: [150, 300, 180, 400, 200, 80, 550, 700],
            backgroundColor: 'blue',
        },
        {
            label: "Profits",
            data: [50, 100, 190, 410, 100, 380, 50, 650],
            backgroundColor: 'green',
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
        display: true,
        text: 'Bar Chart',
        },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
}

const BarChart = () => {
    return (
        <div className='w-full lg:w-[calc(100%/3)] min-h-[20rem] mx-auto'>
            <Bar 
                data={data}
                options={options}
            />
        </div>
    )
}

export default BarChart;