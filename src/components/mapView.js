import React, { useEffect } from 'react';
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react"; 

const MapView = () => {
    const option = {
        tooltip: {},
        geo: {
          tooltip: {
            show: true
          },
          map: 'iceland_svg',
          roam: false
        },
        series: {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          geoIndex: 0,
          symbolSize: function (params) {
            return (params[2] / 100) * 15 + 5;
          },
          itemStyle: {
            color: '#b02a02'
          },
          encode: {
            tooltip: 2
          },
          data: [
            [150, 98, 10],
            [200, 300, 30],
            [300, 443, 80],
            [400, 200, 61],
            [400, 400, 70],
            [500, 500, 81],
            [700, 500, 81]
          ]
        }
    }
    useEffect(() => {
        // "map.svg" is in the public directory
        fetch('./map.svg')
        .then((response) => response.text())
        .then((svgText) => {
            console.log(svgText);
            echarts.registerMap('iceland_svg', { svg: svgText });
            let myChart = echarts.init(document.getElementById('beef'));
            myChart.setOption(option);
       })
       .catch(e => console.error('fetch error', e));
    }, []);

    return (
        <ReactEcharts option={option} />
    )
}

export default MapView;