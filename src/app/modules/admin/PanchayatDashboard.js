import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    TextField, Box, Button, Menu, MenuItem, ListItemText, Table, TableBody, TableCell, TableContainer,
    TableFooter, TablePagination, TableRow, TableHead, Paper, IconButton,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/panchayatdashboard.scss';
import { GET } from '../../../services/api/api';
import { useEffect } from 'react';


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
};

function createData(month, createdOn, updatedBy, updatedOn, formStatus, rejectReason, viewForm) {
    return { month, createdOn, updatedBy, updatedOn, formStatus, rejectReason, viewForm };
}


export default function PanchayatDashboard() {
    const [page, setPage] = useState(0);
    // const [enableEdit, setEnableEdit] = useState(0);
    const [myformdata, setMyFormData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // const [indicatorData, setIndicatorData] = useState([]);
    const navigate = useNavigate();

    // const viewForm = () => {
    //     navigate('/viewMyForm');
    // }

    const myForm = async () => {

        const res = await GET("panchayat/my-form-listing");
        // console.log(res);
        if (res?.data?.success)
            setMyFormData(res?.data?.result?.rows);

        else
            toast("status", res.data.status_code);
    }

    useEffect(() => {
        myForm();
    }, [])

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - myformdata.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const viewFormData= async(rowId) => {

       const res = await GET("panchayat/my-form", {
                panchayatId : rowId,
            });

        // console.log(res?.data?.result[0]?.sectorFormDatas , " ", rowId, "Data");
        // setIndicatorData(res?.data?.result[0]?.sectorFormDatas[0]?.indicatorDatas);
        // setEnableEdit(1);

        navigate('/myform',{ state: {
             myFormData: res?.data?.result[0]?.sectorFormDatas,
             isDraft: res?.data?.result[0]?.status == 0 ? true : false,
        }, });
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: 'flex-end', width: "96.5%", }}>

                <Button
                    type="submit"
                    style={{
                        background: "#00695d",
                        width: "9rem",
                        height: "2.5rem",
                        borderRadius: "1.25rem",
                        fontWeight: "500",
                        fontSize: "1rem",
                    }}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => navigate('/myform')}
                >
                    Apply
                </Button>
            </div>
            <TableContainer style={{
                padding: '2rem',
                width: '95%',// for horizontal scroll width:800px;

            }}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className='tablehead' >
                        <TableRow style={{
                            background: " #00695d",
                        }} >
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Month</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Created On</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Updated By</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Updated On</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Status</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Reject Reason</TableCell>
                            <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>Form View</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {(rowsPerPage > 0
                            ? myformdata?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : myformdata
                        )?.map((row) => (
                            <TableRow key={row?.id}>
                                <TableCell style={{ width: 160, fontWeight: "540" }} component="th" scope="row">
                                    {(row?.month) == 1 ? "January" : (row?.month) == 2 ? "February" : (row?.month) == 3 ? "March" : (row?.month) == 4 ? "April" : (row?.month) == 5 ? "May" : (row?.month) == 6 ? "June" : (row?.month) == 7 ? "July" : (row?.month) == 8 ? "August" : (row?.month) == 9 ? "September" : (row?.month) == 10 ? "October" : (row?.month) == 11 ? "November" : "December"}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }} >
                                    {(row?.createdAt)?.slice(0, 10)}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }}>
                                    {row?.updatedBy}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }}>
                                    {(row?.updatedAt)?.slice(0, 10)}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }}>
                                    {(row?.status) == 0 ? "Draft" : (row?.status) == -1 ? "Rejected" : (row?.status) == 1 ? "Submitted" : "Approved"}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }}>
                                    {!row.reason ? "-" : row.reason}
                                </TableCell>
                                <TableCell style={{ width: 160, fontWeight: "540" }}>
                                    <span><button className='view-form' onClick={()=>viewFormData(row?.id)}><RemoveRedEyeIcon /></button><button><DownloadIcon /></button></span>
                                </TableCell>
                            </TableRow>
                            
                        )) }
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
                                colSpan={7}
                                count={myformdata?.length}
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
        </>


    );
}