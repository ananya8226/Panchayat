import React from 'react';
import Sidebar from '../../components/Sidebar';
import '../../../styles/blockDashboard.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskIcon from '@mui/icons-material/Task';
import TaskPending from '@mui/icons-material/RestorePage';
import TaskEdit from '@mui/icons-material/NoteAlt';
import TaskReject from '@mui/icons-material/DisabledByDefault';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import FilterComponent from '../../components/FilterComponent';
import { GET } from '../../../services/api/api';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function createData(panchayat, score, block, district) {
  return { panchayat, score, block, district };
}

const rows = [
  createData('Cupcake', 45, 78, 89),
  createData('Donut', 452, 45, 78),
  createData('Eclair', 45, 78, 89),
  createData('Frozen yoghurt', 159, 6.04, 5),
  createData('Gingerbread', 356, 45, 90),
  createData('Honeycomb', 45, 78, 9,),
  createData('Ice cream sandwich', 237, 78, 89),
  createData('Jelly Bean', 45, 78, 89),
  createData('KitKat', 45, 78, 89),
  createData('Lollipop', 392, 45, 78),
  createData('Marshmallow', 318, 45, 89),
  createData('Nougat', 360, 45, 78),
  createData('Oreo', 360, 45, 78),
];

function BlockDashboard() {

  const panchayatData = {
    totalPanchayat: 24,
    requestReceived: 10,
    requestApproved: 2,
    requestPending: 7,
    requestRejected: 1,
  }

  const filterOptions = [
    'All',
    'Agriculture and Allied Sector',
    'Health and Nutrition',
    'Education',
    'Rural Development and Sanitation',
    'Individual Beneficiary schemes',
    'Skill Development and Employment',
    'Basic Infrastructure',
    'Environment',
    'Governance',

  ];

  const SidebarHeight = '69rem';
  const FilterWidth = '17rem';

  const [data, setData] = useState({});

  const blockDashboardData = async () => {

    let res = await GET("block/my-dashboard");
    if (res?.data?.success) {
      setData(res?.data?.result);
    }
    else
      toast(res?.data?.message);
  }

  useEffect(() => {
    blockDashboardData();
  }, []);


  return (
    <>
      <div className='main-dashboard-container'>
        <Sidebar SidebarHeight={SidebarHeight} />
        <div style={{ width: '79%' }}>
          <div className='dashboard-container'>
            <div className='div1'>
              <div className='icon-div'>
                <HomeOutlinedIcon style={{ color: ' #7a348f', height: "4rem", width: "4rem" }} />
              </div>
              <div>
                <h2>{data?.myPanchayat}</h2>
                <p>My Panchayat</p>
              </div>
            </div>
            <div className='div2'>
              <div className='child-div1'>
                <div className='circle'>
                  <TaskEdit style={{ color: 'rgb(156, 52, 3)', height: "3rem", width: "3rem" }} />
                </div>
                <div className='hidden-div'>
                  <h2>{data?.totalRequest}</h2>
                  <p>Total no. of request received</p>
                </div>

              </div>
              <div className='child-div2'>
                <div className='circle'>
                  <TaskPending style={{ color: 'rgb(53, 99, 1)', height: "3rem", width: "3rem" }} />
                </div>
                <div className='hidden-div'>
                  <h2>{data?.requestPending}</h2>
                  <p>Total no. of request pending</p>
                </div>
              </div>
            </div>
            <div className='div2'>
              <div className='child-div1' style={{ backgroundColor: 'rgb(201, 171, 5)' }}>
                <div className='circle' style={{ border: '1px solid rgb(201, 171, 5)' }}>
                  <TaskIcon style={{ color: 'rgb(201, 171, 5)', height: "3rem", width: "3rem" }} />
                </div>
                <div className='hidden-div'>
                  <h2>{data.requestApproved}</h2>
                  <p>Total no. of request approved</p>
                </div>
              </div>
              <div className='child-div2' style={{ backgroundColor: 'rgb(158, 4, 112)' }}>
                <div className='circle' style={{ border: '1px solid rgb(158, 4, 112' }}>
                  <TaskReject style={{ color: 'rgb(158, 4, 112)', height: '3rem', width: '3rem' }} />
                </div>
                <div className='hidden-div'>
                  <h2>{data.requestRejected}</h2>
                  <p>Total no. of request rejected</p>
                </div>
              </div>
            </div>
          </div>

          <div className='filter-div'>
            <h2>Top 10 Panchayats</h2>
            <FilterComponent options={filterOptions} label={"Sector"} width={FilterWidth} />
          </div>
          <div>
            <TableContainer style={{
              padding: '2rem',
              width: '94%', // for horizontal scroll width:800px;
              height: '19rem',
            }}>
              <Table sx={{ minWidth: 500, }} aria-label="custom pagination table">
                <TableHead className='tablehead' >
                  <TableRow style={{
                    background: " #00695d",
                  }} >
                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Panchayat</TableCell>
                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Score</TableCell>
                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Block</TableCell>
                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>District</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.topPanchayats?.rows?.map((row, index) => (
                    index < 10 ?
                      <TableRow key={row.score}>
                        <TableCell component="th" scope="row">
                          {row?.panchayatMaster?.name}
                        </TableCell>
                        <TableCell style={{ width: 160 }} >
                          {row.score}
                        </TableCell>
                        <TableCell style={{ width: 160 }}>
                          {row?.panchayatMaster?.blockMaster?.name}
                        </TableCell>
                        <TableCell style={{ width: 160 }}>
                          {row?.panchayatMaster?.districtMaster?.name}
                        </TableCell>
                      </TableRow>
                      : null
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>


    </>
  )
}

export default BlockDashboard