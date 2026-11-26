"use client"
import { useState } from "react"
import Link from "next/link"

export default function Home() {

const [active, setactive] = useState(null)

const faqs=[
  {
    question:"Is Linktree the original link in bio tool?",
    answer:"The short answer? Yes!"
  },
  {
    question:"Can you get paid and sell things from a Linktree?",
    answer:"Yes, you can!"
  },
  {
    question:"Is Linktree safe to use on all of my social media profiles?",
    answer:"Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts!"
  },
  {
    question:"How many links should I have on my Linktree?",
    answer:"This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action."
  },
  {
    question:"Do I need a website to use Linktree?",
    answer:"No, you don’t!"
  }
]

  return <>

   {/* Section 1 */}
    <section className="bg-[#d2e823] h-[120vh]">
      <div className="flex flex-col md:grid md:grid-cols-2 h-[110vh] py-[30vh] md:py-[10vh] justify-center items-center">
        <div className=" flex flex-col gap-2 justify-center items-center px-6 pt-[13vh]">
          <p className="text-6xl font-bold text-green-800">
            A link in bio </p>
          <p className="text-6xl font-bold text-green-800"> built for you.</p>
          <p className="text-green-800 font-semibold text-sm my-1">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles</p>
          
          {/* input */}
          <div className="flex flex-col md:flex-row gap-4">
            <input className="outline-green-800 bg-white rounded-2xl py-3 px-4" type="text" placeholder="linktr.ee/"/>
            <button className="bg-green-800 text-white font-bold rounded-full py-4 md:py-2 px-15"><Link href="/generate">Get started for free</Link> </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
         
          <video 
            loop
            muted
            playsInline
            autoPlay
            
            preload="auto"
            className="block w-full h-[60vh] md:h-[80vh] object-cover md:object-contain"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />

            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>


  {/* Section 2 */}
    <section className="bg-[#2665d6] h-[100vh] md:h-[120vh]">
  <div className="md:grid md:grid-cols-2 h-[110vh] py-10 justify-center items-center">
     <div className="flex justify-center items-center">
         
          <video 
            loop
            muted
            playsInline
            autoPlay
            
            preload="auto"
            className="block w-full h-auto object-contain"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />

            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className=" flex flex-col gap-2 justify-center px-4 ">
          <p className="text-5xl font-bold text-[#d2e823]">
            Create and  customize</p>
          <p className="text-5xl font-bold text-[#d2e823]"> your Linktree in minutes.</p>
          <p className="text-white font-semibold text-sm my-1 pr-6">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles</p>
          
          {/* input */}
          <div className="flex gap-4">
            <button className="bg-[#d2e823] text-black font-bold rounded-full py-2 px-8"><Link href="/generate">Get started for free</Link> </button>
          </div>
        </div>

       
      </div>
    </section>


    {/* Section 3 */}
    <section className="bg-[#780016] h-[100vh] md:h-[120vh] flex flex-col gap-6 items-center p-20">
      <div className="text-[#e9c0e9] text-5xl font-bold">Questions? Answered</div>

      <div className="flex flex-col items-center gap-5 w-full px-4 sm:px-6 py-10">

  {faqs.map((faq, index) => (
    <div
      key={index}
      className="w-full max-w-3xl bg-black/30 rounded-2xl px-5 sm:px-6 py-5 text-[#e9c0e9] border border-white/10 hover:bg-black/40 transition-all duration-300"
    >
      {/* Question */}
      <button
        onClick={() => setactive(active === index ? null : index)}
        className="flex justify-between items-center w-full text-left text-base sm:text-xl font-semibold cursor-pointer gap-4"
      >
        {faq.question}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-5 sm:size-6 shrink-0 transition-transform duration-300 ${
            active === index ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          active === index
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#e9c0e9]/80 text-sm sm:text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}

</div>
      
      
    </section>


    {/* Section 4 */}
   <section className="bg-[#502274] min-h-screen flex justify-center items-center py-10 px-4 sm:px-6">

  <div className="bg-white w-full max-w-7xl min-h-[80vh] rounded-3xl 
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                  gap-10 lg:gap-6 
                  py-10 px-8 sm:px-10 md:px-12">

    {/* PRODUCT */}
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">PRODUCT</h2>
      <ul className="flex flex-col gap-4 text-sm">
        <li>All features</li>
        <li>Link in bio</li>
        <li>Digital Products</li>
        <li>Linktree Shops</li>
        <li>Tools</li>
        <li>Compare</li>
        <li>Marketplace</li>
      </ul>
    </div>

    {/* COMPANY */}
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">COMPANY</h2>
      <ul className="flex flex-col gap-4 text-sm">
        <li>About</li>
        <li>Careers</li>
        <li>Contact</li>
        <li>Newsroom</li>
        <li>What's New</li>
        <li>The Linktree Blog</li>
        <li>Social Good</li>
      </ul>
    </div>

    {/* COMMUNITY */}
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">COMMUNITY</h2>
      <ul className="flex flex-col gap-4 text-sm">
        <li>Linktree for Enterprises</li>
        <li>2023 Creator Report</li>
        <li>Charities</li>
        <li>Creator Profile Directory</li>
        <li>Explore Templates</li>
      </ul>
    </div>

    {/* SUPPORT */}
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">SUPPORT</h2>
      <ul className="flex flex-col gap-4 text-sm">
        <li>Help Center</li>
        <li>Getting Started</li>
        <li>Linktree Pro</li>
        <li>Features & How-Tos</li>
        <li>Report a Violation</li>
      </ul>
    </div>

    {/* TRUST & LEGAL */}
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">TRUST & LEGAL</h2>
      <ul className="flex flex-col gap-4 text-sm">
        <li>Terms & Conditions</li>
        <li>Privacy Notice</li>
        <li>Cookie Notice</li>
        <li>Trust Center</li>
        <li>Cookies Preferences</li>
        <li>Transparency Report</li>
        <li>Human Rights</li>
      </ul>
    </div>

  </div>
</section>
  </>

   

  

}
