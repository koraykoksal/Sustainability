import React from 'react'
import useSusCall from '../hooks/useSustainabilityCall'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import SosyalKapsamVeInsan_Table from '../components/tables/SosyalKapsamVeInsan_Table'
import { Box, Typography } from '@mui/material'

const SosyalKapsamVeInsan = () => {

  const { sustainabilityData, loading } = useSelector((state) => state.sustainability)

  const { state } = useLocation()
  const { get_DataFromFirebase } = useSusCall()

  useEffect(() => {
    get_DataFromFirebase(state.title)
  }, [])

  return (
    <div>

      <Box sx={{ py: 10 }}>

        <Typography align='center' letterSpacing={3}>{state.title}</Typography>


        {
          loading ?
            <div className='loader' style={{ margin: 'auto', marginTop: 100 }}></div>
            :
            <SosyalKapsamVeInsan_Table sustainabilityData={sustainabilityData} />
        }

      </Box>

    </div>
  )
}

export default SosyalKapsamVeInsan