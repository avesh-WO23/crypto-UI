import React from "react";
import ReactApexChart from "react-apexcharts";

const data = {
  series: [
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
  ],
  options: {
    yaxis: {
      show: false,
    },
    xaxis: {
      axisTicks: {
        show: true,
        borderType: "dotted",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
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
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: -10,
      offsetY: 0,
      containerWidth: 100,

      markers: {
        radius: 10,
        offsetX: -5,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
      // itemFormatter: function (value) {
      //   const [text1, text2] = value.split(" ");
      //   console.log("value", value);
      //   return (
      //     '<span style="display: inline-block; width: 50%;">' +
      //     '<span style="font-weight: bold;">' +
      //     text1 +
      //     "</span>" +
      //     "</span><span style='display: inline-block; width: 50%; text-align: right;'>" +
      //     '<span style="color: red;">' +
      //     text2 +
      //     "</span>" +
      //     "</span>"
      //   );
      // },
    },
    dataLabels: {
      enabled: false, // Set to false to hide the value text inside the bars
    },
    colors: ["#FFCAA5", "#D1B7F9", "#F2C6DE", "#A0CBEE", "#B7EBDF", "#FFE7AA"],
  },
};
const StackedBarChart = () => {
  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="bar"
      height={250}
    />
  );
};

export default StackedBarChart;
