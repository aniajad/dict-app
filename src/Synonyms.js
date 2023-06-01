import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {" "}
        <span>Similar: </span>
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="synonym-item">
              {" "}
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
