import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/Banner.png'
import Card from '../../components/Card/Card'
import icon1 from '../../assets/Vector.png'
import icon2 from '../../assets/Vector-1.png'
import icon3 from '../../assets/Vector-2.png'
import InfoCard from '../../components/Card/InfoCard'
import { DynamicTable } from '../../components/Table/DynamicTable'
import { columns } from '../../column/dashboard'

const InfoData = [
    {
        icon: icon1,
        title: 'Article',
        description: '8 ways Manager can support Employees',
        color: '#FFFFF3',
    },
    {
        icon: icon2,
        title: 'Article',
        description: '8 ways Manager can support Employees',
        color: '#E9FAF5',
    },
    {
        icon: icon3,
        title: 'Article',
        description: '8 ways Manager can support Employees',
        color: '#E9ECFA',
    },
]

const Dashboard = (): ReactNode => {
    const data = [
        {
            id: '1',
            date: '02-11-2022',
            serviceType: 'Chauffer',
            sessionType: 'Therapist session',
            approved: 'True',
            driverType: 'Personal',
            ratings: 4.5,
            status: 'block',
        },
        {
            id: '2',
            date: '02-11-2022',
            serviceType: 'Logistic',
            sessionType: 'Therapist session',
            approved: 'False',
            driverType: 'Corporate',
            ratings: 4.5,
            status: 'unblock',
        },
        {
            id: '3',
            date: '02-11-2022',
            serviceType: 'Tow truck',
            sessionType: 'Therapist session',
            approved: 'True',
            driverType: 'Armed',
            ratings: 4.5,
            status: 'block',
        },
        {
            id: '4',
            date: '02-11-2022',
            serviceType: 'Tow truck',
            sessionType: 'Therapist session',
            approved: 'False',
            driverType: 'Corporate',
            ratings: 4.5,
            status: 'unblock',
        },
        {
            id: '5',
            date: '02-11-2022',
            serviceType: 'Tow truck',
            sessionType: 'Therapist session',
            approved: 'True',
            driverType: 'Personal',
            ratings: 4.5,
            status: 'block',
        },
    ]
    return (
        <>
            <Navbar />
            <Box sx={{ mt: '64px', position: 'relative' }}>
                <img src={banner} alt="banner" width="100%" />
                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        top: '60px',
                        left: '60px',
                        color: '#fff',
                    }}
                >
                    Welcome back , Admin 👏
                </Typography>
                <Card
                    sx={{
                        position: 'absolute',
                        bottom: '-120px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        gap={2}
                    >
                        {InfoData.map((item) => (
                            <InfoCard {...item} />
                        ))}
                    </Stack>
                </Card>
            </Box>

            <Grid container mt={10} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                    {useMemo(
                        () => (
                            <DynamicTable
                                isLoading={false}
                                columns={columns()}
                                data={data}
                            />
                        ),
                        [data]
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
