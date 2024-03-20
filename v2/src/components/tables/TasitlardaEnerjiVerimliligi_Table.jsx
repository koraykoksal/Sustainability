import React from 'react'
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDeleteForever } from "react-icons/md";


const TasitlardaEnerjiVerimliligi_Table = ({data,handleOpenDel,setInfo}) => {


    const dataGrid_Columns = [
        // {
        //   field: "id",
        //   headerName: "ID",
        //   minWidth: 150,
        //   headerAlign: "center",
        //   align: "center",
        //   flex: 1,
        // },
        {
            field: "actions",
            headerName: "Aksiyon",
            minWidth: 120,
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({
                id,
                row: {
                    name,
                    surname,
                    email,
                    tel,
                    birim,
                    userType,
                    bonnaUsr,
                    createdDate,
                    title

                }
            }) => {
                return [

                    <GridActionsCellItem
                        key={'show'}
                        label='Show'
                        icon={<FaEye size={23} style={{ cursor: 'pointer', color: 'darkblue' }} />}
                        onClick={() => {
                            // handleOpen_oneritalep()
                            setInfo({
                                id,
                                name,
                                surname,
                                email,
                                tel,
                                birim,
                                userType,
                                bonnaUsr,
                                createdDate,
                                title
                            })

                        }}
                    />,
                    <GridActionsCellItem
                        key={'delete'}
                        label='Delete'
                        icon={<MdDeleteForever size={23} style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
                            handleOpenDel()
                            setInfo({
                                id,
                                name,
                                surname,
                                email,
                                tel,
                                birim,
                                userType,
                                bonnaUsr,
                                createdDate,
                                title
                            })
                        }} />}

                    />


                ]
            },
        },
        {
            field: "name",
            headerName: "Ad",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "surname",
            headerName: "Soyad",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "tel",
            headerName: "Telefon",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Mail",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "birim",
            headerName: "Birim",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "title",
            headerName: "Konu",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "aciklama",
            headerName: "Açıklama",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "createdDate",
            headerName: "Tarih",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
       

    ];


    return (
        <div>
            <Box p={3}>
                <DataGrid
                    columns={dataGrid_Columns}
                    rows={data}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10, 25, 50, 75, 100]}
                    slots={{ toolbar: GridToolbar }}
                    disableRowSelectionOnClick
                    sx={{
                        boxShadow: 4,
                    }}
                />
            </Box>

        </div>
    )
}

export default TasitlardaEnerjiVerimliligi_Table