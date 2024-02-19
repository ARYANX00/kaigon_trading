import React from 'react';
import Tilt from 'react-parallax-tilt';
import hero_bg from '../assets/bg-main.jpg'
import goog from '../assets/goog.png'
import peop from '../assets/peop.png'
import reliance from '../assets/reliance.png'
import ring from '../assets/ring.png'
import zomato from '../assets/zomato.png'

export default function Hero () {
    
  return (
    <>
      <div className='block h-[750px]'>
        <img
          src={hero_bg}
          className=' absolute w-[100%] h-[100%] z-[-1]'
          alt='diamond_bg'
        />
        <div>
          <div className='font-cabin text-[28px] text-white font-bold ml-[10%] pt-[5%]'>
            kaigonhere<span className=' font-cabin text-blue-500'>.</span>
            {/* nav bar */}
            <div className='absolute z-1 top-0 '>
            <p className=' absolute top-[93px] left-[5rem] font-medium px-96 font-cabin text-[15px] text-center text-[#ffffff9f]'>
              About
            </p>
            <p className=' absolute top-[93px] left-[16rem] font-medium px-96 font-cabin text-[15px] text-center text-[#ffffff9f]'>
              Services
            </p>
            <p className=' absolute top-[93px] left-[25rem] font-medium px-96 font-cabin text-[15px] text-center text-[#ffffff9f]'>
              Contact
            </p>

            </div>

            <div>
            <p className='absolute top-[93px] left-[75rem] font-medium font-cabin text-[15px] text-[#ffffff9f] '>
              FAQ
            </p>
            <button className='absolute  top-[85px] right-24 w-[110px] h-[35px] text-[15px] rounded-full bg-slate-500'>Get Started</button>
            </div>


            {/* text area */}

            <div className='w-[597px] h-[167px] mt-[10rem]'>
               <h1 className='text-[50px]'>
               Discover the <br></br>World of Trading
               </h1>
               
               <p className='text-[15px] font-normal pt-[40px]'>Join thousands of successful traders on our platform and <br></br>maximize your profits.</p>

               <div className=' mt-20'>
               <input type="email" placeholder='Email' name="Email" id="" className=' text-center ml-[-10px] w-[464px] h-[50px] placeholder:align-top bg-[#272829] rounded-full placeholder:text-[#ffffff9f] placeholder:text-[20px] text-[20px] items-top'/>
               <button className='absolute left-[30.6rem] mt-0 w-[110px] h-[50px] text-[15px] rounded-full bg-white text-black'>Get Started</button>
               </div>
            </div>


            {/* Image Section  */}
            <div>
                <div>
                   <Tilt className='relative z-10'> <img 
                    src={reliance}
                    className=' aspect-square absolute w-[200px] h-[90.9px] right-[27rem] top-[-16rem]'
                    /></Tilt>

                    <img 
                    src={goog}
                    className=' aspect-square absolute w-[170px] h-[50.9px] right-[3rem] hover:scale-125 transition ease-in delay-150 bottom-[7rem] z-10'
                    />

                     <img 
                    src={zomato}
                    className=' aspect-square absolute w-[170px] h-[50.9px] right-[3rem] hover:scale-125 transition ease-in delay-150 bottom-[3rem] z-10'
                    />

                    <img 
                    src={ring}
                    className=' aspect-square absolute right-[27.5rem] hover:animate-spin transition ease-in delay-200 bottom-[3rem]'
                    />

                         
                    <img 
                    src={peop}
                    className=' absolute w-[350px] h-[450px] right-[150px] top-[210px]'
                    />

                    
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}