import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        {" "}
        <h1 className="results-h1">{props.result.word}</h1>
        <h3 className="results-h2">[{props.result.phonetic}]</h3>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
