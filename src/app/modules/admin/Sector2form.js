import React, { useState } from 'react';
import {  Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { POST } from '../../../services/api/api';

function Sector2form({setActiveStep ,sectorData, isDraft}) {

  const navigate = useNavigate();
  
  const [indicator1, setIndicator1] = useState({ indicatorId: 1 });
  const [indicator2, setIndicator2] = useState({ indicatorId: 2 });
  const [indicator3, setIndicator3] = useState({ indicatorId: 3 });
  const [indicator4, setIndicator4] = useState({ indicatorId: 4 });
  const [indicator5, setIndicator5] = useState({ indicatorId: 5 });
  const [indicator6, setIndicator6] = useState({ indicatorId: 6 });
  const [indicator7, setIndicator7] = useState({ indicatorId: 7 });
  const [indicator8, setIndicator8] = useState({ indicatorId: 8 });
  const [indicator9, setIndicator9] = useState({ indicatorId: 9 });
  const [indicator10, setIndicator10] = useState({ indicatorId: 10 });
  const [indicator11, setIndicator11] = useState({ indicatorId: 11 });

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11];
    const payload = {
      lastFilledFormNo: 2,
      sectorId: 2,
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
            <p>Percentage of Pregnant women registered for ANC checkup within 1st trimester </p>
            <IndicatorForm setIndicator={setIndicator1} />
          </div>
          <div className='sector-form'>
            <p>Percentage of home births  </p>
            <IndicatorForm setIndicator={setIndicator2} />
          </div>
          <div className='sector-form'>
            <p> Sex ratio of birth</p>
            <IndicatorForm setIndicator={setIndicator3} />
          </div>
          <div className='sector-form'>
            <p>Percentage of children aged 9 to 11 months fully Immunization</p>
            <IndicatorForm setIndicator={setIndicator4} />

          </div>
          <div className='sector-form'>

            <p>Percentage of population covered by Golden Cards under PMJAY/ SEHAT scheme</p>
            <IndicatorForm setIndicator={setIndicator5} />
          </div>
          <div className='sector-form'>

            <p>Percentage of Low Births weight babies</p>
            <IndicatorForm setIndicator={setIndicator6} />
          </div>
          <div className='sector-form'>

            <p>Percentage of children upto age 6 years who are Wasted ( Weight for height)</p>
            <IndicatorForm setIndicator={setIndicator7} />
          </div>
          <div className='sector-form'>

            <p>Percentage of children upto age 6 years who are Stunted (Height for age)</p>
            <IndicatorForm setIndicator={setIndicator8} />
          </div>
          <div className='sector-form'>

            <p>Percentage of AWC conducting Village Health, Sanitation & Nutrition day (One per month)</p>
            <IndicatorForm setIndicator={setIndicator9} />
          </div>
          <div className='sector-form'>

            <p>Percentage of children (0-6 years) regularly taking supplementary nutrition under ICDS</p>
            <IndicatorForm setIndicator={setIndicator10} />
          </div>
          <div className='sector-form'>

            <p>Percentage of Pregnant / lactating women regularly taking supplementary nutrition</p>
            <IndicatorForm setIndicator={setIndicator11} />
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

export default Sector2form