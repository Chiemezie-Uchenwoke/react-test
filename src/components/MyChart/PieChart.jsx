import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Orange', 'Green', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'red',
        'orange',
        'green',
        'blue',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
        display: true,
        text: 'Pie Chart',
        },
    },
}

const PieChart = () => {
    return (
        <div className='w-full lg:w-[calc(100%/3)] min-h-[20rem] mx-auto'>
            <Pie 
                data={data}
                options={options}
            />
        </div>
    )
}

export default PieChart;