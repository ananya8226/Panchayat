import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/myaccount.scss';
import { TextField, Box, Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET, PATCH } from '../../../services/api/api';
import { useEffect } from 'react';

function PanchayatEditAccount() {

    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [editedData, setEditedData] = useState({});
    const [input, setInput] = useState({});

    const getProfileData = async () => {
        const response = await GET("users/profile");
        // console.log(response.data);

        if (response.data.success) {
            setProfile(response?.data?.result);
        }
        else
            console.log(response?.data?.success);
    }

    const handleChange = (event, name) => {
        const { value } = event.target;
        // console.log("ghhffk");
        // setInput(prevVal => {
        //     return {
        //         ...prevVal,
        //         [name]: value
        //     }
        // })

        setProfile({
            ...profile,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        // console.log("yysfjgsfjh");
     
     
        // if (response.data.success) {
        //     setEditedData(input);
        // }
        // else

        const payload = {
           fullName: profile?.fullName,
           mobileNo: profile?.mobileNo,
        }

        const response = PATCH("users/profile", payload);
        toast("Profile Updated Successfully");

        navigate('/panchayatAccount');
        // console.log(profile.fullName, profile.mobileNo, "hdhtddfj");
    }

    useEffect(() => {
        getProfileData();
        // handleSubmit();
    }, []);

    return (
        <div className='account-container'>

            <div className='body-container' style={{ marginTop: "5rem" }}>
                <h2>
                    Edit Account
                </h2>
                <form >
                    <div className='form-container'>
                        <div className='form-colm'>

                            <label>
                                Full Name
                            </label>
                            <TextField name='fullName' type='text' className='text-field' fullWidth id="outlined-basic" variant="outlined" value={profile?.fullName} onChange={(event)=>{handleChange(event, "fullName")}} />

                            <label>
                                Email Id
                            </label>
                            <TextField name='email' type='email' className='text-field' fullWidth id="outlined-basic" value={profile?.email} variant="outlined" disabled/>
                            <label>
                                Designation
                            </label>
                            <TextField name='designation' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.designation} variant="outlined" disabled/>
                            <label>
                                State
                            </label>
                            <TextField name='stateMaster' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.stateMaster?.name} variant="outlined" disabled/>
                            <label>
                                Block
                            </label>
                            <TextField name='blockMaster' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.blockMaster?.name} variant="outlined" disabled/>

                        </div>
                        <div className='form-colm'>
                            <label>
                                User Name
                            </label>
                            <TextField name='userName' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.userName} variant="outlined"/>
                            <label>
                                Mobile Number
                            </label>
                            <TextField name='mobileNo' type='text' className='text-field' fullWidth id="outlined-basic" value={profile?.mobileNo} variant="outlined" onChange={(event)=>{handleChange(event, "mobileNo")}}/>
                            <label>
                                District
                            </label>
                            <TextField name='districtMaster' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.districtMaster?.name} variant="outlined" disabled/>
                            <label>
                                Panchayat/Village
                            </label>
                            <TextField name='panchayatMaster' type='name' className='text-field' fullWidth id="outlined-basic" value={profile?.panchayatMaster?.name} variant="outlined" disabled/>
                        </div>
                    </div>

                    <div className='submit-btn'>
                        <Button
                            onClick={handleSubmit}
                            style={{
                                background: "#B74E48",
                                width: "15rem",
                                height: "2.5rem",
                                borderRadius: "1.25rem",
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                textTransform: "lowercase ! important",
                            }}
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PanchayatEditAccount;