import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = ({ chartData }) => {
  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Water Authorities Gained"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};