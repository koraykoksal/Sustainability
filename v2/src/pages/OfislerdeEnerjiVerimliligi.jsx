import React from 'react'
import useSusCall from '../hooks/useSustainabilityCall'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import OfislerdeEnerjiVerimliligi_Table from '../components/tables/OfislerdeEnerjiVerimliligi_Table'

const OfislerdeEnerjiVerimliligi = () => {

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
            <div className='loader' style={{margin:'auto',marginTop:100}}></div>
            :
            <OfislerdeEnerjiVerimliligi_Table sustainabilityData={sustainabilityData} />
        }

      </Box>

    </div>
  )
}

export default OfislerdeEnerjiVerimliligi