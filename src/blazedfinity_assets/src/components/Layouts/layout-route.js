import React from "react";
import  Layout from "./Layout";


export function LayoutRoute({ children }) {
    return (
            <Layout>
                {children}
            </Layout>
    );
}


