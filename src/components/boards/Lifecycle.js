import 'bootstrap/dist/css/bootstrap.min.css'
import ReactECharts from 'echarts-for-react'

export const Lifecycle = () => {
    const names = [
        'pH levels',
        'Turbidity',
        'Oxygen',
        'Humidity',
        'Temperature',
    ];

    const years = [
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
        for (const _ of years) {
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
          data: years
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
        <div className='container bg-main'>
            <h1 className='text-center mt-2'>水生命周期</h1>
            <div className='row'>
                <div className='col-sm-3'>
                    <h4>水源</h4>
                </div>
                <div className='col-sm-3'>
                    <h4>供水商</h4>
                </div>
                <div className='col-sm-3'>
                    <h4>水消费者</h4>
                </div>
                <div className='col-sm-3'>
                    <h4>水处理厂</h4>
                </div>
            </div>
            <div className='row'></div>
            <div className='row'>
                <ReactECharts option={option} />
            </div>
        </div>
    )
}
