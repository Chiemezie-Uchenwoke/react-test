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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
            borderColor: 'blue', 
            tension: 0.4,
        },
        {
            label: "Profits",
            data: [50, 100, 190, 410, 100, 380, 50, 650],
            backgroundColor: 'green',
            borderColor: 'red',
            tension: 0.4,
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
        display: true,
        text: 'Line Chart',
        },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
}

const LineChart = () => {
    return (
        <div className='w-full lg:w-[calc(100%/3)] min-h-[20rem] mx-auto'>
           <Line 
              data={data}
              options={options}
           />
        </div>
    )
}

export default LineChart;