import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../../../styles/myform.scss';
import { useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import { POST } from '../../../services/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sector1form({ setActiveStep ,sectorData, isDraft}) {

  const [indicator1, setIndicator1] = useState({ indicatorId: 1 });
  const [indicator2, setIndicator2] = useState({ indicatorId: 2 });
  const [indicator3, setIndicator3] = useState({ indicatorId: 3 });
  const [indicator4, setIndicator4] = useState({ indicatorId: 4 });
  const [indicator5, setIndicator5] = useState({ indicatorId: 5 });
  const [indicator6, setIndicator6] = useState({ indicatorId: 6 });

  // const indicatorValue = {
  //   numerator : sectorData?.indicatorDatas[0].numerator,
  //   denominator: sectorData?.indicatorDatas[0].denominator
  // }

  // console.log(indicatorValue, "aajjjkkkkk")

  const navigate = useNavigate();
  

  const handleNext = async () => {

    console.log(indicator1?.numerator, "jjgtm");

    if (!indicator1.numerator || !indicator2.numerator || !indicator3.numerator || !indicator4.numerator || !indicator5.numerator || !indicator6.numerator)
      toast("Please fill all indicator values");

    else {
      
      const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6];

      const payload = {
        lastFilledFormNo: 1,
        sectorId: 1,
        indicatorData: indicatorData,
        draft: true,
      }

      const res = await POST("panchayat/fill-form", payload);
      console.log(res.data.message, "api response ");

      if (res?.data?.success)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      else
        toast(res?.data?.message);
    }
  }

  return (
    <div className='myform'>
      <h2>
        Enter Details
      </h2>
      <div className='heading'>

      </div>
      <div className='form-body'>
        <form >
          <div className='sector-form'>
            <p>Percentage of soil health card issued </p>
            <IndicatorForm setIndicator={setIndicator1} indicator={indicator1} indicatorValue={ {numerator : sectorData?.indicatorDatas[0].numerator, denominator: sectorData?.indicatorDatas[0].denominator} } isDraft={isDraft}/>

          </div>
          <div className='sector-form'>
            <p>Percentage of Kissan credit card issued </p>
            <IndicatorForm setIndicator={setIndicator2} indicator={indicator2} indicatorValue={ {numerator : sectorData?.indicatorDatas[1].numerator, denominator: sectorData?.indicatorDatas[1].denominator} } isDraft={isDraft}/>

          </div>
          <div className='sector-form'>
            <p>Percentage of farmers provided assistance under PM kisan Nidhi Yojna  </p>
            <IndicatorForm setIndicator={setIndicator3} indicator={indicator3} indicatorValue={ {numerator : sectorData?.indicatorDatas[2].numerator, denominator: sectorData?.indicatorDatas[2].denominator} } isDraft={isDraft}/>

          </div>
          <div className='sector-form'>
            <p>Percentage of cultivable land under double crop farming </p>
            <IndicatorForm setIndicator={setIndicator4} indicator={indicator4} indicatorValue={ {numerator : sectorData?.indicatorDatas[3].numerator, denominator: sectorData?.indicatorDatas[3].denominator} } isDraft={isDraft}/>

          </div>
          <div className='sector-form'>
            <p>Percentage coverage of cattle vaccinated</p>
            <IndicatorForm setIndicator={setIndicator5} indicatorValue={ {numerator : sectorData?.indicatorDatas[4].numerator, denominator: sectorData?.indicatorDatas[4].denominator} } indicator={indicator5} isDraft={isDraft}/>

          </div>
          <div className='sector-form'>

            <p>Percentage coverage of cattle artificially inseminated</p>
            <IndicatorForm setIndicator={setIndicator6} indicatorValue={ {numerator : sectorData?.indicatorDatas[5].numerator, denominator: sectorData?.indicatorDatas[5].denominator} } indicator={indicator6} isDraft={isDraft}/>

          </div>

          <div className='btn'>
            <div className='cancel-btn'>
              <Button
                onClick={() => navigate(-1)}
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
                Cancel
              </Button>

            </div>

            <div className='save-btn'>
              <Button
                // type="submit"
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

export default Sector1form