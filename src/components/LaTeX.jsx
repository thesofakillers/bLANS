import React from "react";

function LaTeX(props) {
  const { humanLabel, compLabel, latexValue, placeholder } = props;
  console.log(humanLabel);
  return (
    <label for="normlatex">
      <h2>{humanLabel}</h2>
      <textarea
        name={compLabel}
        id={compLabel}
        defaultValue={placeholder ? placeholder : ""}
        value={latexValue}
      />
    </label>
  );
}

export default LaTeX;
