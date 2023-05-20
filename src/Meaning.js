import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  let synonyms =
    props.meaning.synonyms && props.meaning.synonyms.length > 0
      ? props.meaning.synonyms.join(", ")
      : null;

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p className="example">Example: {props.meaning.example}</p>
      {synonyms && <span>Similar: {synonyms}</span>}
      {!synonyms && <div>No synonyms found</div>}
    </div>
  );
}
