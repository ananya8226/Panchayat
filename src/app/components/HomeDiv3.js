import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../styles/home.scss';
import arrowUp from '../../assets/arrow-up.svg';
import { GET } from '../../services/api/api';
import BarChart from './BarChart';

function HomeDiv3() {

    const [data1, setData1]= useState([]);
    const [data2, setData2]= useState([]);
    const [data3, setData3]= useState([]);
    const [data4, setData4]= useState([]);
    const [data5, setData5]= useState([]);
    const [data6, setData6]= useState([]);
    const [data7, setData7]= useState([]);
    const [data8, setData8]= useState([]);
    const [data9, setData9]= useState([]);
    const id= localStorage.getItem("ID");

    const name = ['Dhanmasta C', 'Bhawani-A', 'Ranie-B', 'Sprain', 'Surrara', 'Kasheer', 'Bansultan Upper', 'Hanga', 'Bhikar', 'Chichha',
    'Samnoo', 'Sumal', 'Kathil Ganju East', 'Draj', 'Channa-A', 'Pethbugh', 'Limber-B', 'Kanzalwan', 'Wadder Bala', 'Chewa', 'Hard Batapore',
    'Nowlari', 'Domar', 'Abdal', 'Bagla', 'Khara Madana', 'Yemberzalwari', 'Lammer B', 'Upper Dodaj (Hill Tak)',
    'Dori', 'Mundian A', 'Matlowa A', 'Vohlutra', 'Badheri', 'Ringzabal', 'Shalipora', 'Chountiwari B', 'Dunagara Upper', 'Lari', 'Garan'];

    const getBarData = async () => {
        const params = {
            size: 10,
            page: 1,
            districtId: '',
            blockId: id,
            panchayatId: '',
            year: 2023,
            month: 3,
            panchayatType: 'aspirational',
        }

        const res = await GET('dashboard/panchayat-wise-performance', params);
        if (res?.data?.success) {
            const resData = res?.data?.result?.rows?.map((item) => {
                return {
                    agriculture: item?.sectorFormDatas[0]?.sectorCompositeScore,
                    health: item?.sectorFormDatas[1]?.sectorCompositeScore,
                    education: item?.sectorFormDatas[2]?.sectorCompositeScore,
                    rural: item?.sectorFormDatas[3]?.sectorCompositeScore,
                    individual: item?.sectorFormDatas[4]?.sectorCompositeScore,
                    skill: item?.sectorFormDatas[5]?.sectorCompositeScore,
                    basic: item?.sectorFormDatas[6]?.sectorCompositeScore,
                    environment: item?.sectorFormDatas[7]?.sectorCompositeScore,
                    government: item?.sectorFormDatas[8]?.sectorCompositeScore,
                }
            })

            const agricultureData = resData.map((item)=> {
                return item.agriculture
            })
            
            const healthData = resData.map((item)=> {
                return item.health
            })
            
            const educationData = resData.map((item)=> {
                return item.health
            })
            
            const ruralData = resData.map((item)=> {
                return item.rural
            })
            
            const individualData = resData.map((item)=> {
                return item.individual
            })
            
            const skillData = resData.map((item)=> {
                return item.skill
            })
            
            const basicData = resData.map((item)=> {
                return item.basic
            })
            
            const environmentData = resData.map((item)=> {
                return item.environment
            })
            
            const governmentData = resData.map((item)=> {
                return item.government
            })

            setData1([{ data: agricultureData }]);
            setData2([{ data: healthData }]);
            setData3([{ data: educationData }]);
            setData4([{ data: ruralData }]);
            setData5([{ data: individualData }]);
            setData6([{ data: skillData }]);
            setData7([{ data: basicData }]);
            setData8([{ data: environmentData }]);
            setData9([{ data: governmentData }]);
        }
    }

    useEffect(() => {
        getBarData();
    }, [id]);

    return (
        <div className='home-div-3'>
            <Grid container className='home-div-3-heading'>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#1E8868" }}></div>Agriculture & Allied</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#217AFF" }}></div>Health & Nutrition</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#254E6C" }}></div>Education</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#FF8C21" }}></div>Rural development & sanitation</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#FF24A7" }}></div>Individual beneficiary scheme</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#D73636" }}></div>Skill development & Employement</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#894CA6" }}></div>Basic infrastructure</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#357497" }}></div>Environment</Grid>
                <Grid item xs={2} s={3} className='sector-name'><div style={{ backgroundColor: "#4D772D" }}></div>Governance</Grid>
            </Grid>

            <div className='sector-wise'>
                Sector Wise Score
                <img src={arrowUp} alt="arrow" />
            </div>

            <div className='sector-bar-chart'>
                <p>Agriculture & Allied Sectors</p>
                <BarChart name={name} data={data1} colors={["#1E8868"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Health & Nutrition</p>
                <BarChart name={name} data={data2} colors={["#217AFF"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Education</p>
                <BarChart name={name} data={data3} colors={["#254E6C"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Rural development & sanitation</p>
                <BarChart name={name} data={data4} colors={["#FF8C21"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Individual beneficiary scheme</p>
                <BarChart name={name} data={data5} colors={["#FF24A7"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Skill development & Employement</p>
                <BarChart name={name} data={data6} colors={["#D73636"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Basic infrastructure</p>
                <BarChart name={name} data={data7} colors={["#894CA6"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Environment</p>
                <BarChart name={name} data={data8} colors={["#357497"]}/>
            </div>
            <div className='sector-bar-chart'>
                <p>Governance</p>
                <BarChart name={name} data={data9} colors={["#4D772D"]}/>
            </div>
        </div>
    )
}

export default HomeDiv3