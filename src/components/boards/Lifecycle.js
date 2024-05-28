import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'

const BarChart = () => {
  var series = [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 130, 240, 230, 100],
      type: 'bar',
      stack: 'a',
      name: 'a'
    },
    {
      data: [10, 46, 64, '-', 0, '-', 0, 20, 10, 30],
      type: 'bar',
      stack: 'a',
      name: 'b'
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0, 5, 20, 10],
      type: 'bar',
      stack: 'a',
      name: 'c'
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0, 15, 30, 5],
      type: 'bar',
      stack: 'b',
      name: 'd'
    },
    {
      data: [10, 20, 150, 0, '-', 50, 10, 0, 15, 5],
      type: 'bar',
      stack: 'b',
      name: 'e'
    }
  ];
  const stackInfo = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: []
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== '-') {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }
  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data;
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < series[i].data.length; ++j) {
      // const isStart = info.stackStart[j] === i;
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 20 : 0;
      const bottomBorder = 0;
      data[j] = {
        value: data[j],
        itemStyle: {
          borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
        }
      };
    }
  }
  const option = {
    title: {
      text: '水权评估'
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: [ 
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: series
  };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  )
}

const RadarChart = () => {
  const option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: '水权交易'
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: '水源' },
          { text: '供水商' },
          { text: '水消费者' },
          { text: '水处理厂' },
          { text: '系统' }
        ],
        center: ['25%', '50%'],
        radius: 115,
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
          { text: '水源', max: 150 },
          { text: '供水商', max: 150 },
          { text: '水消费者', max: 150 },
          { text: '水处理厂', max: 120 },
          { text: '系统', max: 108 },
          { text: '统计', max: 72 }
        ],
        center: ['75%', '50%'],
        radius: 115,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        }
      }
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: '水源'
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: '供水商',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          }
        ]
      },
      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: '水消费者',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            label: {
              show: true,
              formatter: function (params) {
                return params.value;
              }
            }
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: '水处理厂',
          }
        ]
      }
    ]
  };

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  )
}

export const Lifecycle = () => {
  const names = [
    'pH levels',
    'Turbidity',
    'Oxygen',
    'Humidity',
    'Temperature',
  ];

  const months = [
    '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  };

  const generateRankingData = () => {
    const map = new Map();
    const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
    for (const _ of months) {
      const shuffleArray = shuffle(defaultRanking);
      names.forEach((name, i) => {
        map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
      });
    }
    return map;
  };

  const generateSeriesList = () => {
    const seriesList = [];
    const rankingMap = generateRankingData();
    rankingMap.forEach((data, name) => {
      const series = {
        name,
        symbolSize: 20,
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        endLabel: {
          show: true,
          formatter: '{a}',
          distance: 20
        },
        lineStyle: {
          width: 4
        },
        data
      };
      seriesList.push(series);
    });
    return seriesList;
  };

  const option = {
    title: {
      text: '水质量监测数据'
    },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: 30,
      right: 110,
      bottom: 30,
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: true
      },
      axisLabel: {
        margin: 30,
        fontSize: 16
      },
      boundaryGap: false,
      data: months
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        margin: 30,
        fontSize: 16,
        formatter: '#{value}'
      },
      inverse: true,
      interval: 1,
      min: 1,
      max: names.length
    },
    series: generateSeriesList()
  };

  return (
      <div className='container' style={{ margin: '3rem auto'}}>
            <div className='row'>
              <RadarChart />
            </div>
            <div className='row'>
              <BarChart />
            </div>
            <div className='row'>
              <ReactECharts option={option} />
            </div>
        </div>
    )
}
