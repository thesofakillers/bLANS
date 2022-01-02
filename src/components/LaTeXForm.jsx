import React, { useState } from "react";

function convertLatex(sourceLatex) {
  // first, convert $$...$$ to $$$ $$$
  let convertedLatex = sourceLatex.replace(
    /\$\$(.|\n)+?\$\$/g,
    // replace linebreaks with spaces and $$ with $$$
    (match) => match.replace(/\n/g, " ").replace(/\$\$/g, "$$$$$$")
  );
  // then, convert $...$ to $$...$$
  convertedLatex = convertedLatex.replace(
    /([^$]\$(?!\$).*?\$)|(\$\n.+\n\$)/g,
    // replace linebreaks with spaces and $ with $$
    (match) => match.replace(/\n/g, " ").replace(/\$/g, "$$$$")
  );
  return convertedLatex;
}

function LaTeXForm() {
  const [sourceLatex, setSourceLatex] = useState("");
  const [targetLatex, setTargetLatex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let convertedLatex = convertLatex(sourceLatex);
    setTargetLatex(convertedLatex);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="srclatex">
        <h2>Source LaTeX</h2>
        <textarea
          name="srclatex"
          id="srclatex"
          value={sourceLatex}
          onChange={(e) => setSourceLatex(e.target.value)}
        />
      </label>
      <label htmlFor="tgtlatex">
        <h2>Target LaTeX</h2>
        <textarea name="tgtlatex" id="tgtlatex" value={targetLatex} readOnly />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LaTeXForm;
