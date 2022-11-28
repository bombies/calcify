import React from "react";
import Head from "next/head";
import {montserrat} from "../utils/Fonts";

interface Props extends React.PropsWithChildren {
    title?: string,
}

const Layout = (props: Props) => {
    return (
        <>
            <Head>
                <title>
                    {`Calcify${` - ${props.title}` || ''}`}
                </title>
            </Head>
            <main className={`h-full ${montserrat.variable} font-sans`}>
                { props.children }
            </main>
        </>
    )
}

export default Layout;