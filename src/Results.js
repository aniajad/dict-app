import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        {" "}
        <h1>{props.result.word}</h1>
        <h3>[{props.result.phonetic}]</h3>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div>
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
