import React, { useState } from "react";
import { Layout } from "../components/Layout";
import LaTeXForm from "../components/LaTeXForm";

const Index = () => {
  return (
    <Layout>
      <>
        <h1>bLANS: better LaTeX on ANS</h1>
        <LaTeXForm />
      </>
    </Layout>
  );
};

export default Index;
