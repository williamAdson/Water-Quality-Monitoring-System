import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'

export const Analysis = () => {
    const eChartsOptions = {
        xAxis: {},
        yAxis: {},
        series:{
            data: [ 100, 200, 300, 400 ],
            type: 'bar'
        }
    }
    const eChartsOptions1 = {
        xAxis: {},
        yAxis: {},
        series:[

            {
                data: [ 500, 250, 320, 400 ],
                type: 'line'
            },
            {
                data: [ 50, 150, 500, 50 ],
                type: 'line'
            },
            {
                data: [ 200, 500, 600, 600 ],
                type: 'line'
            }
        ]
    }
    const eChartsOptions2 = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        radar: [
            {
              indicator: [
                { text: 'Indicator1' },
                { text: 'Indicator2' },
                { text: 'Indicator3' },
                { text: 'Indicator4' },
                { text: 'Indicator5' }
              ],
              center: ['25%', '50%'],
              radius: 120,
              startAngle: 90,
              splitNumber: 4,
              shape: 'circle',
              axisName: {
                formatter: '【{value}】',
                color: '#428BD4'
              },
              splitArea: {
                areaStyle: {
                  color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211, 253, 250, 0.8)'
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(211, 253, 250, 0.8)'
                }
              }
            },
            {
              indicator: [
                { text: 'Indicator1', max: 150 },
                { text: 'Indicator2', max: 150 },
                { text: 'Indicator3', max: 150 },
                { text: 'Indicator4', max: 120 },
                { text: 'Indicator5', max: 108 },
                { text: 'Indicator6', max: 72 }
              ],
              center: ['75%', '50%'],
              radius: 120,
              axisName: {
                color: '#fff',
                backgroundColor: '#666',
                borderRadius: 3,
                padding: [3, 5]
              }
            }
        ],
        xAxis: {},
        yAxis: {},
        series: {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: 'Data A'
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: 'Data B',
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2>水权分配</h2>
                <div className='col-sm-5'>
                    <ReactECharts option={eChartsOptions2} />
                </div>
                <div className='col-sm-5'>
                    <ReactECharts option={eChartsOptions} />
                </div>
            </div>
            <div className='row'>
                <h2>单位</h2>
                <div>
                    <ReactECharts option={eChartsOptions} />
                </div>
            </div>
            <div className='row'>
                <h2>水资源交易</h2>
                <div>
                    <ReactECharts option={eChartsOptions1} />
                </div>
            </div>
        </div>
    )
}
