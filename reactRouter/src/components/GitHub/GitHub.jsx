import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){

    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/pankaj182007')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)})
    // },
    // [])
    return(
        <div className="text-center m-4 bg-gray-600
         text-white p-4 text-3xl">
            Github ID :{data.id}

        </div>
    )
} 

export const githubInfoLoader=async ()=>{
    const res= await fetch('https://api.github.com/users/pankaj182007')

    return res
}