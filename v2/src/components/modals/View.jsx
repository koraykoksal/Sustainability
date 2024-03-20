import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Container, IconButton, TextareaAutosize } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { modalStyles } from '../../styles/globalStlye';
import bonnaLogoGreen from "../../assets/img/logoBSustainability.png"
import { IoMdCloseCircle } from "react-icons/io";


const View = ({ info, open, handleClose }) => {

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={modalStyles}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IoMdCloseCircle size={30} cursor={'pointer'} color='red' onClick={handleClose} />
                        <img src={bonnaLogoGreen} width={100} />
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={5}>

                        <Typography align='center' letterSpacing={3} fontWeight={700}>{info.title}</Typography>

                        <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                            <Typography>Ad: {info.name}</Typography>
                            <Typography>Soyad: {info.surname}</Typography>
                        </Grid>

                        <Typography align='center'>Tel: {info.tel}</Typography>

                        <Typography align='center'>Mail: {info.email}</Typography>

                        {
                            info.bonnaUsr ?
                                (
                                    <Box display={'flex'} flexDirection={'column'} gap={5}>
                                        <Typography align='center'>Başvuru Tipi: Bonna Çalışanı</Typography>
                                        <Typography align='center'>Birim: {info.birim}</Typography>
                                    </Box>
                                )
                                :
                                (
                                    <Typography align='center'>Başvuru Tipi: {info.userType}</Typography>
                                )
                        }

                        <Typography align='center'>Açıklama: {info.aciklama}</Typography>

                    </Box>


                </Box>
            </Modal>

        </div>
    )
}

export default View