import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('uppercase')
    setText(text.toUpperCase())
  }
  const handleLoClick = () => {
    console.log('uppercase')
    setText(text.toLowerCase())
  }
  const handleOnChange = (event) => {
    console.log("inside onchange")
    setText(event.target.value)
    console.log(text)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            placeholder="Enter text here"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      </div>
      <div className="container">
        <h1>Word count</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  );
}
