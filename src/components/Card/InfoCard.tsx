import { Typography } from '@mui/material'
import React from 'react'
import Card from './Card'

interface IProps {
    icon: string
    title: string
    description: string
    color: string
}

const InfoCard = ({ icon, title, description, color }: IProps): ReactNode => {
    return (
        <Card sx={{ position: 'relative', backgroundColor: color }}>
            <Typography variant="body2"> {title}</Typography>
            <Typography variant="subtitle2" sx={{ width: '70%' }}>
                {description}
            </Typography>
            <img
                src={icon}
                alt="icon"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 5,
                    opacity: '0.5',
                }}
                width="44px"
            />
        </Card>
    )
}

export default InfoCard
