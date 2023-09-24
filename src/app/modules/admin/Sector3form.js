import React from 'react';
import { Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { useState } from 'react';
import { POST } from '../../../services/api/api';

function Sector3form({setActiveStep}) {

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
  const [indicator12, setIndicator12] = useState({ indicatorId: 12 });
  const [indicator13, setIndicator13] = useState({ indicatorId: 13 });

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11, indicator12, indicator13];
    const payload = {
      lastFilledFormNo: 3,
      sectorId: 3,
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
            <p>Percentage of Children 6-14 years enrolled in schools</p>
            <IndicatorForm setIndicator={setIndicator1}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of schools having functional toilet facility</p>
            <IndicatorForm setIndicator={setIndicator2}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of schools having separate toilet facility for girls </p>
            <IndicatorForm setIndicator={setIndicator3}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of schools having functional drinking water facility </p>
            <IndicatorForm setIndicator={setIndicator4}/>

          </div>
          <div className='sector-form'>

            <p>Percentage of schools having functional electricity connection</p>
            <IndicatorForm setIndicator={setIndicator5}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of schools having abnormal (less than 1:10 ) teacher pupil ratio of schools having functional electricity connection</p>
            <IndicatorForm setIndicator={setIndicator6}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of schools having abnormal (greater than 1:30) teacher pupil ratio</p>
            <IndicatorForm setIndicator={setIndicator7}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of eligible students receiving scholarship (ST/SC/OBC and Merit)</p>
            <IndicatorForm setIndicator={setIndicator8}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of children served mid day meal</p>
            <IndicatorForm setIndicator={setIndicator9}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of students provided free Text books</p>
            <IndicatorForm setIndicator={setIndicator10}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of students provided free Uniform</p>
            <IndicatorForm setIndicator={setIndicator11}/>
          </div>
          <div className='sector-form'>

            <p>Percentage of out of school children in the age group of 6-14 years</p>
            <IndicatorForm setIndicator={setIndicator12}/>
          </div>
          <div className='sector-form'>

            <p>Literacy rate (%)</p>
            <IndicatorForm setIndicator={setIndicator13}/>
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

export default Sector3form