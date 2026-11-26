"use client"

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react'
import { useRouter } from "next/navigation";


const page = () => {
    const searchParams = useSearchParams();
    const router=useRouter();

const [link, setlink] = useState([{link:"", linktext:""}])
const [handle, sethandle] = useState(searchParams.get('handle'))
const [profile, setprofile] = useState("")
const [desc, setdesc] = useState("")

const handlechange=(index, link, linktext)=>{
    setlink((initiallinks)=>{
        return initiallinks.map((item, i)=>{
            if(i==index){
                return {link, linktext}
            }
            else{
                return item
            }
        })
    })
}


const addLink=()=>{
    setlink(link.concat([{link:"", linktext: ""}]))
}

const submitlinks= async ()=>{
    const myHeaders=new Headers();
  myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "link": link, 
      "handle": handle,
      "profile": profile,
      "desc": desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("/api/add", requestOptions)
   const result = await r.json()
   if(result.success){ 
     toast.success(result.message)
    router.push(`/${handle}`);
     setlink([])
     setprofile("")
     sethandle("")
    }
    else{
      toast.error(result.message)
    }



}



  return (
    

    <div className='flex flex-col md:grid md:grid-cols-2 bg-[#e8efd6] text-black min-h-screen py-[8vh] md:py-[30vh] md:py-30'>

        

      <div className="form flex flex-col gap-8 justify-center items-center px-6 py-6 md:py-0">
        <h1 className='text-3xl font-bold'>Create your LinkTree</h1>

        <div className='flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-md font-semibold'>Step 1: Claim your handle</h2>
        <input value={handle||""} onChange={(e)=>sethandle(e.target.value)} className='focus:outline-2 rounded-full py-2 px-4 bg-white' type="text" placeholder='Enter your handle' />
        </div>

        <div className='flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-md font-semibold'>Step 2: Add your links</h2>
        {link && link.map((item, index)=>{
            return <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-2'>
        <input value={item.linktext||""} onChange={e=>{handlechange(index, item.link, e.target.value)}} className='focus:outline-2 rounded-full py-2 px-4 bg-white' type="text" placeholder='Link Text' />
        <input value={item.link||""} onChange={e=>{handlechange(index, e.target.value, item.linktext)}} className='focus:outline-2 rounded-full py-2 px-4 bg-white' type="text" placeholder='Link' />
        </div>
            }) }
                    <button onClick={()=>addLink()} className='bg-gray-600 text-white py-2 px-6 rounded-full'>+ Add</button>
</div>

        <div className='flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-md font-semibold'>Step 3: Add picture and description</h2>
        <div className='flex flex-col md:flex-row gap-2'>
        <input value={profile||""} onChange={e=>setprofile(e.target.value)} className='focus:outline-2 rounded-full py-2 px-4 bg-white' type="text" placeholder='Enter link to your picture' />
        <input value={desc||""} onChange={e=>setdesc(e.target.value)} className='focus:outline-2 rounded-full py-2 px-4 bg-white' type="text" placeholder='Add description' />
        </div>
        </div>

        <button disabled={handle=="" || profile=="" || link[0].linktext==""}   onClick={()=>submitlinks()} className='bg-gray-800 text-white rounded-full py-2 px-10 shadow  shadow-black cursor-pointer'>Create your LinkTree</button>
        
      </div>


      {/* Image */}
      <div className="image flex justify-center items-center">
        <img className='w-[80vw] md:w-full h-[50vh] object-contain' src="https://linktr.ee/_marketing/images/heroes/home-section-4-mobile.avif" alt="image" />
      </div>

      <ToastContainer/>
    </div>
  )
}

export default page
