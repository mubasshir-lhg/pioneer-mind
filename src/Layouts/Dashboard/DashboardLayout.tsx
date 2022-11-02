import React from 'react'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280,
    },
}))

const DashboardLayoutBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    [theme.breakpoints.up('lg')]: {
        padding: 40,
    },
}))

const DashboardLayout = (): ReactNode => {
    return (
        <DashboardLayoutRoot>
            <DashboardLayoutBox>
                <Outlet />
            </DashboardLayoutBox>
        </DashboardLayoutRoot>
    )
}

export default DashboardLayout
