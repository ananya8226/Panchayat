import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { useState } from 'react';
import '../../authentication/auth.scss';
import { Container, Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { PATCH } from '../../../../services/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetUserPassword() {

  const navigate = useNavigate();

  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const handleOldpass = (event) => {
    setOldpass(event.target.value);
  }

  const handleNewpass = (event) => {
    setNewpass(event.target.value);
  }

  const handleConfirmpass = (event) => {
    setConfirmpass(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newpass != confirmpass)
      toast("Password must match!!");
    else {
      const payload = {
        oldPassword: oldpass,
        newPassword: newpass,
      }
      const res = await PATCH("users/password/change", payload);
      // console.log(res + "responseeeee");
      toast(res?.data?.message);
      localStorage.clear();
      navigate('/signIn');

    }
  }

  return (
    <div className='main-body-forgetpass'>
      <div>
        <h2 className='signin-heading'>
          Reset Password
        </h2>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>
            Current Password
          </label>
          <TextField fullWidth required className='text-field' onChange={handleOldpass} id="email" placeholder="Please enter your current password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />

          <label>
            New Password
          </label>
          <TextField fullWidth required className='text-field' onChange={handleNewpass} id="email" placeholder="Please enter your new password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />

          <label>
            Confirm Password
          </label>
          <TextField fullWidth required className='text-field' onChange={handleConfirmpass} id="email" placeholder="Please confirm your password" variant="standard" type="email" name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />

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

export default ResetUserPassword