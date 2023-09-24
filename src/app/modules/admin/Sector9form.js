import React from 'react';
import { Button, Container, Box } from '@mui/material';
import '../../../styles/myform.scss';
import { Link, useNavigate } from 'react-router-dom';
import IndicatorForm from '../../components/IndicatorForm';
import ReactModal from 'react-modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { POST } from '../../../services/api/api';

function Sector9form({setActiveStep}) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

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
  const [indicator18, setIndicator18] = useState({ indicatorId: 18 });
  const [indicator19, setIndicator19] = useState({ indicatorId: 19 });
  const [indicator20, setIndicator20] = useState({ indicatorId: 20 });
  const [indicator21, setIndicator21] = useState({ indicatorId: 21 });
  const [indicator22, setIndicator22] = useState({ indicatorId: 22 });
  const [indicator23, setIndicator23] = useState({ indicatorId: 23 });
  const [indicator24, setIndicator24] = useState({ indicatorId: 24 });
  const [indicator25, setIndicator25] = useState({ indicatorId: 25 });
  const [indicator26, setIndicator26] = useState({ indicatorId: 26 });
  const [indicator27, setIndicator27] = useState({ indicatorId: 27 });
  const [indicator28, setIndicator28] = useState({ indicatorId: 28 });
  const [indicator29, setIndicator29] = useState({ indicatorId: 29 });
  const [indicator30, setIndicator30] = useState({ indicatorId: 30 });
  const [indicator31, setIndicator31] = useState({ indicatorId: 31 });
  const [indicator32, setIndicator32] = useState({ indicatorId: 32 });
  const [indicator33, setIndicator33] = useState({ indicatorId: 33 });


  const [saveMessage, setSaveMessage] = useState("Form Saved Successfully");
  const [submitMessage, setSubmitMessage] = useState("Form Submitted Successfully");

  const handleNext = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11, indicator12,
       indicator13,  indicator14,  indicator15,  indicator16,  indicator17, indicator18, indicator19, indicator20, indicator21, indicator22, indicator23, indicator24, indicator25, indicator26, indicator27,
       indicator28,  indicator29,  indicator30,  indicator31, indicator32,  indicator33];
    const payload = {
      lastFilledFormNo: 9,
      sectorId: 9,
      indicatorData: indicatorData,
      draft: true,
      // panchayatId: 1,
    }

    const res = await POST("panchayat/fill-form", payload);
    // console.log(res.data.message, "api response ");

    setSaveMessage(res.data.message);
    setIsOpen(true);
  }

  const handleSubmit = async () => {
    const indicatorData = [indicator1, indicator2, indicator3, indicator4, indicator5, indicator6, indicator7, indicator8, indicator9, indicator10, indicator11, indicator12,
       indicator13,  indicator14,  indicator15,  indicator16,  indicator17, indicator18, indicator19, indicator20, indicator21, indicator22, indicator23, indicator24, indicator25, indicator26, indicator27,
       indicator28,  indicator29,  indicator30,  indicator31, indicator32,  indicator33];
    const payload = {
      lastFilledFormNo: 9,
      sectorId: 9,
      indicatorData: indicatorData,
      draft: false,
      // panchayatId: 1,
    }

    const res = await POST("panchayat/fill-form", payload);
    // console.log(res.data.message, "api response ");
    setSubmitMessage(res?.data?.message);

    setIsOpen1(true);
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
            <p>Percentage of population covered under Aadhaar </p>
            <IndicatorForm setIndicator={setIndicator1}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of population provided e- shram cards</p>
            <IndicatorForm setIndicator={setIndicator2}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of land pass books issued </p>
            <IndicatorForm setIndicator={setIndicator3}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of grievances disposed </p>
            <IndicatorForm setIndicator={setIndicator4}/>

          </div>
          <div className='sector-form'>

            <p>Percentage of land mutations done</p>
            <IndicatorForm setIndicator={setIndicator5}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of online services being utilized</p>
            <IndicatorForm setIndicator={setIndicator6}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of Monday Gram Sabha meetings held</p>
            <IndicatorForm setIndicator={setIndicator7}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of Gram Sabhas Panchayat being held through JK Panchayat Portal</p>
            <IndicatorForm setIndicator={setIndicator8}/>
          </div>
          <div className='sector-form'>
            <p>Percentage coverage of Domicile Certificates</p>
            <IndicatorForm setIndicator={setIndicator9}/>
          </div>
          <div className='sector-form'>
            <p>Percentage rejuvenation/completion of water bodies under Amrit Sarovar</p>
            <IndicatorForm setIndicator={setIndicator10}/>
          </div>
          <div className='sector-form'>
            <p>Whether monthly awareness camps organized under various schemes</p>
            <IndicatorForm setIndicator={setIndicator11}/>
          </div>
          <div className='sector-form'>
            <p>Whether Pani Smities constituted and meeting conducted regularly</p>
            <IndicatorForm setIndicator={setIndicator12}/>
          </div>
          <div className='sector-form'>
            <p>Whether Gram Panchayat aware about Rapid AssessmentSystem (RAS) Portal</p>
            <IndicatorForm setIndicator={setIndicator13}/>
          </div>
          <div className='sector-form'>
            <p>Whether Gram Panchayat aware about JK Panchayat Portal</p>
            <IndicatorForm setIndicator={setIndicator14}/>
          </div>
          <div className='sector-form'>
            <p>Whether in the panchayat awareness about Jan Nigrani Portal available</p>
            <IndicatorForm setIndicator={setIndicator15}/>
          </div>
          <div className='sector-form'>
            <p>Availability of Aadhaar Enabled Payment (AEP) system in the Panchayat</p>
            <IndicatorForm setIndicator={setIndicator16}/>
          </div>
          <div className='sector-form'>
            <p>Whether the Disaster Management Plan framed/developed</p>
            <IndicatorForm setIndicator={setIndicator17}/>
          </div>
          <div className='sector-form'>
            <p>Whether the list of beneficiaries related to the schemes/programmes displayed on Gram Panchayat Wall</p>
            <IndicatorForm setIndicator={setIndicator18}/>
          </div>
          <div className='sector-form'>
            <p>Whether the activities approved under Halqa Panchayat Development Plan displayed on the Gram Panchayat Wall</p>
            <IndicatorForm setIndicator={setIndicator19}/>
          </div>
          <div className='sector-form'>
            <p>Whether camps have been organized for awareness on digital literacy</p>
            <IndicatorForm setIndicator={setIndicator20}/>
          </div>
          <div className='sector-form'>
            <p>Cultural events conducted</p>
            <IndicatorForm setIndicator={setIndicator21}/>
          </div>
          <div className='sector-form'>
            <p>Whether Youth Club facility is available</p>
            <IndicatorForm setIndicator={setIndicator22}/>
          </div>
          <div className='sector-form'>
            <p>Whether Kissan Awareness Camps are held</p>
            <IndicatorForm setIndicator={setIndicator23}/>
          </div>
          <div className='sector-form'>
            <p>Whether PDS store is available</p>
            <IndicatorForm setIndicator={setIndicator24}/>
          </div>
          <div className='sector-form'>
            <p>Whether Jan Ashudhi Centre is available or not</p>
            <IndicatorForm setIndicator={setIndicator25}/>
          </div>
          <div className='sector-form'>
            <p>Whether Rain Water Harvesting techniques adopted</p>
            <IndicatorForm setIndicator={setIndicator26}/>
          </div>
          <div className='sector-form'>
            <p>Percentage of encroached land vacated/ retrieved (in kanals)</p>
            <IndicatorForm setIndicator={setIndicator27}/>
          </div>
          <div className='sector-form'>
            <p>Whether CSC centers functional</p>
            <IndicatorForm setIndicator={setIndicator28}/>
          </div>
          <div className='sector-form'>
            <p>Whether demand for wage employment saturated</p>
            <IndicatorForm setIndicator={setIndicator29}/>
          </div>
          <div className='sector-form'>
            <p>Whether demand for self employment saturated</p>
            <IndicatorForm setIndicator={setIndicator30}/>
          </div>
          <div className='sector-form'>
            <p>Whether sports events held</p>
            <IndicatorForm setIndicator={setIndicator31}/>
          </div>
          <div className='sector-form'>
            <p>Whether people are aware about Jan Bhagidhari Portal.</p>
            <IndicatorForm setIndicator={setIndicator32}/>
          </div>
          <div className='sector-form'>
            <p>Whether Cooperative Societies are available in the Panchayat</p>
            <IndicatorForm setIndicator={setIndicator33}/>
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
                  textTransform: "lowercase ! important",
                }}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
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
              {saveMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> setIsOpen(false)}><Link className='modal-link' to="/panchayatDashboard" >OK </Link></Button>
            </DialogActions>
          </Dialog>
            </div>

            <div className='save-btn'>
              <Button
                onClick={handleSubmit}
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
                Submit
              </Button>
              {/* <ReactModal
                isOpen={isOpen1}
              >
                <Container className='form-container'>
                  <Box className='tickMark'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                      <path d="M23 45C31.8366 45 39 37.8366 39 29C39 20.1634 31.8366 13 23 13C14.1634 13 7 20.1634 7 29C7 37.8366 14.1634 45 23 45Z" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16 29.6L21.25 35L30 26" stroke="#607163" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Box>

                  <Box className='modal-text'>
                   {submitMessage}
                  </Box>

                  <Box className='modal-btn'>
                    <Button className="modal-btn" variant="contained" style={{ width: '4rem' }} onClick={() => setIsOpen1(false)}>OK </Button>
                  </Box>
                </Container>
              </ReactModal> */}

              <Dialog
            open={isOpen1}
            onClose={()=> setIsOpen1(false)}
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
              {submitMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> setIsOpen1(false)}><Link className='modal-link' to="/panchayatDashboard" >OK </Link></Button>
            </DialogActions>
          </Dialog>
            </div>


          </div>
        </form>
      </div>
    </div>
  )
}

export default Sector9form