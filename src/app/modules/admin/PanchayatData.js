import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../../components/Sidebar';
import '../../../styles/managePanchayat.scss';
import { Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import FilterComponent from '../../components/FilterComponent';
import SearchComponent from '../../components/SearchComponent';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';



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

function createData(name, email, createdOn, month, year, updatedBy, updatedOn, formStatus, rejectReason, viewForm) {
    return { name, email, createdOn, month, year, updatedBy, updatedOn, formStatus, rejectReason, viewForm };
}

const rows = [
    createData('Cupcake', 45, 78, 89, 45, 78, 89, 9, 305, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
    createData('Donut', 452, 45, 78, 89, 45, 78, 89, 9, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
    createData('Eclair', 45, 45, 78, 89, 78, 89, 9, 262, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
    createData('Frozen yoghurt', 159, 6.04, 5, 78, 45, 78, 89, 89, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
    createData('Gingerbread', 356, 45, 78, 45, 78, 89, 89, 16.0, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
    createData('Honeycomb', 45, 78, 9, 408, 45, 78, 89, 3.2, <span><RemoveRedEyeIcon /><DownloadIcon /></span>),
]

const FilterWidth='30%';

const filterOptions = [
   { id: 0, blockName:' All'},
   { id: 1, blockName:'Name'},
   { id: 2, blockName: 'Month'},
   { id: 3, blockName:'Year'},
]

function PanchayatData() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const navigate = useNavigate();

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div className='main-container'>
            <Sidebar />
            <div className='body-div'>
                <div className='filter-div'>
                    <h2>
                        Panchayat Data
                    </h2>
                    <div style={{ display: 'flex' ,width:"70%", justifyContent:"flex-end"}}>
                        <SearchComponent />
                        <FilterComponent options={filterOptions} label={"Filter"} width={FilterWidth}/>
                    </div>
                </div>
                <div className='table-container'>
                    <TableContainer style={{
                        padding: '2rem',
                        width: '1300px', // for horizontal scroll width:'800px',
                        height: '20rem',
                    }}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead className='tablehead' >
                                <TableRow style={{
                                    background: " #00695d",
                                }} >
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Name</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Email Id</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Created On</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Month</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Year</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Updated By</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Updated On</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Status</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Reject Reason</TableCell>
                                    <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" , color:"#fff"}}>Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} >
                                            {row.email}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} >
                                            {row.createdOn}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.month}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.year}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.updatedBy}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.updatedOn}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.formStatus}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.rejectReason}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }}>
                                            {row.viewForm}
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
                                        colSpan={7}
                                        count={rows.length}
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
        </div>
    )
}

export default PanchayatData;