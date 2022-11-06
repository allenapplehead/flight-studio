import React, { useState } from "react";
import axios from "axios";
export default function Home() {
  const [profileData, setProfileData] = useState(null);
  function getData() {
    axios({
      method: "GET",
      url: "/",
    })
      .then((response) => {
        console.log("GOES ONE!");
        const res = response.data;
        console.log(res);
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        console.log("GOES TWO!");
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* new line start*/}
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {profileData && (
          <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About me: {profileData.about_me}</p>
          </div>
        )}
        {/* end of new line */}
      </header>
    </div>
  );
}
