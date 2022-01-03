import React from "react";

export const Footer = () => {
  return (
    <footer className="px-5 pb-2">
      <div className="text-right text-xs">
        <div>
          Created with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by{" "}
          <a
            className="text-blue-500 hover:text-ans-purple"
            href="https://giuliostarace.com"
            target="_blank"
            rel="noreferrer"
          >
            Giulio Starace
          </a>
        </div>
        <div>
          Source code on{" "}
          <a
            className="text-blue-500 hover:text-ans-purple"
            href="https://github.com/thesofakillers/bLANS"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
