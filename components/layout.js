import React from "react";
import Head from "next/head";
import Nav from "./nav";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.PageTitle}</title>
        <meta name="description" content={props.PageDesc} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative w-full min-h-screen bg-white dark:bg-bg_dark">
        <div className="py-5">
          <h1 className="text-xl font-bold text-main dark:text-light_secondary">
            {props.title}
          </h1>
        </div>
        <div>{props.children}</div>
      </div>
      <Nav></Nav>
    </>
  );
}

export default Layout;
