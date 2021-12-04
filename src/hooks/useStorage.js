import React, { useEffect, useState } from 'react'
import { firebaseDB, firstoreImage,timestamps } from '../firebase'

function useStorage(file) {
    const [progress,setProgress]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)

    const handleUpload = ()=>{
        const storageRef = firstoreImage.ref(file.name);
        const databaseRef = firebaseDB.collection("images");

        storageRef.put(file).on("state_changed",{
            "next":(snap)=>{
                let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
                setProgress(percentage);
            },
            "error":(error)=>{
                setError(error)
            },
            "complete":async()=>{
                const newUrl = await storageRef.getDownloadURL();
                const createdAt = timestamps();
                databaseRef.add({url:newUrl ,createdAt})
                setUrl(newUrl);
            },
        })
    }

    useEffect(()=>{
        handleUpload();
        // eslint-disable-next-line
    },[file])

    return {progress,error,url};
}

export default useStorage;
