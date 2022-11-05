import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "../styles/cover.module.css";
import Button from "@mui/material/Button";
import DescriptionAlerts from "../components/Error";
import CheckboxList from "../components/Output";

export default function Content() {
  const [show, setShow] = React.useState(false);
  const handleSubmit = () => {
    setShow(!show);
  };
  return (
    <div class="py-16 bg-gradient-to-r from-cyan-100  to-rose-100 text-center grid place-items-center">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={style.parallaxSection}>
          <br />
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
            <br />
            <Button
              variant="outlined"
              align="center"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </center>
          <br />
          {show && <DescriptionAlerts />}
          <br />
          {!show && <CheckboxList />}
        </div>
      </Box>
    </div>
  );
}
