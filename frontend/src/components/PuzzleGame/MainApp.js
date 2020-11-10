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
        <h1 className='title'>React sliding puzzle</h1>
        <h4>Choose Image</h4>
        <img className='puzzle-game-image' src="https://i.pinimg.com/736x/09/9c/17/099c17ece56ebccd3289f26946c89c67.jpg"/>
        <img className='puzzle-game-image' src="https://i.ebayimg.com/images/g/H1MAAOSwcHRdPFKt/s-l300.jpg"/> <br/><br/>
        <input value={imgUrl} onChange={handleImageChange} />
        <Board imgUrl={imgUrl} />
      </div>
    );
  }
  
  export default MainApp;