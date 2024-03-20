import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography, Grid, Container, TextField, FormControl, Select, FormLabel, InputLabel, MenuItem, Button, FormControlLabel, Checkbox } from "@mui/material"
import { IoMdCloseCircle } from "react-icons/io";
import { modalStyles } from '../../styles/globalStlye';
import { departments, userType } from "../../helper/data"
import bonnaLogoGreen from "../../assets/img/logoBSustainability.png"
import { IoPersonAddOutline } from "react-icons/io5";
// import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';


const Who = ({ open, HandleClose, handleChange, info, setInfo, setBonnaUser, bonnaUser, handleIsCheck }) => {


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/sustainability`, { state: info, id: info.id })
    }



    return (
        <div>
            <Modal
                open={open}
                onClose={HandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={modalStyles}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IoMdCloseCircle size={30} cursor={'pointer'} color='red' onClick={HandleClose} />
                        <img src={bonnaLogoGreen} width={100} />
                    </Box>

                    <IoPersonAddOutline size={30} style={{ margin: 'auto' }} />

                    <Container maxWidth='sm' sx={{ mt: 5 }} component={'form'} onSubmit={handleSubmit}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, py: 5 }}>
                            <TextField
                                required
                                fullWidth
                                name='name'
                                id='name'
                                type='text'
                                label='Ad'
                                value={info.name}
                                onChange={handleChange}
                                sx={{ color: 'white' }}
                            />
                            <TextField
                                required
                                fullWidth
                                name='surname'
                                id='surname'
                                type='text'
                                label='Soyad'
                                value={info.surname}
                                onChange={handleChange}
                                sx={{ color: 'white' }}
                            />
                            <TextField
                                required
                                fullWidth
                                name='email'
                                id='email'
                                type='email'
                                label='Mail'
                                value={info.email}
                                onChange={handleChange}
                                sx={{ color: 'white' }}
                            />
                            <TextField
                                required
                                fullWidth
                                name='tel'
                                id='tel'
                                type='tel'
                                label='Telefon'
                                value={info.tel}
                                onChange={handleChange}
                                sx={{ color: 'white' }}
                            />



                            {
                                info.bonnaUsr == false ?
                                    (
                                        <FormControl fullWidth>
                                            <InputLabel id='userType'>Tip</InputLabel>
                                            <Select
                                                required
                                                name='userType'
                                                id='userType'
                                                labelId='userType'
                                                label='Tip'
                                                value={info.userType}
                                                onChange={handleChange}
                                                MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            maxHeight: 300,
                                                            overflow: 'auto'
                                                        }
                                                    }
                                                }}
                                            >

                                                {
                                                    userType.map((item, index) => (
                                                        <MenuItem key={index} value={item.name} sx={{ height: 50 }}>{item.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    )
                                    :
                                    (
                                        ""
                                    )
                            }

                            <FormControlLabel
                                control={
                                    <Checkbox onChange={handleIsCheck} name="bonnaUsr" />
                                }
                                label="Bonna çalışanı mısın ?"
                            />

                            {
                                info.bonnaUsr &&
                                (
                                    <FormControl fullWidth>
                                        <InputLabel id='birim'>Birim</InputLabel>
                                        <Select
                                            required
                                            name='birim'
                                            id='birim'
                                            labelId='birim'
                                            label='Birim'
                                            value={info.birim}
                                            onChange={handleChange}
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 300,
                                                        overflow: 'auto'
                                                    }
                                                }
                                            }}
                                        >

                                            {
                                                departments.map((item, index) => (
                                                    <MenuItem key={index} value={item.name} sx={{ height: 50 }}>{item.name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                )
                            }



                            <Button variant='contained' type='submit' sx={{ letterSpacing: 3 }}>Devam Et</Button>
                        </Box>

                    </Container>


                </Box>



            </Modal>

        </div>
    )
}

export default Who