import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { POST } from '../../../services/api/api';

function Sector4form({setActiveStep}) {

  const navigate = useNavigate();

  const [indicator1, setIndicator1] = useState({ indicatorId: 1 });
  const [indicator2, setIndicator2] = useState({ indicatorId: 2 });
  const [indicator3, setIndicator3] = useState({ indicatorId: 3 });
  const [indicator4, setIndicator4] = useState({ indicatorId: 4 });
  const [indicator5, setIndicator5] = useState({ indicatorId: 5 });
  const [indicator6, setIndicator6] = useState({ indicatorId: 6 });
  const [indicator7, setIndicator7] = useState({ indicatorId: 7 });

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7];
    const payload = {
      lastFilledFormNo: 4,
      sectorId: 4,
      indicatorData: indicatorData,
      draft: true,
    }

    const res = await POST("panchayat/fill-form", payload);
    // console.log(res.data.message, "api response ");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  }


  return (
    <div className='myform'>
      <h2>
        Enter Details
      </h2>
      <div className='heading'>

      </div>
      <div className='form-body'>
        <form>
          <div className='sector-form'>
            <p>Percentage of houses Sanctioned under PMAY-G</p>
            <IndicatorForm setIndicator={setIndicator1}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of houses completed viz a viz sanctioned under PMAY-G </p>
            <IndicatorForm setIndicator={setIndicator2}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of delayed payments under MGNREGA </p>
            <IndicatorForm setIndicator={setIndicator3}/>
          </div>
          <div className='sector-form'>
            <p>Percentage Cards of MGNREGA seeded with Aadhaar</p>
            <IndicatorForm setIndicator={setIndicator4}/>

          </div>
          <div className='sector-form'>

            <p>Percentage of eligible Households provided IHHLs under SBM</p>
            <IndicatorForm setIndicator={setIndicator5}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of IHHLs functional</p>
            <IndicatorForm setIndicator={setIndicator6}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of household covered under soakage pits</p>
            <IndicatorForm setIndicator={setIndicator7}/>
          </div>

          <div className='btn'>
            <div className='cancel-btn'>
              <Button
                onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
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
                Back
              </Button>

            </div>

            <div className='save-btn'>
              <Button
                onClick={handleNext}
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
                Save & Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sector4form