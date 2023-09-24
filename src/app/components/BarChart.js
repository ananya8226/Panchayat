import React, { Component, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from "react-apexcharts";
import { GET } from '../../services/api/api';
import { useEffect } from 'react';

function BarChart({colors, name, data}) {

  const comp = ['Dhanmasta C', 'Bhawani-A', 'Ranie-B', 'Sprain', 'Surrara', 'Kasheer', 'Bansultan Upper', 'Hanga', 'Bhikar', 'Chichha',
    'Samnoo', 'Sumal', 'Kathil Ganju East', 'Draj', 'Channa-A', 'Pethbugh', 'Limber-B', 'Kanzalwan', 'Wadder Bala', 'Chewa', 'Hard Batapore',
    'Nowlari', 'Domar', 'Abdal', 'Bagla', 'Khara Madana', 'Yemberzalwari', 'Lammer B', 'Upper Dodaj (Hill Tak)',
    'Dori', 'Mundian A', 'Matlowa A', 'Vohlutra', 'Badheri', 'Ringzabal', 'Shalipora', 'Chountiwari B', 'Dunagara Upper', 'Lari', 'Garan'];

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        // borderRadius: 10,
        columnWidth: '70%',
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },

    grid: {
      row: {
        colors: ['#fff']
      }
    },
    xaxis: {

      categories: comp,
      tickPlacement: 'on'
    },
    yaxis: {

    },
    fill: {
      // type: 'gradient',
      // gradient: {
      //   shade: 'light',
      //   type: "horizontal",
      //   shadeIntensity: 0.25,
      //   gradientToColors: undefined,
      //   inverseColors: true,
      //   opacityFrom: 0.85,
      //   opacityTo: 0.85,
      //   stops: [50, 0, 100]
      // },
    }
  });

  // setTimeout(()=> {
  // setOptions(
  //   {
  //     chart: {
  //       height: 350,
  //       type: 'bar',
  //     },
  //     plotOptions: {
  //       bar: {
  //         // borderRadius: 10,
  //         columnWidth: '70%',
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       width: 2
  //     },

  //     grid: {
  //       row: {
  //         colors: ['#fff']
  //       }
  //     },
  //     xaxis: {

  //       categories: name,
  //       tickPlacement: 'on'
  //     },
  //     yaxis: {

  //     },
  //     fill: {
  //       type: 'gradient',
  //       gradient: {
  //         shade: 'light',
  //         type: "horizontal",
  //         shadeIntensity: 0.25,
  //         gradientToColors: undefined,
  //         inverseColors: true,
  //         opacityFrom: 0.85,
  //         opacityTo: 0.85,
  //         stops: [50, 0, 100]
  //       },
  //     }
  //   }
  // )}, 500);

  return (
    <div id="chart" >
      <Chart options={options} series={data} type="bar" height={250} />
    </div>
  );
}

export default BarChart
