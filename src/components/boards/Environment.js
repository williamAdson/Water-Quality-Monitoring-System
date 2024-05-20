import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'

export const Environment = () => {
    const eChartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
    };

    return (
        <div className='container'>
            <div className='row'>
                <h2>水权分配</h2>
            </div>
            <div className='row'>
                <h2>单位</h2>
                <ReactECharts option={eChartsOption} />
            </div>
            <div className='row'>
                <h2>水资源交易</h2>
            </div>
        </div>
    )
}