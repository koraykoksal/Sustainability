
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toastInfoNotify, toastSuccessNotify, toastErrorNotify, toastWarnNotify } from '../helper/ToastNotify'
import { ref, getStorage, getDownloadURL, getMetadata, listAll, list, deleteObject, uploadBytes } from "firebase/storage"
import { doc, setDoc, Timestamp, collection, addDoc, getDocs, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../db/firebase_db"
import { getDatabase, onValue, ref as dbRef, remove, set, update } from "firebase/database";
import { uid } from "uid";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { fetchStart, fetchSustainabilityData } from '../features/sustainabilitySlice';


const useSusCall = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



    // firebase data gönder
    const post_AllData_to_FireBase = async (file, susData) => {

        //işlem başladığında loading bilgisini başlat
        dispatch(fetchStart())

        const storage = getStorage() // storage path
        const filePath = `sustainability/${susData.filename}`
        const fileRef = ref(storage, filePath)


        //dosya bilgisi true veya false ise işlemi değiştir
        try {

            await uploadBytes(fileRef, file)

            const downloadUrl = await getDownloadURL(fileRef)

            if (downloadUrl) {
                const newData = { ...susData, fileUrl: downloadUrl }

                //realtime db kaydı için fonksiyonu çalıştır
                post_OnlyData_to_Firebase(newData)

            }
            else {
                toastWarnNotify('Yüklenen dosyaya erişim yapılamadı !')
            }


        } catch (error) {
            console.log("postDataFireBase :", error)
        }

    }


    const post_OnlyData_to_Firebase = async (susData) => {

        //işlem başladığında loading bilgisini başlat
        dispatch(fetchStart())

        const uID = uid() // id oluştur
        const db = getDatabase() // realtime db path

        try {

            await set(dbRef(db, `sustainability/${susData.title}/` + uID), susData)
            toastSuccessNotify('Kayıt yapılmıştır.')
            navigate('/', { state: {} })

        } catch (error) {
            console.log("postDataFireBase :", error)
        }
    }




    const get_DataFromFirebase = async (address) => {

        dispatch(fetchStart())

        try {

            const db = getDatabase()
            const refs = dbRef(db, `sustainability/${address}`)
            onValue(refs, (snapShot) => {

                const data = snapShot.val();
              
                if (data != null || data != undefined) {

                    const result = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    console.log(result)
                    dispatch(fetchSustainabilityData(result))
                }
                else{
                    dispatch(fetchSustainabilityData([]))
                    toastWarnNotify('Kayıt Bulunmuyor !')
                }



            })


        } catch (error) {
            console.log("get_DataFromFirebase: ", error)
        }
    }



    //! firebase data silme
    const removeFirebaseData = async (address, id) => {

        try {
            const db = getDatabase();
            remove(ref(db, `${address}/${id}`))
            toastSuccessNotify('Data Deleted ✅')
        } catch (error) {
            toastErrorNotify('No Delete Data ❌')
        }
    }


    return {
        post_AllData_to_FireBase,
        post_OnlyData_to_Firebase,
        removeFirebaseData,
        get_DataFromFirebase

    }

}

export default useSusCall




















