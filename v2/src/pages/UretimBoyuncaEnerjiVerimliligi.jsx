import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import useSusCall from '../hooks/useSustainabilityCall'
import { Box, Typography } from '@mui/material'
import UretimBoyuncaEnerjiVerimliligi_Table from '../components/tables/UretimBoyuncaEnerjiVerimliligi_Table'



const UretimBoyuncaEnerjiVerimliligi = () => {

  const { sustainabilityData,loading } = useSelector((state) => state.sustainability)

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
            <UretimBoyuncaEnerjiVerimliligi_Table sustainabilityData={sustainabilityData} />
        }

      </Box>

    </div>
  )
}

export default UretimBoyuncaEnerjiVerimliligi