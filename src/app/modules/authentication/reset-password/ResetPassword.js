import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { useState } from 'react';
import '../../authentication/auth.scss';
import { Container, Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PATCH } from '../../../../services/api/api';

function ResetPassword() {
  const navigate = useNavigate();

  const [newpass, setNewpass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const handlePass = (event) => {
    setNewpass(event.target.value);
  }

  const handleConfirmPass = (event) => {
    setConfirmpass(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newpass != confirmpass)
      toast("Password must match!!");
    else {
      const payload = {
        newPassword: newpass,
      }
      const res = await PATCH("users/password/reset", payload);
      // console.log(res + "responseeeee");
      toast(res?.data?.message);
      // localStorage.clear();
      // navigate('/signIn');
    }
  }


  return (
    <div className='main-body-forgetpass'>
      <div>
        <h2 className='signin-heading'>
          Forgot Password
        </h2>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>

          <label>
            New Password
          </label>
          <TextField fullWidth required={true} onChange={handlePass} className='text-field' id="email" placeholder="Please enter your new password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />

          <label>
            Confirm Password
          </label>
          <TextField fullWidth required={true} onChange={handleConfirmPass} className='text-field' id="email" placeholder="Please confirm your password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />

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
            >
              Submit
            </Button>
          </div>
        </form>



      </div>

    </div>
  )
}

export default ResetPassword