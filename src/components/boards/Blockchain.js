import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'
import { Fivecolumn } from '../tables/Fivecolumn'

export const BLockchain = () => {
    const data = [
        { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5' },
        // More rows...
    ];
    const eChartsOptions = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
        },
        series: [
            {
              name: '智能合约',
              type: 'pie',
              radius: [50, 150],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 5
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' }
              ]
            }
        ]
    }

    return (
        <div className='container'>
            <h2 className='text-center m-2'>区块链交易</h2>
            {/* first column */}
            <div className='row'>
                <h4 className='m-2'>综合概况</h4>
                <div className='col-sm-3'>
                    <div>
                        <span>智能合约</span>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div>
                        <span>智能合约</span>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div>
                        <span>智能合约</span>
                    </div>
                </div>
            </div>
            {/* second column */}
            <div className='row'>
                <h4 className='m-2'>区块链交易记录</h4>
                <Fivecolumn data={data} />
            </div>
            {/* third column */}
            <div className='row'>
                <h4 className='m-2'>综合分析</h4>
                <div className='col-sm-10'>
                    <div>
                        <ReactECharts option={eChartsOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}
