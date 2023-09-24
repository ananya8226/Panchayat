import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/myaccount.scss';
import { TextField, Box, Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../components/Sidebar';
import { useSelector } from 'react-redux';

function BlockAccount() {

    const account_data =  useSelector(state=> state.accountDataReducer.accountData);
    const [profile, setProfile] = useState(account_data);
   

    const SidebarHeight='55rem';

    return (
        <div style={{display:"flex"}}>
            <Sidebar SidebarHeight={SidebarHeight}/>
            <div className='account-container'>
                <div className='heading'>
                    <div className='edit-btn'>
                    <Link to="/panchayatEditAccount" >Edit Profile </Link>
                    </div>
                </div>
                <div className='body-container'>
                    <h2>
                        My Account
                    </h2>
                    <form>
                        <div className='form-container'>
                            <div className='form-colm'>

                                <label>
                                    Full Name
                                </label>
                                <TextField name='name' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.fullName} disabled="true"/>
                                <label>
                                    Email Id
                                </label>
                                <TextField name='email' type='email' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.email} disabled="true"/>
                                <label>
                                    Designation
                                </label>
                                <TextField name='designation' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.designation==2 ? "Panchayat Officer" : "Block Officer"} disabled="true"/>
                                <label>
                                    State
                                </label>
                                <TextField name='state' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.stateMaster?.name} disabled="true"/>


                            </div>
                            <div className='form-colm'>
                                <label>
                                    User Name
                                </label>
                                <TextField name='username' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.userName} disabled="true"/>
                                <label>
                                    Mobile Number
                                </label>
                                <TextField name='mobile' type='number' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.mobileNo} disabled="true"/>
                                <label>
                                    District
                                </label>
                                <TextField name='district' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.districtMaster?.name} disabled="true"/>
                                <label>
                                    Block
                                </label>
                                <TextField name='block' type='name' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.blockMaster?.name} disabled="true"/>
                            </div>
                        </div>

                        <div className='submit-btn'>
                            <Button
                                type="submit"
                                disabled
                                style={{
                                    // background: "#B74E48",
                                    width: "15rem",
                                    height: "2.5rem",
                                    borderRadius: "1.25rem",
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                    textTransform: "lowercase ! important",
                                }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default BlockAccount