import React, { useRef } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { homeBgPattern } from '../styles/theme';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { homePageStyle } from '../styles/globalStlye';
import Sustainability_Modal from '../components/modals/Sustainability_Modal';
import { format } from "date-fns"
import Sustainability_Data from '../components/Sustainability_Data';
import { NotFound } from './NotFound';

const Sustainability = () => {

    const { state } = useLocation()
    const [info, setInfo] = useState("")
    const [files, setFiles] = useState("")

    function dateFormat() {
        const now = new Date()
        return format(now, 'dd-MM-yyyy HH:mm')
    }

    const [susData, setSusData] = useState({
        aciklama: "",
        filename: "",
        createdDate: dateFormat()
    })

    const [open, setOpen] = useState(false);
    const HandleOpen = () => setOpen(true);
    const HandleClose = () => {
        setOpen(false)
        setSusData({
            aciklama: "",
            filename: "",
        })
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setSusData({
            ...susData,
            [name]: value,
            name: state.name,
            surname: state.surname,
            email: state.email,
            birim: state.birim,
            tel: state.tel,
            bonnaUsr:state.bonnaUsr,
            userType:state.userType,
            title:info,
        })

    }


    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFiles(file)
            setSusData({
                ...susData,
                filename: file.name
            })
        }
    }




    return (
        <div>

            {
                state?.id ?
                    (
                        <>
                            <Sustainability_Data handleChange={handleChange} info={info} setInfo={setInfo} setSusData={setSusData} HandleOpen={HandleOpen} />

                            <Sustainability_Modal open={open} HandleClose={HandleClose} info={info} handleChange={handleChange} handleChangeFile={handleChangeFile} susData={susData} state={state} setFiles={setFiles} setSusData={setSusData} files={files} />
                        </>
                    )
                    :
                    (
                        <NotFound />
                    )
            }


        </div>
    )
}

export default Sustainability