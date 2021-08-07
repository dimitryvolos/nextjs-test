import React from "react";
import A from "../components/A";
import Head from "next/head";

const MainContainer = ({ children, keywords, pageTitle }) => {
  return (
    <>
      <Head>
        <meta keywords={"test Next.jsx " + keywords}></meta>
        <title>{pageTitle}</title>
      </Head>
      <div className="navbar">
        <A text="Home" href={"/"}></A>
        <A text="Users" href={"/users"}></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
