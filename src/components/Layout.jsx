import React from "react";
import { Helmet } from "react-helmet";
import Seo from "./Seo";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const mainClassNames = ["column", "is-offset-1-mobile", "is-narrow-tablet"];
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
        />
      </Helmet>
      <Seo />
      <div className="main">
        <div className={mainClassNames.join(" ")}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
