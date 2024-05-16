import { Line } from "react-chartjs-2";

export const LineChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Water Sources</h2>

      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Water Users Gained between 2022-2024"
            },
            legend: {
              display: false
            }
          }
        }}
      />

    </div>
  );
}