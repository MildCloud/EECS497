import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Login from "../components/Login";

function RootLayout() {
    const [login, setLogin] = useState(false);
    if (!login) {
        return <Login setLogin={setLogin} />;
    }
    return (
        <>
            <MainHeader/>
            <Outlet />
        </>
    );
}

export default RootLayout;
