import React from "react";
import Head from "next/head";
import Nav from "./nav";

function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.PageTitle}</title>
                <meta name="description" content={props.PageDesc} />
            </Head>
            <div className="relative w-full min-h-screen bg-white dark:bg-bg_dark">
                <div className="py-5">
                    <h1 className="text-xl font-bold text-main dark:text-light_secondary">
                        {props.title}
                    </h1>
                </div>
                <div className="py-10">{props.children}</div>
            </div>
            <Nav></Nav>
        </>
    );
}

export default Layout;
