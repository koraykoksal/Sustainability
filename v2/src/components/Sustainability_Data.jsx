import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import img1 from "../assets/pics/prosesler-enerji.png"
import img2 from "../assets/pics/tasitlarda-enerji-verimliligi.png"
import img3 from "../assets/pics/ofislerde-enerji-verimliligi.png"
import img4 from "../assets/pics/sosyal-kapsam.png"
import img5 from "../assets/pics/dongusellik.png"
import img6 from "../assets/pics/sanayide-enerji-verimliligi.png"


const urlData = [
    {
        title: "Ofislerde Enerji Verimliliği",
        address: "Ofislerde Enerji Verimliligi",
        url: "/yonetimofisenerjiverimliligi",
        icon: img3,
    },
    {
        title: "Üretim Boyunca Enerji Verimliliği",
        address: "Uretim Boyunca Enerji Verimliligi",
        url: "/prosesenerjiverimliligi",
        icon: img1,
    },
    {
        title: "Taşıtlarda Enerji Verimliliği",
        address: "Tasitlarda Enerji Verimliligi",
        url: "/tasitenerjiverimliligi",
        icon: img2,
    },

    {
        title: "Sosyal Kapsam ve İnsan",
        address: "Sosyal Kapsam ve Insan",
        url: "/sosyalkapsam",
        icon: img4,
    },
    {
        title: "Döngüsellik, Geri Dönüşüm, Atık Yönetimi",
        address: "Dongusellik, Geri Donusum, Atik Yonetimi",
        url: "/dongusellik",
        icon: img5,
    },
    {
        title: "Diğer",
        address: "Diger",
        url: "/sanayideenerjiverimliligi",
        icon: img6,
    },

]


const Sustainability = ({ info,setInfo, HandleOpen }) => {


    const handleClick = (param) => {
        HandleOpen()
        setInfo(param)
    }

    return (
        <div>

            <Typography
                align='center'
                variant='h6'
                mt={10}
                p={3}
                letterSpacing={3}
                fontFamily={'Catamaran'}
            >
                Bizimle paylaşacağınız fikir hangi alanda ise üzerini tıklayınız.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, p: 5 }}>

                {
                    urlData.map((item, index) => (

                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', p: 2 }}>

                                <img src={item.icon} alt="Logo" loading='lazy' width={220} className='sustainabilityIcon' onClick={() => handleClick(item.title)} />

                                <Button variant='outlined' color='success' sx={{ textTransform: 'none', fontSize: '18px', fontFamily: 'Catamaran' }} onClick={() => { handleClick(item.title) }}>{item.title}</Button>

                            </Box>

                        </Box>

                    ))
                }

            </Box>



        </div>
    )
}

export default Sustainability