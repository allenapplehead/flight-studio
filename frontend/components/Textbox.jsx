import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "../styles/cover.module.css";
import Button from "@mui/material/Button";
import DescriptionAlerts from "../components/Error";
import CheckboxList from "../components/Output";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircularProgress from "@mui/material/CircularProgress";

export default function Content() {
  const [show, setShow] = React.useState(true);
  const [string, setString] = React.useState("");
  const [airportInfo, setAirportInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setShow(false);
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
        setLoading(false);
        setShow(true);
        console.log("end fetching");
        console.log(data);
        setAirportInfo(data);
      })
      .catch((err) => {
        setLoading(false);
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
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="outlined"
                align="center"
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            )}
          </center>
          {show && (
            <div className="flex gap-5 mt-5 justify-center">
              <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-700"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z" />
                  </g>
                </svg>
                Tag
              </div>
              <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-red-700"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.254 10.47l-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 1 1-.776 2.898L4.14 11.937l.776-2.898.242.065.914 3.35-2.627-.703a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.914 3.351 5.096 1.366zM4 19h16v2H4v-2z" />
                  </g>
                </svg>
                Tag
              </div>
              <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                <CalendarMonthIcon className="fill-green-700" />
                Tag
              </div>
            </div>
          )}

          <br />
          {show && <DescriptionAlerts />}
          <br />
          {!show && <CheckboxList />}
        </div>
      </Box>
    </div>
  );
}
