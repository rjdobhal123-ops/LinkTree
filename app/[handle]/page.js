import React from 'react'
import clientPromise from '@/lib/mongodb'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { connection } from "next/server";
import { Suspense } from 'react';




export default function HandlePage({ params }) {
  return (
    <Suspense fallback={<div>Loading Linktree...</div>}>
      <Page params={params} />
    </Suspense>
  );
}


 async function Page({ params }) {

    const handle=(await params).handle
    await connection;
    const client=await clientPromise
    const db=client.db("Linktree")
    const collection=db.collection("links")

    const item=await collection.findOne({handle: handle})
    if(!item){
        return notFound()
    }



  return (
    <div className='min-h-screen bg-purple-200 flex justify-center items-center py-4'>
      {item &&<div className='h-auto w-[70vw] md:w-[30vw]  flex flex-col gap-4 justify-center py-6 items-center  border-purple-600 shadow rounded-3xl  shadow-2xl shadow-purple-950'>
      <img className='py-2 w-[30vw] h-[22vh] md:w-[30vw] md:h-[22vh] object-contain' src={item.profile} alt="" />
      <span className='text-[#36454F] font-semibold text-3xl'>@{item.handle}</span>
      <span className='font-semibold px-2 md:px-6'>{item.desc}</span>

      <div className='flex flex-col gap-4'>
        {item.link.map((item, index)=>{
            return <Link key={index} href={item.link}>
                <div className='font-bold text-white rounded-4xl bg-[#5d076b] w-[50vw] md:w-[25vw] shadow shadow-purple-900 text-lg tracking-wide py-2 md:py-2 px-6 flex justify-center items-center'>{item.linktext}</div>
            </Link>
        })}
      </div>
    </div>}
    </div>
  )
}


