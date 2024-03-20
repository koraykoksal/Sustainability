import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import useSusCall from '../../hooks/useSustainabilityCall';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 525,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};


const Delete = ({ info, openDel, handleCloseDel }) => {

    const { get_DataFromFirebase,removeFirebaseData } = useSusCall()

    const handleSubmit=(e)=>{
        e.preventDefault()
        removeFirebaseData(info)
        handleCloseDel()
    }

   

    return (
        <div>
            <Modal
                keepMounted
                open={openDel}
                onClose={handleCloseDel}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>

                        <Typography align='center' variant='h5'>Kayıt Silinecek Emin Misiniz ?</Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: 3 }}>

                            <Button variant='contained' color='success' onClick={handleSubmit}>Evet</Button>

                            <Button variant='outlined' color='error' onClick={handleCloseDel}>Hayır</Button>
                        </Box>
                    </Box>



                </Box>
            </Modal>

        </div>
    )
}

export default Delete