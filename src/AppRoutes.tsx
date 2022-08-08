import React from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import { ROUTES } from "./modules/core/models/enums/core.enums";
import Home from "./modules/home/Home";

export const AppRoutes = () => {
    const { t } = useTranslation();
    const loaderSuspense = <React.Fragment></React.Fragment>;


    return (

        <React.Suspense fallback={loaderSuspense}>
            <Routes>
                {/* <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route> */}
                {/* <Route path={ROUTES.SIGN_UP} element={<SignUpPage />}></Route> */}

                <Route path={ROUTES.BASE} element={<Home />}></Route>


            </Routes>
        </React.Suspense>

    );
};
