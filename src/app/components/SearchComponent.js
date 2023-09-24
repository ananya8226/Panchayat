import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


function SearchComponent() {
  return (
    <div>
        <FormControl fullWidth sx={{ m: 1, width: '30ch' }} size='small' variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder='Search'
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
    </div>
  )
}

export default SearchComponent