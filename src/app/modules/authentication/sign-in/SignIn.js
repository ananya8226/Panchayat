import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../../../styles/signin.scss';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import img1 from '../../../../assets/img1.jpg';
import img2 from '../../../../assets/img2.jpg';
import img3 from '../../../../assets/img3.jpeg';
import img4 from '../../../../assets/img4.jpeg';
import img5 from '../../../../assets/img5.jpeg';
import ImageCarousel from "../../../components/ImageCarousel";
import { signUpSchema } from '../../../../schemas';
import { FilledInput, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { POST } from '../../../../services/api/api';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getLoginDataAction } from '../../redux/Actions/getLoginData';
import { getAccountDataAction } from '../../redux/Actions/getAccountData';

// const validate = values => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.password) {
//     errors.lastName = 'Required';
//   } else if (!/^(?!.*\s).{8,20}$/.test(values.password)) {
//     errors.lastName = 'Must be between 8 to 20 characters and must not contain space';
//   }

//   return errors;
// };


function SignIn() {

  // const navigate = useNavigate();
  const images = [
    img1, img2, img3, img4, img5,
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginEntry, setLoginEntry] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginEntry(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if(loginEntry.email=='' || loginEntry.password=='')
    toast.error("All inputs required");
    
   
    let payload = {
      email: loginEntry.email,
      password: loginEntry.password,
      deviceToken: "123",
      deviceId: "xyz",
      deviceType: "xyz",
      browser: "xyz",
      os: "xyz",
      osVersion: "xyz",
    };

    const res = await POST("users/session", payload);
    if (res.data.success) {
      localStorage.setItem("ACCESS_TOKEN", res.data.result.token);
      localStorage.setItem("USER_ROLE",res?.data?.result?.designation)
      dispatch(getLoginDataAction(res?.data?.result?.designation));
  
    }
    if (localStorage.getItem("ACCESS_TOKEN")) {
      toast.success("Login Successful");
      // console.log(res.data.result.designation, "bjkj");
      const userId = localStorage.getItem("USER_ROLE");
      
      if(userId ==1 )
      {
        setTimeout(() => {
          navigate("/panchayatDashBoard")
        }, 700);

        
      }
      else{
        setTimeout(() => {
          navigate("/BlockDashboard")
        }, 700);
        
      }

      dispatch(getAccountDataAction());
    }
    else {
      navigate("/")
      toast.error("Inavlid User Credentials");
    }
  }


  // const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   // validate,
  //   validationSchema: signUpSchema,
  //   onSubmit: values => {
  //     console.log(values);
  //   },
  // });

  // console.log(errors);


  return (
    <>
     <ToastContainer />
      <div className='main-signin'>
        <div className='left-signin'>
          <div className='carousel-div'>
            <ImageCarousel images={images} indicatorDisplay="flex" />
          </div>

        </div>

        <div className='partition'>
          <hr></hr>
        </div>
        <div className='right-signin'>

          <div className='form-container'>
            <h2 className='signin-heading'>
              Sign In
            </h2>

            <h2>
              Welcome Back!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='label-div'>
                <label>
                  Email address/User name
                </label>
              </div>
              <TextField fullWidth className='text-field' id="email" placeholder="Please enter your Email Address/ User name" variant="standard" type="text" onChange={handleChange}
                name="email" autoComplete="email" autoFocus style={{ marginBottom: "2.7rem" }} />
              {/* {<p className='form-error'>{errors.email}</p>} */}

              <div className='label-div'>
                <label >
                  Password
                </label>
              </div>
              {/* <TextField fullWidth className='text-field' id="password" placeholder="Please enter your Password" variant="standard" type="password" onChange={handleChange}
              handleBlur={handleBlur} value={values.password} name="password" autoComplete="password" style={{ marginBottom: "2.7rem" }} /> */}
              <FilledInput
                id="password"
                fullWidth
                className='text-field'
                name='password'
                onChange={handleChange}
                style={{ background: "#fff" }}
                size="small"
                placeholder='Please enter your Password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {/* {<p className='form-error'>{errors.password}</p>} */}

              <div className='forget-pass'>
                <Link to="/forgetpassword" >Forgot password? </Link>
              </div>


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
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default SignIn


