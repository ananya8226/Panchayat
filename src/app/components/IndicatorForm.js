import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import '../../styles/myform.scss';
import { useEffect } from 'react';

function IndicatorForm({ setIndicator, indicator, indicatorValue, isDraft }) {

  const [error, setError] = useState('');
  const [errorDeno, setErrorDeno] = useState('');

  useEffect(() => {
    setIndicator(indicatorValue);
  }, []);

  const handleChange = (event, name) => {
    const { value } = event.target;

    if (name == "numerator") {
      if (!value)
        setError('required*');
      else if (isNaN(value))
        setError('Numerator must be a number');
      else
        setError('');
    }

    else if (name == "denominator") {
      if (!value)
        setErrorDeno('required*');
      else if (isNaN(value))
        setErrorDeno('Denominator must be a number');
      else
        setErrorDeno('');
    }

    setIndicator({
      ...indicator,
      [name]: value,
    })
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-colm'>

          <label >
            Numerator
          </label>
          <p className='error'>{error}</p>
          {isDraft ?
            <TextField className='text-field' placeholder='No. of beneficiaries benefited' fullWidth type='text'
              variant="outlined" onChange={(event) => { handleChange(event, "numerator") }} name='numerator' value={indicator?.numerator} />
            : <TextField className='text-field' placeholder='No. of beneficiaries benefited' fullWidth
              variant="outlined" onChange={(event) => { handleChange(event, "numerator") }} name='numerator' type='text' value={indicator?.numerator} disabled />}

          <label>
            Unit
          </label>
          <TextField select className='text-field' fullWidth id="outlined-basic" variant="outlined" >
            <MenuItem key='1' value='1'>
              Percetage
            </MenuItem>
            <MenuItem key='2' value='2'>
              Ratio
            </MenuItem>
          </TextField>
          <label>
            SDG Mapping
          </label>
          <TextField className='text-field' type='text' fullWidth id="outlined-basic" variant="outlined" />
        </div>
        <div className='form-colm'>
          <label>
            Denominator
          </label>
          <p className='error'>{errorDeno}</p>
          {isDraft ?
            <TextField placeholder='Total no. of eligible beneficiaries' required='true' className='text-field' onChange={(event) => { handleChange(event, "denominator") }}
              fullWidth variant="outlined" name='denominator' value={indicator?.denominator} />
            :
            <TextField placeholder='Total no. of eligible beneficiaries' required='true' className='text-field' onChange={(event) => { handleChange(event, "denominator") }}
              fullWidth variant="outlined" name='denominator' value={indicator?.denominator} disabled />}

          <label>
            Data Source
          </label>
          <TextField className='text-field' fullWidth variant="outlined" />
        </div>
      </div>
    </>
  )
}

export default IndicatorForm