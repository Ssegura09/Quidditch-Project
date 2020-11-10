import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"


function MainApp() {
    const [imgUrl, setImgUrl] = useState("")
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has("img")) {
        setImgUrl(urlParams.get("img"))
      }
    }, [])
  
    const handleImageChange = (e) => {
      setImgUrl(e.target.value)
      window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
    }
  
    return (
      <div className="App">
        <Board imgUrl={'https://images.ctfassets.net/usf1vwtuqyxm/5PhTbeywLbYgMoiWen2qqT/2239de4d745d2191ecdad23a8ed07ded/hp-f1-hogwarts-boats-firstyear-square.jpg?fm=jpg'} />

      </div>
    );
  }
  
  export default MainApp;