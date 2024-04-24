import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { urls } from '../utils/urls';
import { Dashboard } from '../pages/dashboard';
import { CountryList, CountryDetail } from '../pages/countries';

const rootRouter = createBrowserRouter([
    {
        path: urls.landing,
        element: <Dashboard />,
    }, 
    {
        path: urls.country_list,
        element: <CountryList />,
    },
    {
        path: urls.country_detail,
        element: <CountryDetail />,
    },
]);

export default rootRouter;
