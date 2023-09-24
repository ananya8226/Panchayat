import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sector1form from '../modules/admin/Sector1form';
import Sector2form from '../modules/admin/Sector2form';
import Sector3form from '../modules/admin/Sector3form';
import Sector4form from '../modules/admin/Sector4form';
import Sector5form from '../modules/admin/Sector5form';
import Sector6form from '../modules/admin/Sector6form';
import Sector7form from '../modules/admin/Sector7form';
import Sector8form from '../modules/admin/Sector8form';
import Sector9form from '../modules/admin/Sector9form';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/stepperForm.scss';

const steps = ['Agriculture & allied sectors', 'Health & nutritions', 'Education', 'Rural development & sanitation ',
  'Individual beneficiary schemes', 'Skill development & employment', 'Basic infrastructure', 'Environment', 'Governance'];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state?.myFormData;
  const isDraft = location?.state?.isDraft;
  const Draft = typeof isDraft === 'undefined' ? true : isDraft;
  // const Draft= true;

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
      setActiveStep(newActiveStep); 
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '98%', margin: '4rem 1rem' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {
              activeStep === 0 ? <Sector1form setActiveStep={setActiveStep} sectorData={data?.[0]} isDraft={Draft}/> : activeStep === 1 ? <Sector2form setActiveStep={setActiveStep} sectorData={data?.[1]} isDraft={Draft}/> : activeStep === 2 ? <Sector3form setActiveStep={setActiveStep} sectorData={data?.[2]} isDraft={Draft}/> : activeStep === 3 ? <Sector4form setActiveStep={setActiveStep} sectorData={data?.[3]} isDraft={Draft}/>
                : activeStep === 4 ? <Sector5form setActiveStep={setActiveStep} sectorData={data?.[4]} isDraft={Draft}/> : activeStep === 5 ? <Sector6form setActiveStep={setActiveStep} sectorData={data?.[5]} isDraft={Draft}/> : activeStep === 6 ? <Sector7form setActiveStep={setActiveStep} sectorData={data?.[6]} isDraft={Draft}/> : activeStep === 7 ? <Sector8form setActiveStep={setActiveStep} sectorData={data?.[7]} isDraft={Draft}/>
                  : activeStep === 8 ? <Sector9form setActiveStep={setActiveStep} sectorData={data?.[8]} isDraft={Draft}/>
                    : null
            }

            {/* <div className='btn'>
              <div className='cancel-btn'>
                <Button
                  onClick={handleBack}
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
                    background: "#00695d",
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
            </div> */}

            {/*
             <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box> */}
            
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
