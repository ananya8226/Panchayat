import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { GET } from '../../services/api/api';
import { getBlockFilterAction } from '../modules/redux/Actions/getblockFilter';
import FilterComponent from './FilterComponent';
import agriculture from '../../assets/agriculture.svg';
import basic from '../../assets/basic.svg';
import composite from '../../assets/composite.svg';
import education from '../../assets/education.svg';
import rural from '../../assets/rural.svg';
import skills from '../../assets/skills.svg';
import goverance from '../../assets/goverance.svg';
import health from '../../assets/health.svg';
import enviroment from '../../assets/enviroment.svg';
import indiviuals from '../../assets/indiviuals.svg';
import { Grid } from '@mui/material';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableFooter, TablePagination, TableRow, TableHead, IconButton,
} from '@mui/material';
import '../../styles/home.scss';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';

const option3 = [
    {id:1, blockName:'ANANTNAG',},
];
const label3 = "District";

const option5 = [
    {id:0, blockName:'All',}
]
const label5 = "Panchayat";
const label4 = "Block";
const FilterWidth = "24%";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
}

const getColor = (value) => {
    if (value == 100)
        return "rgb(76, 172, 233)";
    else if (value >= 65 && value <= 99)
        return "rgb(70, 158, 133)";
    else if (value >= 50 && value <= 64)
        return "rgb(247, 197, 70)";
    else
        return "rgb(203, 54, 75)";

};


function HomeDiv5() {

    const block_filter = useSelector(state => state.blockFilterReducer.blockFilter);
    const [option4, setOption4] = useState(block_filter);
    const [panchayatWise, setPanchayatWise] = useState([]);
    const [id, setId] = useState('');


    const panchayatWisePerformance = async () => {
        let params = {
            size: '10',
            page: '1',
            districtId: '10',
            blockId: id,
            panchayatId: '',
            year: '2023',
            month: '3',
            panchayatType: 'aspirational',
        }

        const res = await GET("dashboard/panchayat-wise-performance", params);
        setPanchayatWise(res?.data?.result?.rows);
    }

    useEffect(() => {
        // blockFilterData();
        panchayatWisePerformance();
    }, [id]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - panchayatWise.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className='home-div-5'>
            <div className='filter'>
                <div>
                    <h2>
                        Panchayat Wise Performance
                    </h2>
                </div>
                <div>
                    <FilterComponent options={option3} label={label3} width={FilterWidth} />
                    <Filter options={option4} label={label4} width={FilterWidth} setId={setId}/>
                    <FilterComponent options={option5} label={label5} width={FilterWidth} />
                </div>
            </div>

            <div className='score-decider'>
                <Grid container className='home-div-3-heading'>
                    <Grid item xs={4} s={4} xl={2} className='sector-name'><div style={{ backgroundColor: "#1E8868" }}></div>Achiever (100)</Grid>
                    <Grid item xs={4} s={4} xl={2} className='sector-name'><div style={{ backgroundColor: "#217AFF" }}></div>Front Runner (65-99)</Grid>
                    <Grid item xs={4} s={4} xl={2} className='sector-name'><div style={{ backgroundColor: "#254E6C" }}></div>Performer (50-64)</Grid>
                    <Grid item xs={4} s={4} xl={2} className='sector-name'><div style={{ backgroundColor: "#FF8C21" }}></div>Aspirant(0-49)</Grid>
                </Grid>
            </div>

            <div className='table'>
                <TableContainer style={{
                    padding: '0rem 2rem',
                    width: '95%',
                    height: '500px'

                }}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead className='tablehead' >
                            <TableRow style={{
                                background: " #00695d",
                            }} >
                                <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>#</TableCell>
                                <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Panchayat</TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={agriculture} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={health} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={education} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={rural} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={indiviuals} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={skills} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={basic} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={enviroment} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={goverance} alt="#" /></TableCell>
                                <TableCell style={{ textAlign: " center", fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}><img src={composite} alt="#" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? panchayatWise.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : panchayatWise
                            ).map((row) => (
                                <TableRow key={row?.panchayatId}>
                                    <TableCell component="th" scope="row" style={{ fontWeight: "600" }}>
                                        {row?.panchayatId}
                                    </TableCell>
                                    <TableCell style={{ width: 300, fontWeight: "600" }} >
                                        {row?.panchayatName}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[0]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[0]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[0]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[0]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[1]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[1]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[1]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[1]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[2]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[2]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[2]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[2]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[3]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[3]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[3]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[3]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[4]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[4]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[4]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[4]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[5]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[5]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[5]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[5]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[6]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[6]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[6]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[6]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[7]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[7]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[7]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[7]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.sectorFormDatas?.[8]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[8]?.weight)) }}>
                                        {Math.trunc(row?.sectorFormDatas?.[8]?.sectorCompositeScore * 100 / row?.sectorFormDatas?.[8]?.weight)}
                                    </TableCell>
                                    <TableCell style={{ textAlign: " center", fontWeight: "600", width: 80, color: "#fff", backgroundColor: getColor(Math.trunc(row?.panchayatCompositeScore)) }}>
                                        {Math.trunc(row?.panchayatCompositeScore)}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={12}
                                    count={panchayatWise.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                //   align="right"
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default HomeDiv5