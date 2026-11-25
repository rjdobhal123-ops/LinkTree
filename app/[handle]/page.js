import React from 'react'
import clientPromise from '@/lib/mongodb'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { connection } from "next/server";

export default async function Page({ params }) {

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
      {item &&<div className='h-auto w-[30vw]  flex flex-col gap-4 justify-center items-center border-1 border-purple-600 shadow rounded-3xl py-3 shadow-2xl shadow-purple-950'>
      <img className='w-[120px] h-[100px] object-contain' src={item.profile} alt="" />
      <span className='font-semibold text-3xl'>@{item.handle}</span>
      <span className='font-semibold  px-6'>{item.desc}</span>

      <div className='flex flex-col gap-4'>
        {item.link.map((item, index)=>{
            return <Link key={index} href={item.link}>
                <div className='font-bold text-white rounded-4xl bg-[#5d076b] w-[25vw] shadow shadow-purple-900 text-lg tracking-wide py-4 px-6 flex justify-center items-center'>{item.linktext}</div>
            </Link>
        })}
      </div>
    </div>}
    </div>
  )
}


