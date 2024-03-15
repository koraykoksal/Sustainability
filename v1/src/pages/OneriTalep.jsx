import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { oneriKonusu, katkiKonusu } from '../helper/data';
import useFeedbackCall from '../hooks/useFeedbackCall';


const OneriTalep = () => {

  const {postFireData} = useFeedbackCall()

  const now = new Date()

  // Gün, Ay ve Yıl için değerleri al
  const day = String(now.getDate()).padStart(2, '0'); // Günü 2 basamaklı yap
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Ayı 2 basamaklı yap (0'dan başladığı için +1 ekliyoruz)
  const year = now.getFullYear();

  // Saat, Dakika ve Saniye için değerleri al
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // Düzenlenmiş tarih ve saati birleştir
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;



  const [info, setInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    topic: "",
    katkiKonusu: "",
    detail: "",
    datetime: formattedDate

  })

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    postFireData('oneri-talep',info)

    setInfo({
      name: "",
      surname: "",
      phone: "",
      email: "",
      topic: "",
      katkiKonusu: "",
      detail: "",
      datetime: formattedDate
    })

  }



  return (
    <div>

      <Typography align='center' color='#FFB534' p={3} fontWeight={700} fontSize={22}>Bonna Öneri & Talep</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, p: 2 }}>

        <form onSubmit={handleSubmit}>

          <Box sx={{ flexDirection: 'column', display: 'flex', gap: 3, p: 3 }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}>
              <TextField
                fullWidth
                required
                label='İsim'
                name='name'
                id='name'
                type='text'
                value={info.name}
                inputProps={{
                  maxLength: 50
                }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                label='Soyisim'
                name='surname'
                id='surname'
                type='text'
                value={info.surname}
                inputProps={{
                  maxLength: 50
                }}
                onChange={handleChange}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}>
              <TextField
                fullWidth
                label='Telefon'
                name='phone'
                id='phone'
                type='text'
                value={info.phone}
                inputProps={{
                  maxLength: 35
                }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label='Eposta'
                name='email'
                id='email'
                type='text'
                value={info.email}
                inputProps={{
                  maxLength: 35
                }}
                onChange={handleChange}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}>

              <FormControl fullWidth>
                <InputLabel id="topic">Öneri & Talep Konusu</InputLabel>
                <Select
                  required
                  labelId="topic"
                  id="topic"
                  name='topic'
                  label="Öneri & Talep Konusu"
                  value={info.topic}
                  onChange={handleChange}
                >
                  {
                    oneriKonusu.map((item, index) => (
                      <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                    ))
                  }

                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="katkiKonusu">Oneri Fayda Konusu</InputLabel>
                <Select
                  required
                  labelId="katkiKonusu"
                  id="katkiKonusu"
                  name='katkiKonusu'
                  label="Oneri Fayda Konusu"
                  value={info.katkiKonusu}
                  onChange={handleChange}
                >
                  {
                    katkiKonusu.map((item, index) => (
                      <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                    ))
                  }

                </Select>
              </FormControl>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label='Açıklama'
                name='detail'
                id='detail'
                type='text'
                value={info.detail}
                inputProps={{
                  maxLength: 250
                }}
                onChange={handleChange}
              />
            </Box>

            <Button variant='contained' type='submit'>
              Gönder
            </Button>

          </Box>

        </form>

      </Box>



    </div>
  )
}

export default OneriTalep