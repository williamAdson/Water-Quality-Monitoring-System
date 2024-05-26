import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'

export const Environment = () => {
  const option = {
    title: {
      text: '环境监测'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['温度', '湿度', '雨量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '温度',
        type: 'line',
        stack: 'Total',
        data: [420, 132, 401, 134, 90, 230, 210, 300, 500, 200, 300, 700]
      },
      {
        name: '湿度',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 300, 200, 400, 100, 200, 500, 100]
      },
      {
        name: '雨量',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 200, 100, 100, 200, 100, 100]
      }
    ]
  };

  return (
    <div className='container bg-main'>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'>
        <ReactECharts option={option} />
      </div>
    </div>
  )
}
