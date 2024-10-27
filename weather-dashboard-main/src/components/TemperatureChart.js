import { Line } from 'react-chartjs-2';
import './index.css';

function TemperatureChart({ forecast }) {
  const data = {
    labels: forecast.map(day => new Date(day.dt * 1000).toLocaleDateString()),
    datasets: [
      {
        label: 'Temperature',
        data: forecast.map(day => day.temp.day),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
}

export default TemperatureChart;