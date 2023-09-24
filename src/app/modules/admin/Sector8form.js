import React from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { useState } from 'react';
import { POST } from '../../../services/api/api';

function Sector8form({setActiveStep}) {

  const [indicator1, setIndicator1] = useState({ indicatorId: 1 });
  const [indicator2, setIndicator2] = useState({ indicatorId: 2 });
  const [indicator3, setIndicator3] = useState({ indicatorId: 3 });
  const [indicator4, setIndicator4] = useState({ indicatorId: 4 });
  const [indicator5, setIndicator5] = useState({ indicatorId: 5 });
  
  const navigate = useNavigate();

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5];
    const payload = {
      lastFilledFormNo: 8,
      sectorId: 8,
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
            <p>Has the climate Resilience Plan been developed for the Gram Panchayat</p>
            <IndicatorForm setIndicator={setIndicator1}/>
          </div>
          <div className='sector-form'>
            <p>Whether door to door collection of solid waste facility available</p>
            <IndicatorForm setIndicator={setIndicator2}/>
          </div>
          <div className='sector-form'>
            <p>Whether segregation sheds for solid and liquid waste available  </p>
            <IndicatorForm setIndicator={setIndicator3}/>
          </div>
          <div className='sector-form'>
            <p>Whether the panchayat is single use plastic free</p>
            <IndicatorForm setIndicator={setIndicator4}/>

          </div>
          <div className='sector-form'>

            <p>Whether the panchayat is carbon neutral</p>
            <IndicatorForm setIndicator={setIndicator5}/>
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

export default Sector8form