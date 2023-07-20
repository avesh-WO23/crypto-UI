import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./StackedChart.module.css";

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
          labels: {
            style: {
              cssClass: `${styles.yBorder}`,
            },
          },
        },
        xaxis: {
          axisTicks: {
            show: true,
            borderType: "dotted",
            color: "#78909C",
            height: 0,
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            style: {
              colors: "#8E9EAE",
              fontSize: "12px",
            },
            formatter: function (value, timestamp, opts) {
              return value + "%";
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
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false, // Set to false to hide the toolbar
          },
          events: {
            click: function (event, chartContext, config, ...rest) {
              if (event.target.innerText) {
                setCountry(event.target.innerText.split(" ")[0]);
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
              setCountry(selectedBar.name.split(" ")[0]);
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        title: {
          text: country === "All locations" ? "" : `All > ${country}`,
          style: {
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: undefined,
            color: "#263238",
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "left",
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
            offsetY: 0,
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
          "#FFCAA5",
          "#D1B7F9",
          "#F2C6DE",
          "#A0CBEE",
          "#B7EBDF",
          "#FFE7AA",
        ],
      }}
      series={[
        {
          name: "USA (4) 35%",
          data: [44],
        },
        {
          name: "Colombia (3)  25%",
          data: [53],
        },
        {
          name: "India (2) 19%",
          data: [12],
        },
        {
          name: "Israel (3) 13%",
          data: [9],
        },
        {
          name: "Greece (1) 5%",
          data: [25],
        },
        {
          name: "Other 3%",
          data: [35],
        },
      ]}
      type="bar"
      height={280}
    />
  );
};

export default StackedBarChart;
