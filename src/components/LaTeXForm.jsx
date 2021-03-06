import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const startSourceLatex = `Here is some markup you would normally write in something like VSCode. 
In-line equations with single dollar signs, $\\frac{1}{2}$, and display equations 
with double dollar signs and line breaks, 
$$
\\frac{1}{2}.
$$
ANS supports slightly different syntax, press the convert button to see the result.

You can edit this textarea as you please.
`;

const buttonSytles = [
  "cursor-pointer",
  "p-2",
  "rounded-md",
  "hover:brightness-105",
  "transition",
  "ease-in-out",
  "focus:scale-90",
];

const textareaStyles = [
  "text-xs",
  "w-full",
  "px-3",
  "py-1.5",
  "min-h-[10rem]",
  "font-normal",
  "bg-white",
  "bg-clip-padding",
  "border",
  "border-solid",
  "border-gray-300",
  "rounded",
  "transition",
  "ease-in-out",
  "m-0",
  "focus:text-gray-700",
  "focus:border-indigo-500",
  "focus:outline-ans-purple",
];

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
  const [sourceLatex, setSourceLatex] = useState(startSourceLatex);
  const [targetLatex, setTargetLatex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let convertedLatex = convertLatex(sourceLatex);
    setTargetLatex(convertedLatex);
  };

  return (
    <div className="ma-auto px-5 py-10 container mx-auto max-w-2xl">
      <form onSubmit={handleSubmit}>
        <label htmlFor="srclatex">
          <h2>Source LaTeX</h2>
          <textarea
            name="srclatex"
            id="srclatex"
            value={sourceLatex}
            onChange={(e) => setSourceLatex(e.target.value)}
            className={textareaStyles.join(" ")}
          />
        </label>
        <label htmlFor="tgtlatex">
          <h2>Target LaTeX</h2>
          <textarea
            name="tgtlatex"
            id="tgtlatex"
            value={targetLatex}
            readOnly
            className={textareaStyles.join(" ")}
          />
          <CopyToClipboard text={targetLatex}>
            <button
              className={[...buttonSytles, "bg-slate-200"].join(" ")}
              onClick={(e) => e.currentTarget.blur()}
            >
              Copy To Clipboard
            </button>
          </CopyToClipboard>
        </label>
        <button
          className={[...buttonSytles, "bg-ans-yellow", "float-right"].join(
            " "
          )}
        >
          Convert
        </button>
      </form>
    </div>
  );
}

export default LaTeXForm;
