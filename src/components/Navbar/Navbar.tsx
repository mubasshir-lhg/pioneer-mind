import React, { useState } from 'react'
import { AppBar, Box, Stack } from '@mui/material'
import styled from '@emotion/styled'
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined'
import logoImg from '../../assets/Logo.png'
import AccountPopover from './AccountPopover'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#252238',
    boxShadow: theme.shadows[3],
    color: '#fff',
}))

const NavItems = ['Dashboard', 'Progress', 'Team']

const Navbar = (): ReactNode => {
    const [activeItem, setActiveItem] = useState(0)
    return (
        <DashboardNavbarRoot>
            <Box sx={{ px: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Box py={1}>
                        <img src={logoImg} alt="logo" />
                    </Box>
                    <Stack direction="row" alignItems="center" gap={2}>
                        {NavItems.map((item, index) => (
                            <Box
                                key={item}
                                sx={{
                                    color:
                                        activeItem === index
                                            ? 'action.active'
                                            : '#fff',
                                    borderBottom: (theme) =>
                                        `3px solid ${
                                            activeItem === index
                                                ? theme.palette.action.active
                                                : '#252238'
                                        }`,
                                    cursor: 'pointer',
                                    lineHeight: '65px',
                                    transition: 'all 0.4s ease',
                                }}
                                onClick={() => setActiveItem(index)}
                            >
                                {item}
                            </Box>
                        ))}
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={5} py={1}>
                        <Box
                            sx={{
                                borderLeft: '1px solid lightgrey',
                                borderRight: '1px solid lightgrey',
                                px: 2,
                            }}
                        >
                            <MarkChatUnreadOutlinedIcon />
                        </Box>
                        <AccountPopover />
                    </Stack>
                </Stack>
            </Box>
        </DashboardNavbarRoot>
    )
}

export default Navbar
