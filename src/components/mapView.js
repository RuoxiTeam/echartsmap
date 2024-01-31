import React, { useEffect } from 'react';
import * as echarts from "echarts";

const MapView = () => {
    const option = {
        tooltip: {
            trigger: 'item',
            position: 'right',
            borderColor: '#000000',
            textStyle: {
                font: 'Poppins',
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '-0.01em',
                color: '#286067',
            },
            extraCssText: "border-radius: 8px;",
            formatter: function (params) {
                console.log(params);
                return '<span>' + params.data[2] + ' enrolled</span>'
            },
        },
        geo: {
          tooltip: {
            show: true
          },
          map: 'usa_svg',
          roam: false
        },
        series: {
          type: 'scatter',
          symbol: 'image://./HexagonIcon.svg',
        //   symbol: 'path://"M86.6 0 L173.2 50 L173.2 150 L86.6 200 L0 150 L0 50 Z"',
        //   symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
          coordinateSystem: 'geo',
          geoIndex: 0,
          zlevel: 1,
          symbolSize: function (params) {
            return params[2]/2
          },
          itemStyle: {
            color: '#187C85',
            opacity: 1,
          },
          encode: {
            tooltip: 2
          },
          data: [
            [160, 97, 36],
            [100, 570, 131],
            [200, 300, 20],
            [300, 443, 17],
            [400, 200, 31],
            [400, 400, 20],
            [500, 500, 20],
            [700, 500, 18],
            [850, 120, 18],
          ],
          symbolKeepAspect: true,
        }
    }
    useEffect(() => {
        // "map.svg" is in the public directory
        fetch('./map.svg')
        .then((response) => response.text())
        .then((svgText) => {
            echarts.registerMap('usa_svg', { svg: svgText });
            let myChart = echarts.init(document.getElementById('beef'));
            myChart.setOption(option);
       })
       .catch(e => console.error('fetch error', e));
    }, []);

    return (
        <div>
            <div style={{ width: '1000px', height: '770px' }} id='beef'></div>
        </div>
    )
}

export default MapView;