import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'

const CountryDetails = () => {
    const params = useParams()
    return (
        <div>
            {params.countryName}
            <Typography variant='h4' sx={{textAlign: 'center', mt: 5, color: '#ffffff'}}>Another Page</Typography>
        </div>
    )
}

export default CountryDetails
