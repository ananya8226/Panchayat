import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { useEffect } from 'react';
import { GET } from '../../services/api/api';

function LineChart({id}) {

  const [data, setData]= useState([]);
 
  const lineChartData = async () => {
   
    let params = {
      districtId: '10',
      blockId: id,
      panchayatId: '7',
      month: '',
      year: '',
    }

    const res = await GET("dashboard/sector-wise-panchayat", params);

    let responseData = res?.data?.result?.map((item)=> {
      return {data: item?.sectorFormDatas?.map((d)=> {return d?.compositeScore
        ;}), name: item?.name, };
    });
    // console.log(responseData, "dataaa");


    if(res?.data?.success)
    {
      setData(responseData);
      // console.log(data[0].sectorFormDatas[0].compositeScore, "hddghg");
    }
   
  }

  useEffect(() => {
    lineChartData();
  }, [id]);

  const [options, setOptions] = useState(
    {
      chart: {
     
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#1E8868", "#217AFF", "#254E6C", "#FF8C21", "#FF24A7", "#D73636", "#894CA6" , "#357497","#4D772D" ],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
    
      markers: {
        size: 2
      },
      xaxis: {
        categories: [ '02-2023', '03-2023', '04-2023', ],
        
      },
      yaxis: {
        min: 0,
        max: 18
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
  );

  return (
    <div id="chart" >
      <Chart options={options} series={data} type="line" height={550} />
    </div>
  );

}

export default LineChart;