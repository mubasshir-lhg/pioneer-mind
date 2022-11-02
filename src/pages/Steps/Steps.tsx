import React, { useState } from 'react'
import { Box, Grid, Typography, Theme, Stack, MenuItem } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import infoIcon from '../../assets/Icon.png'
import SelectInput from '../../components/Input/SelectInput'
import Button from '../../components/Buttons/Button'

const gradientPrimary = 'linear-gradient(to right,#75EBC9 , #F7FE9D)'
const gradientSecondary = 'linear-gradient(to right,#221e39 , #292739)'

const tabs = [
    { id: 1, color: gradientPrimary },
    { id: 2, color: gradientPrimary },
    { id: 3, color: gradientPrimary },
    { id: 4, color: gradientSecondary },
    { id: 5, color: gradientSecondary },
    { id: 6, color: gradientSecondary },
]

const gendersList = [
    'Male',
    'Female',
    'Transgender',
    'Non-Binary/Gender-nonconfirming',
    'Prefer to self describe',
]

const Steps = (): ReactNode => {
    const [gender, setGender] = useState<string>('')
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>PioneerMind</title>
            </Helmet>
            <Grid
                container
                component="main"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                sx={{
                    height: '100vh',
                    p: (theme: Theme) => theme.spacing(2),
                    backgroundColor: '#191726',
                    color: 'white',
                }}
            >
                <Grid item xs={12} sm={6} md={5} lg={3}>
                    <Typography component="h1" variant="body1">
                        Getting to know you
                    </Typography>
                    <Stack
                        justifyContent="space-between"
                        direction="row"
                        gap={2}
                        py={2}
                    >
                        {tabs.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    background: item.color,
                                    height: 5,
                                    width: '100%',
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </Stack>
                    <Typography component="h1" variant="h4">
                        What gender do you identify with?
                        <Tooltip
                            title="Add description here about why you want to know this."
                            sx={{ backgroundColor: '#191726' }}
                        >
                            <img
                                src={infoIcon}
                                alt="info"
                                style={{ paddingLeft: '5px' }}
                            />
                        </Tooltip>
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <SelectInput
                            helperText="Please Select One"
                            margin="normal"
                            required
                            fullWidth
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                        >
                            {gendersList?.map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </SelectInput>
                        <Button
                            size="large"
                            variant="gradientPrimary"
                            fullWidth
                            sx={{
                                mt: 3,
                                mb: 2,
                            }}
                            onClick={() => navigate('/dashboard')}
                        >
                            Continue
                        </Button>

                        <Button
                            variant="basic"
                            startIcon={<KeyboardBackspaceIcon />}
                        >
                            Back
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Steps
