import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      {props.meaning.example && (
        <p className="example">"{props.meaning.example}"</p>
      )}
      {!props.meaning.example && (
        <div className="Meaning-noexamples">No examples found</div>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
      <div className="Meaning-separator"></div>
    </div>
  );
}
