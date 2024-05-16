import { Chart, registerables } from 'chart.js'
import { useState } from 'react'
import { LineChart } from '../charts/Line'
import { DoughnutChart } from '../charts/Doughnut'
import { Data } from '../../utils/waterData'
import { PolarArea } from 'react-chartjs-2'
import { FaFacebookMessenger, FaChartBar, FaUserCircle, FaComments, FaChartPie, FaHeart, FaCog} from 'react-icons/fa'

Chart.register(...registerables);

export const Private = () => {

     const [chartData, setChartData] = useState({
          labels: Data.map((data) => data.year), 
          datasets: [
            {
              label: "Water Users Gained ",
              data: Data.map((data) => data.waterSourceGain),
              backgroundColor: [
               'rgb(255, 99, 132)',
               'rgb(54, 162, 235)',
               'rgb(255, 205, 86)',
               'rgb(255, 125, 251)'
             ],
              borderWidth: 2
            }
          ]
     });

     return (
          <div className='board-wrapper'>
               <div className='board-sidebar'>
                    <div>
                         <FaChartBar /> <br />
                         仪表板
                    </div>
                    <div>
                         <FaUserCircle /> <br />
                         账号
                    </div>
                    <div>
                         <FaComments /> <br />
                         通知
                    </div>
                    <div>
                         <FaChartPie /> <br />
                         分析
                    </div>
                    <div>
                         <FaHeart /> <br />
                         受赞
                    </div>
                    <div>
                         <FaCog /> <br />
                         设置
                    </div>
               </div>
               <div className='board-element'>
              <div className='element-item'>
                    <div className='element-search'>
                         <input name="waterQuality" type="search" placeholder='find water user?' />
                    </div>
              </div>
              <div className='element-item'>
                    <div style={{ maxWidth: '700px'}}>
                         <div>
                              <LineChart chartData={chartData} />
                              <ul>
                                   <li>water levels: </li>
                                   <li>water quality: </li>
                                   <li>rate of replenishment: </li>
                              </ul>
                         </div>
                         <div>
                              
                         </div>
                    </div>
              </div>
              <div className='element-item element-child'>
                    <div>
                         <div>
                              <h2>Water Authority</h2>
                         </div>
                         <div style={{ maxWidth: '350px'}}>
                              <DoughnutChart chartData={chartData} />
                         </div>
                    </div>
                    <div>
                         <div>
                              <h2>Water Users</h2>
                         </div>
                         <div style={{ maxWidth: '350px'}}>
                              <DoughnutChart chartData={chartData} />
                         </div>
                    </div>
                    <div>
                         <div>
                              <h2>Water Treatment Plant</h2>
                         </div>
                         <div style={{ maxWidth: '350px'}}>
                              <DoughnutChart chartData={chartData} />
                         </div>
                    </div>
              </div>
               </div>
          </div>
    )
}