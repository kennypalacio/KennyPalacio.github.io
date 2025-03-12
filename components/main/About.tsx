"use client";
import React from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { slideInFromTop, slideInFromRight, slideInFromBottom } from "@/utils/motion";
import Image from "next/image";


const About = () => {
  return (
    <section
    id="about"
    >

    <div className="flex flex-row relative items-center justify-center mt-32 min-h-screen w-full h-full ">
      <div className="absolute w-auto top-10 z-[5]">

        <motion.div
          animate=""
          variants={slideInFromBottom}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            About{" "}
          </span>
        </motion.div>
      
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center ml group cursor-pointer w-auto h-auto">
       
        <a
        href="https://drive.google.com/file/d/1DDj_zgIun5W3IWaZLU5oiAuYGbzHYv1h/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        
        >

          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="relative w-[50px] translate-y-11 transition-all duration-200 group-hover:translate-y-2.5 ml-[25px] z-1"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" relative z-10 ml-[15px]"
          />

      <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] z-[20]">
      <h1 className="Welcome-text text-[20px]">Resume</h1>
      </div>
      </a>
      </div>
      </div>
      <div className="w-auto h-auto flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-auto h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
    </section>
  );
};

export default About;