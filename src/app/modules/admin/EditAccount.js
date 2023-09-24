import React from 'react';
import '../../../styles/myaccount.scss';
import { useState } from 'react';
import { Button, TextField, Box, Container } from "@mui/material";
import ReactModal from 'react-modal';

function EditAccount() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='account-container'>
            <div className='heading'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <path d="M29.5 0C25.626 0 21.7899 0.76304 18.2108 2.24555C14.6317 3.72807 11.3797 5.90102 8.64035 8.64035C3.10803 14.1727 0 21.6761 0 29.5C0 37.3239 3.10803 44.8273 8.64035 50.3597C11.3797 53.099 14.6317 55.2719 18.2108 56.7544C21.7899 58.237 25.626 59 29.5 59C37.3239 59 44.8273 55.892 50.3597 50.3597C55.892 44.8273 59 37.3239 59 29.5C59 25.626 58.237 21.7899 56.7544 18.2108C55.2719 14.6317 53.099 11.3797 50.3597 8.64035C47.6203 5.90102 44.3683 3.72807 40.7892 2.24555C37.2101 0.76304 33.374 0 29.5 0ZM14.9565 48.026C16.225 45.371 23.954 42.775 29.5 42.775C35.046 42.775 42.775 45.371 44.0435 48.026C39.9117 51.3183 34.7831 53.1076 29.5 53.1C24.013 53.1 18.9685 51.212 14.9565 48.026ZM48.262 43.7485C44.0435 38.6155 33.807 36.875 29.5 36.875C25.193 36.875 14.9565 38.6155 10.738 43.7485C7.59975 39.6616 5.89901 34.6528 5.9 29.5C5.9 16.4905 16.4905 5.9 29.5 5.9C42.5095 5.9 53.1 16.4905 53.1 29.5C53.1 34.869 51.271 39.825 48.262 43.7485ZM29.5 11.8C23.777 11.8 19.175 16.402 19.175 22.125C19.175 27.848 23.777 32.45 29.5 32.45C35.223 32.45 39.825 27.848 39.825 22.125C39.825 16.402 35.223 11.8 29.5 11.8ZM29.5 26.55C28.3264 26.55 27.2009 26.0838 26.3711 25.2539C25.5412 24.4241 25.075 23.2986 25.075 22.125C25.075 20.9514 25.5412 19.8259 26.3711 18.9961C27.2009 18.1662 28.3264 17.7 29.5 17.7C30.6736 17.7 31.7991 18.1662 32.6289 18.9961C33.4588 19.8259 33.925 20.9514 33.925 22.125C33.925 23.2986 33.4588 24.4241 32.6289 25.2539C31.7991 26.0838 30.6736 26.55 29.5 26.55Z" fill="#607163" />
                    </svg>
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
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                Email Id
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                Designation
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                Block
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='form-colm'>
                            <label>
                                User Name
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                Mobile Number
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                District
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                            <label>
                                Panchayat/Village
                            </label>
                            <TextField className='text-field' fullWidth id="outlined-basic" variant="outlined" />
                        </div>
                    </div>

                    <div className='submit-btn'>
                        <Button
                            // type="submit"
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
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=> setIsOpen(true)}
                        >
                            Save Changes
                        </Button>
                    </div>

                    <ReactModal
                        isOpen={isOpen}
                    >
                        <Container>
                            <Box >
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M23 45C31.8366 45 39 37.8366 39 29C39 20.1634 31.8366 13 23 13C14.1634 13 7 20.1634 7 29C7 37.8366 14.1634 45 23 45Z" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 29.6L21.25 35L30 26" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>

                            <Box >
                                Your account has been updated successfully.
                            </Box>

                            <Box>
                                <Button className="modal-btn" variant="contained" style={{ width: '4rem' }} onClick={() => setIsOpen(false)}> OK</Button>
                            </Box>
                        </Container>
                    </ReactModal>
                </form>


            </div>
        </div>
    )
}

export default EditAccount