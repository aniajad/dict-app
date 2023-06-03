import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [image, setImage] = useState(null);

  function handleDictionary(response) {
    setResult(response.data);
  }

  function handleImages(response) {
    setImage(response.data.photos);
  }

  function search() {
    let apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionary);

    let imgApiKey = "d6adb6d48b0afcb13103tf940oab4e26";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImages);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>Search for a word</h3>
          <form onSubmit={handleSubmit} className="input-group">
            <input
              type="search"
              className="form-control"
              autoFocus={true}
              onChange={updateKeywordChange}
            />
          </form>
        </section>
        <Results result={result} />
        <Images image={image} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
