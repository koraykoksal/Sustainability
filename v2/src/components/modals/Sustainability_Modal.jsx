import React, { useRef, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography, Grid, Container, TextField, FormControl, Select, FormLabel, InputLabel, MenuItem, Button } from "@mui/material"
import { IoMdCloseCircle } from "react-icons/io";
import { modalStyles } from '../../styles/globalStlye';
import bonnaLogoGreen from "../../assets/img/logoBSustainability.png"
import useSustainabilityCall from '../../hooks/useSustainabilityCall';
import { useLocation, useNavigate } from 'react-router';


const Sustainability_Modal = ({ open, HandleClose, info, handleChange, handleChangeFile, susData, state, setSusData, setFiles, files }) => {

    const {post_AllData_to_FireBase,post_OnlyData_to_Firebase}=useSustainabilityCall()
    const navigate = useNavigate()
    const fileInputRef = useRef()
    const [key, setKey] = useState(Date.now());

    const handleReset = () => {

        fileInputRef.current.value = ""
        setKey(Date.now());

        setFiles('')
        setSusData({
            ...susData, filename: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(susData.filename){
           
            post_AllData_to_FireBase(files,susData)
            HandleClose()
            
        }
        else{
           
            post_OnlyData_to_Firebase(susData)
            HandleClose()
        }
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

                    <Typography align='center' color={'white'} fontWeight={700} letterSpacing={3}>{info}</Typography>

                    <Container maxWidth='sm' sx={{ mt: 5 }} component={'form'} onSubmit={handleSubmit}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={5}
                                name='aciklama'
                                id='aciklama'
                                type='text'
                                label='Açıklama'
                                value={susData.aciklama}
                                onChange={handleChange}
                                sx={{ color: 'white' }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <TextField
                                    key={key}
                                    fullWidth
                                    name='filename'
                                    id='filename'
                                    type='file'
                                    ref={fileInputRef}
                                    onChange={handleChangeFile}
                                    inputProps={{
                                        accept: '.png, .jpg, .jpeg, .docx, .xlsx, .xls, .pdf, .csv'
                                    }}
                                />
                                <Button variant='contained' color='error' size='small' style={{ textTransform: 'none', letterSpacing: 3 }}
                                    onClick={handleReset}
                                >
                                    Sil
                                </Button>
                            </Box>

                            <Button variant='contained' sx={{ textTransform: 'none', letterSpacing: 3 }} type='submit'>Kayıt</Button>

                        </Box>

                    </Container>


                </Box>



            </Modal>

        </div>
    )
}

export default Sustainability_Modal