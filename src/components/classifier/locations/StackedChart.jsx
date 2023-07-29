import React from 'react';

import { PropTypes } from 'prop-types';
import ReactApexChart from 'react-apexcharts';

const StackedBarChart = ({ country, setCountry }) => {
  // const [chartFilter, setChartFilter] = useState();
  // const [state, setState] = useState("");

  return (
    <ReactApexChart
      options={{
        yaxis: {
          show: false, //for Y-axis value
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            borderType: 'dotted',
            // color: "transparent",
            strokeWidth: 10,
            offsetX: 15,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'dotted',
            color: '#78909C',
            height: 0,
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            style: {
              colors: '#8E9EAE',
              fontSize: '12px',
              fontWeight: '500',
            },
            formatter: function (value, timestamp, opts) {
              return value + '%';
            },
          },
        },
        grid: {
          show: false,
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            opacity: 0,
          },
          column: {
            opacity: 0,
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        chart: {
          width: '100%',
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false, // Set to false to hide the toolbar
          },
          events: {
            click: function (event, chartContext, config, ...rest) {
              if (event.target.innerText) {
                setCountry(event.target.innerText.split(' ')[0]);
              } else {
                // for chart
              }
            },
            //for state and city
            // legendClick: function (chartContext, seriesIndex, config, ...rest) {
            //   console.log("legendClick", {
            //     chartContext,
            //     seriesIndex,
            //     config,
            //     ...rest,
            //   });
            // },
            dataPointSelection: function (
              event,
              chartContext,
              config,
              ...rest
            ) {
              const selectedBar = config.w.config.series[config.seriesIndex];
              setCountry(selectedBar.name.split(' ')[0]);
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            // borderRadius: 3, //for bar radius
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + '%';
            },
          },
        },
        title: {
          text: country === 'All locations' ? '' : `All > ${country}`,
          style: {
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: undefined,
            color: '#263238',
          },
          offsetX: 10,
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          offsetX: -30,
          offsetY: 0,
          containerWidth: 100,
          onItemClick: {
            toggleDataSeries: false,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
          markers: {
            radius: 10,
            offsetX: -5,
            offsetY: 2,
          },
          itemMargin: {
            horizontal: 30,
            vertical: 10,
          },
        },
        dataLabels: {
          enabled: false, // Set to false to hide the value text inside the bars
        },
        colors: [
          '#FFCAA5',
          '#D1B7F9',
          '#F2C6DE',
          '#A0CBEE',
          '#B7EBDF',
          '#FFE7AA',
        ],
      }}
      series={[
        {
          name: 'USA (4) <span style="font-weight:800;"">35%</span>',
          data: [35],
        },
        {
          name: 'Colombia (3)  <span style="font-weight:800;">25%</span>',
          data: [25],
        },
        {
          name: 'India (2) <span style="font-weight:800;">19%</span>',
          data: [19],
        },
        {
          name: 'Israel (3) <span style="font-weight:800;">13%</span>',
          data: [13],
        },
        {
          name: 'Greece (1) <span style="font-weight:800;">5%</span>',
          data: [5],
        },
        {
          name: 'Other <span style="font-weight:800;">3%</span>',
          data: [3],
        },
      ]}
      type="bar"
      height={280}
    />
  );
};

StackedBarChart.propTypes = {
  country: PropTypes.string,
  setCountry: PropTypes.func,
};
export default StackedBarChart;
