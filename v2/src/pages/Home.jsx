import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { homeBgPattern } from '../styles/theme';
import { useNavigate } from "react-router-dom"
import { homePageStyle } from '../styles/globalStlye';
import { format } from "date-fns"
import omurboyu from "../assets/pics/omur-boyu.png"
import yarinadakalsin from "../assets/pics/yarinadakalsin.png"
import Who from '../components/modals/Who';
import { uid } from "uid";

export const Home = () => {

  function dateFormat() {
    const now = new Date();
    return format(now, 'dd-MM-yyyy HH:mm')
  }

  const [info, setInfo] = useState({
    id: uid(),
    name: "",
    surname: "",
    email: "",
    tel: "",
    birim: "",
    createdDate: dateFormat()
  })


  const [open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);


  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }



  return (

    <div style={homePageStyle}>


      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, height: '100%' }}>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', height: '100%' }}>

          {/* omur boyu */}
          <Box width={350} alignItems={'center'} display={'flex'}>
            <img src={omurboyu} width={'100%'} style={{ objectFit: 'cover' }} />
          </Box>

          {/* kendini tanıt */}
          <Box alignItems={'center'} display={'flex'}>

            <Button
              variant='contained'
              sx={{ width: '300px', m: 'auto', textTransform: 'none', letterSpacing: 2 }}
              onClick={HandleOpen}
            >
              Kendini Tanıt
            </Button>

          </Box>

          {/* yarına kalsın */}
          <Box width={350} alignItems={'center'} display={'flex'}>
            <img src={yarinadakalsin} width={'100%'} style={{ objectFit: 'cover' }} />
          </Box>

        </Box>

      </Box>


      {/* modal */}
      <Who open={open} HandleClose={HandleClose} info={info} handleChange={handleChange} />

    </div>

  )
}
