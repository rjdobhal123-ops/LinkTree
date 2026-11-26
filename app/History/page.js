
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const page = () => {
    const [handle, sethandle] = useState("")

    const router=useRouter();

    
    

const findhandle=async () => {

     const r = await fetch("/api/checkhandle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ handle: handle })
        });

        const result=await r.json();
        if(!result.success){
            alert(result.message)
            return
        }
     
    router.push(`/${handle}`)

}


  return (
    <div className='min-h-screen bg-amber-400 flex justify-center items-center'>
      <div className='bg-white h-auto w-[70vw] md:w-[40vw] py-4 md:py-8 flex flex-col gap-6 justify-center items-center rounded-4xl'>
        <h1 className='text-3xl font-semibold'>Enter your handle</h1>
        <div className='flex gap-3 justify-center items-center'>
        <input value={handle} onChange={e => sethandle(e.target.value)} className='rounded-full py-2 px-4 border-1 border-amber-900 focus:outline-amber-400' type="text" placeholder='Enter your previous handle' />
        <img onClick={()=>{findhandle()}} className='w-[30px] h-[30px] cursor-pointer' src="/right-arrow.png" alt="arrow image" />
        </div>
      </div>
    </div>
  )
}

export default page
