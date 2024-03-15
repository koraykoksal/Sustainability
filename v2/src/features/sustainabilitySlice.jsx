
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createElement, useEffect } from "react";
import moment from "moment";


const initialState = {
    loading:false,
    error:false,
    sustainabilityData:[],


}

const sustainabilitySlice = createSlice({

    name: "sustainability",
    initialState,
    reducers: {


        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        fetchSustainabilityData:(state,{payload})=>{
            state.loading=false
            state.sustainabilityData=payload
        },



    }


})



export const {
    
    fetchStart,
    fetchFail,
    fetchSustainabilityData

} = sustainabilitySlice.actions

//slice oluşturulduktan sonra export default olarak export edilmeli ve reducer ifadesi belirtilmelidir.
export default sustainabilitySlice.reducer






