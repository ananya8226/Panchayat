import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import '../../authentication/auth.scss';
import { Container, Box } from '@mui/material';
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { POST } from '../../../../services/api/api';

function ForgetPassword() {

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value)
  }

  // console.log(input, "useremail");
  async function handleSubmit(event) {
    event.preventDefault();

    let payload =  {
      email: input,
      "deviceToken": "123",
      "deviceId": "123",
    };

    // console.log(payload.email, "userewmaillll");

    const res = await POST("users/password/forgot", payload);
    if (res.data.success) {
      console.log(res.data.result);
      setIsOpen(true);
    }    
  }

  return (
    <div className='main-body-forgetpass'>
      <div>
        <h2 className='signin-heading'>
          Change Password
        </h2>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>
            Email address
          </label>
          <TextField fullWidth required={true} className='text-field' id="email" onChange={handleChange}
          placeholder="Enter your Email Address to reset your password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />
          <div className='signin-btn-div'>
            <Button
              type="submit"
              style={{
                background: "#B74E48",
                width: "15rem",
                height: "2.5rem",
                borderRadius: "1.25rem",
                fontWeight: "600",
                fontSize: "1.2rem",
              }}
              variant="contained"
              sx={{ mt: 3 }}
              // onClick={setIsOpen}
            >
              Next
            </Button>
          </div>

          <Dialog
            open={isOpen}
            onClose={()=> setIsOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M23 45C31.8366 45 39 37.8366 39 29C39 20.1634 31.8366 13 23 13C14.1634 13 7 20.1634 7 29C7 37.8366 14.1634 45 23 45Z" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 29.6L21.25 35L30 26" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                A request has been sent to admin for resetting your password. Kindly contact concerned admin.
              </DialogContentText>
            </DialogContent>
            <DialogActions className='dialog-action'>
              <Button onClick={()=> setIsOpen(false)}><Link className='modal-link' to="/signIn" >OK </Link></Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword