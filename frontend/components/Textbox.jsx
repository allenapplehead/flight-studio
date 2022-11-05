import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from "../styles/cover.module.css";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={style.parallaxSection}>
        <br/>
        <center>
          <h4>Let us find the best flights for you</h4>
        </center>
        <center>
          <TextField
            id="outlined-textarea"
            label="Where do you want to go today?"
            placeholder="e.g. I want to fly from Toronto to New York under $500 and get there by midnight November 7th 2022 for 2 adults"
            multiline
            rows={3}
            margin="normal"
          />
        </center>
        {/* <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        /> */}
      </div>
    </Box>
  );
}