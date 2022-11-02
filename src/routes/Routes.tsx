/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
// import DashboardLayout from '../Layouts/Dashboard/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound/NotFound'
import Steps from '../pages/Steps/Steps'

export default function Routes(): ReactNode {
    return useRoutes([
        // {
        //     path: '/dashboard',
        //     element: <DashboardLayout />,
        //     children: [
        //         {
        //             path: '/',
        //             element: <Dashboard />,
        //         },
        //     ],
        // },
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Steps />,
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
