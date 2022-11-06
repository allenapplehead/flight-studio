import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "../styles/cover.module.css";
import Button from "@mui/material/Button";
import DescriptionAlerts from "../components/Error";
import CheckboxList from "../components/Output";
import axios from "axios";

export default function Content() {
  const [show, setShow] = React.useState(false);
  const [string, setString] = React.useState('');
  const [airportInfo, setAirportInfo] = React.useState({});

  const handleChange = event => {
    setString(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleSubmit = () => {
    console.log("Start fetching");
    // setShow(!show);
    fetch("http://localhost:5432/getInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user-text": string,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("end fetching");
        console.log(data);
        setAirportInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-100  to-rose-100">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "130ch" },
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
              name="outlined-textarea"
              onChange={handleChange}
              value={string}
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
