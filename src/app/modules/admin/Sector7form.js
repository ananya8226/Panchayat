import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { POST } from '../../../services/api/api';

function Sector7form({ setActiveStep ,sectorData, isDraft}) {

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
  const [indicator14, setIndicator14] = useState({ indicatorId: 14 });
  const [indicator15, setIndicator15] = useState({ indicatorId: 15 });
  const [indicator16, setIndicator16] = useState({ indicatorId: 16 });
  const [indicator17, setIndicator17] = useState({ indicatorId: 17 });
 

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11, indicator12, indicator13, indicator14, indicator15, indicator16, indicator17];
    const payload = {
      lastFilledFormNo: 7,
      sectorId: 7,
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
            <p>Percentage of households having functional household tap connection (FHTC)</p>
            <IndicatorForm setIndicator={setIndicator1} indicator={indicator1} indicatorValue={ {numerator : sectorData?.indicatorDatas[0].numerator, denominator: sectorData?.indicatorDatas[0].denominator} } isDraft={isDraft}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of households getting Quality drinking water</p>
            <IndicatorForm setIndicator={setIndicator2} />
          </div>
          <div className='sector-form'>
            <p>Percentage of households electrified </p>
            <IndicatorForm setIndicator={setIndicator3} />
          </div>
          <div className='sector-form'>
            <p>Percentage of eligible habitations connected under PMGSY(As per census 2001)</p>
            <IndicatorForm setIndicator={setIndicator4} />

          </div>
          <div className='sector-form'>

            <p>Percentage of road length macadamized/ concrete / tiled</p>
            <IndicatorForm setIndicator={setIndicator5} />
          </div>
          <div className='sector-form'>

            <p>Percentage of hamlets not having public transport facility</p>
            <IndicatorForm setIndicator={setIndicator6} />
          </div>
          <div className='sector-form'>

            <p>Whether street lights are provided in public places for ensuring safety in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator7} />
          </div>
          <div className='sector-form'>

            <p>Availability of Panchayat Ghar</p>
            <IndicatorForm setIndicator={setIndicator8} />
          </div>
          <div className='sector-form'>

            <p>Availability of Common Service Center with in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator9} />
          </div>
          <div className='sector-form'>
            <p>Availabilty of Internet facility with in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator10} />
          </div>
          <div className='sector-form'>
            <p>Availability of bank branch / extension point / business correspondent with in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator11} />
          </div>
          <div className='sector-form'>
            <p>Availability of ATM with in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator12} />
          </div>
          <div className='sector-form'>
            <p>Availability of Health Institution with in the Panchayat(Sub centers/PHCs) etc</p>
            <IndicatorForm setIndicator={setIndicator13} />
          </div>
          <div className='sector-form'>
            <p>Availability of Pre-Primary / Kindergarden School</p>
            <IndicatorForm setIndicator={setIndicator14} />
          </div>
          <div className='sector-form'>
            <p>Availability of Primary / Middle School</p>
            <IndicatorForm setIndicator={setIndicator15} />
          </div>
          <div className='sector-form'>
            <p>Availability of play ground / play field with in the panchayat</p>
            <IndicatorForm setIndicator={setIndicator16} />
          </div>
          <div className='sector-form'>
            <p>Availabilty of rural HAAT</p>
            <IndicatorForm setIndicator={setIndicator17} />
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

export default Sector7form