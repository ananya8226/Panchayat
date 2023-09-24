import { useTheme } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react';



const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 224,
            width: 250,
        },
    },
};

function FilterComponent({ options, label, width, }) {

    const theme = useTheme();
    const [optionName, setoptionName] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value, "kjsbfjksfjkscjksdcnjsd");
        setoptionName(event.target.value.blockName);
    };


    function getStyles(option, optionName, theme) {
        return {
            fontWeight:
                optionName.indexOf(option) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    return (
        <>

            <FormControl sx={{ m: 1, width: { width } }} size='small'>
                <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={optionName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Filter" />}
                    MenuProps={MenuProps}
                >
                    {options &&
                        options.map((option, index) => (
                            <MenuItem
                                key={option.id}
                                id={option.id}
                                value={option}
                                // style={getStyles(option.blockName, optionName, theme)}
                            >
                                {option.blockName}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default FilterComponent