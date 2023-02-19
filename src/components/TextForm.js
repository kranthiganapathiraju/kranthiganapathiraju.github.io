import React, {useState} from "react";

export default function TextForm(props) {
  const [text,setText] = useState(0);
  return (
    <div className="mb ">
      <h1>{props.heading}</h1>
      <div>
        <textarea
          className="form-control"
          id="myBox"
          
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary" onhandle=''>Convert to Upperase</button>
    </div>
  );
}
