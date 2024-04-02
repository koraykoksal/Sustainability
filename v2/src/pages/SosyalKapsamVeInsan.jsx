import React from 'react'
import useSusCall from '../hooks/useSustainabilityCall'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import SosyalKapsamVeInsan_Table from '../components/tables/SosyalKapsamVeInsan_Table'
import { Box, Typography } from '@mui/material'
import Delete from '../components/modals/Delete'
import View from '../components/modals/View'

const SosyalKapsamVeInsan = () => {

  const { sustainabilityData, loading } = useSelector((state) => state.sustainability)
  const [data, setData] = useState([])
  const { state } = useLocation()
  const { get_DataFromFirebase } = useSusCall()


  const [info, setInfo] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    tel: "",
    birim: "",
    userType: "",
    bonnaUsr: "",
    createdDate: "",
    title: "",
    bonnaUsr: "",
    userType: ""
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const [openDel, setOpenDel] = useState(false)
  const handleOpenDel = () => setOpenDel(true)
  const handleCloseDel = () => setOpenDel(false)


  useEffect(() => {
    get_DataFromFirebase(state.title)
  }, [])

  useEffect(() => {

    //!  "Cannot assign to read only property '0' of object '[object Array]'"  hatası alındığında dizinin değiştirilemez olduğu anlamına gelir. Mevcut dizinin kopyasını oluşturarak işlem yapılır.
    const sortData = [...sustainabilityData]

    // Tarih stringlerini Date objelerine dönüştürerek sıralama
    sortData.sort((a, b) => {
      // Tarih formatını ayırma ve yeni Date objesi oluşturma
      const datePartsA = a.createdDate.split(' ')[0].split('-');
      const timePartsA = a.createdDate.split(' ')[1].split(':');
      const dateA = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0], timePartsA[0], timePartsA[1]);

      const datePartsB = b.createdDate.split(' ')[0].split('-');
      const timePartsB = b.createdDate.split(' ')[1].split(':');
      const dateB = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0], timePartsB[0], timePartsB[1]);

      return dateB - dateA;
    });

    setData(sortData)

  }, [sustainabilityData])

  return (
    <div>

      <Box sx={{ py: 15 }}>

        <Typography align='center' letterSpacing={3} fontWeight={700}>{state.title}</Typography>


        {
          loading ?
            <div className='loader' style={{ margin: 'auto', marginTop: 100 }}></div>
            :
            <SosyalKapsamVeInsan_Table data={data} setInfo={setInfo} handleOpenDel={handleOpenDel} handleOpen={handleOpen}/>
        }

      </Box>

      <Delete info={info} openDel={openDel} handleCloseDel={handleCloseDel}/>
      <View info={info} open={open} handleClose={handleClose}/>

    </div>
  )
}

export default SosyalKapsamVeInsan