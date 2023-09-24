import React from 'react';
import ashoka from '../../assets/ashoka.svg';
import specs from '../../assets/specs.png';
import g20 from '../../assets/g20.png';
import '../../styles/header.scss';
import { AppBar, Toolbar, Stack, Button, Menu, MenuItem, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '../../assets/user.png';

function Header() {

    const navigate = useNavigate();
    const isloggedIn = localStorage.getItem('ACCESS_TOKEN');
    const userId = localStorage.getItem('USER_ROLE');
    
    const [menu1AnchorEl, setMenu1AnchorEl] = useState(null);
    const [menu2AnchorEl, setMenu2AnchorEl] = useState(null);
    const [menu3AnchorEl, setMenu3AnchorEl] = useState(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    // const notify = () => toast("Wow so easy!");

    const handleLogout = () => {
         localStorage.clear();
         navigate('/');
    }

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenu1Click = (event) => {
        setMenu1AnchorEl(event.currentTarget);
    };

    const handleMenu2Click = (event) => {
        setMenu2AnchorEl(event.currentTarget);
    };

    const handleMenu3Click = (event) => {
        setMenu3AnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setMenu1AnchorEl(null);
        setMenu2AnchorEl(null);
        setMenu3AnchorEl(null);
        setMenuAnchorEl(null);
    };

    return (
        <div className='main-header'>
            <div className='top-header'>
                <div className='left-top-header'>
                    <div>
                        <img src={ashoka}></img>
                    </div>
                    <div className='header-text'>
                        <p>
                            आकांक्षी पंचायत विकास कार्यक्रम, जम्मू और कश्मीर
                            <br>
                            </br>
                            Aspirational Panchayat Development Programme
                            <br>
                            </br>
                            Planning, Development and Monitoring Department, J&K
                            <br>
                            </br>
                            خواہش مند پنچایت ترقیاتی پروگرام، J&K
                        </p>
                    </div>
                </div>
                <div justifyContent="flex-end" className='right-top-header'>
                    <div  >
                        <img src={g20}></img>
                    </div>
                    <div  >
                        <img src={specs}></img>
                    </div>
                </div>
            </div>
            <div className='bottom-header'>
                <AppBar position='static' sx={{ bgcolor: "#00695d", padding: "0 4rem", height: "4rem" }} >
                    <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Stack direction='row' spacing={2}>
                            <Button className="nav-btn" color='inherit' onClick={()=>navigate('/home')}>Home</Button>
                            <Button className="nav-btn" color='inherit'>All Panchayat</Button>
                            <Button className="nav-btn" color='inherit' onClick={(event) => handleMenu1Click(event)}>Border Pnachayat <KeyboardArrowDownIcon /></Button>
                            <Menu
                                anchorEl={menu1AnchorEl}
                                open={Boolean(menu1AnchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="Aspirational Border Pnachayat" />
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="All Border Panchayat" />
                                </MenuItem>
                            </Menu>

                            <Button className="nav-btn" color='inherit'><a href='https://apdp.jk.gov.in/faq'>FAQ's</a></Button>
                            <Button className="nav-btn" color='inherit' onClick={(event) => handleMenu2Click(event)} >Reports <KeyboardArrowDownIcon /> </Button>
                            <Menu
                                anchorEl={menu2AnchorEl}
                                open={Boolean(menu2AnchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="Progress Report" />
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="Analytical Monthly Report" />
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="Press Release Report" />
                                </MenuItem>
                            </Menu>

                            <Button className="nav-btn" color='inherit' onClick={(event) => handleMenu3Click(event,)} >Best Practices <KeyboardArrowDownIcon /> </Button>
                            <Menu
                                anchorEl={menu3AnchorEl}
                                open={Boolean(menu3AnchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="Jammu & Kashmir" />
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ListItemText primary="National Level" />
                                </MenuItem>
                            </Menu>

                        </Stack>
                        <Stack>

                            {isloggedIn ?
                             userId == 1?
                             <>
                                <button className="user-icon" onClick={(event) => handleMenuClick(event)}>
                                <img src={user} alt="user-icon"/>
                            </button>
                            <Menu
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={() => {
                                    setMenuAnchorEl(null);
                                    navigate('/panchayatAccount');
                                }}>
                                    <ListItemText primary="My Account" />
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    setMenuAnchorEl(null);
                                    navigate('/panchayatDashboard');
                                }}>
                                    <ListItemText primary="My Form" />
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    setMenuAnchorEl(null);
                                    navigate('/faq');
                                }}>
                                    <ListItemText primary="FAQ" />
                                    
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    setMenuAnchorEl(null);
                                    navigate('/resetUserpassword');
                                }}>
                                    <ListItemText primary="Change Password" />
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    {/* <ToastContainer /> */}
                                    {/* <ListItemText primary="Logout" onClick={notify}/> */}
                                    Logout
                                </MenuItem>
                            </Menu>
                             </>
                             :
                             <>
                             <button className="user-icon" onClick={(event) => handleMenuClick(event)}>
                             <img src={user} alt="user-icon"/>
                         </button>
                         <Menu
                             anchorEl={menuAnchorEl}
                             open={Boolean(menuAnchorEl)}
                             onClose={handleMenuClose}
                         >
                             <MenuItem onClick={() => {
                                 setMenuAnchorEl(null);
                                 navigate('/blockDashboard');
                             }}>
                                 <ListItemText primary="My DashBoard" />
                             </MenuItem>

                             <MenuItem onClick={() => {
                                 setMenuAnchorEl(null);
                                 navigate('/blockAccount');
                             }}>
                                 <ListItemText primary="My Account" />
                             </MenuItem>

                             <MenuItem onClick={() => {
                                 setMenuAnchorEl(null);
                                 navigate('/managePanchayat');
                             }}>
                                 <ListItemText primary="Manage Panchayat" />
                                 
                             </MenuItem>
                             <MenuItem onClick={() => {
                                 setMenuAnchorEl(null);
                                 navigate('/resetUserpassword');
                             }}>
                                 <ListItemText primary="Change Password" />
                             </MenuItem>
                             <MenuItem onClick={handleLogout}>
                                 {/* <ToastContainer /> */}
                                 {/* <ListItemText primary="Logout" onClick={notify}/> */}
                                 Logout
                             </MenuItem>
                         </Menu>
                          </>
                                : <Button className="nav-btn" color='inherit' onClick={(event) => navigate("/signin")}>Sign In</Button>
                            }
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Header