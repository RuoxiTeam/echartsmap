import React, { useEffect } from 'react';
import * as echarts from "echarts";

const MapView = () => {
    const option = {
        tooltip: {},
        geo: {
          tooltip: {
            show: true
          },
          map: 'usa_svg',
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
            color: '#187C85'
          },
          encode: {
            tooltip: 2
          },
          data: [
            [159, 98, 10],
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
            echarts.registerMap('usa_svg', { svg: svgText });
            let myChart = echarts.init(document.getElementById('beef'));
            myChart.setOption(option);
       })
       .catch(e => console.error('fetch error', e));
    }, []);

    return (
        <div>
            <div style={{ width: "100%", height: "50vh" }} id='beef'></div>
        </div>
    )
}

export default MapView;