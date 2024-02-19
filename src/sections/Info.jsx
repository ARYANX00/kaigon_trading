import mis from '../assets/Mission img.png'

export default function Info() {
    return (
        <div className='text-[#213757] mt-[600px] z-10 w-[100%] h-[1000px] flex overflow-hidden'>
            <div className='relative left-[120px] ml-[75px]'>  
            <h1 className='text-[55px] font-cabin font-semibold'>Empowering Your <br />Financial Journey</h1>
            <h3>To empower you on your financial journey, We're dedicated to providing <br /> you with the tools, knowledge, and support you need to navigate the world <br />of stock and forex trading with confidence. From educational resources to <br /> cutting-edge technology, we're here to help you unlock your potential and <br />
                achieve your financial goals. <br />

              <span className=' relative top-5'>Join us today and embark on a path towards greater financial freedom.</span>  </h3>

              <button className='relative top-10  mt-[57px] w-[110px] h-[50px] text-[15px] rounded-full bg-[#272829] text-white'>Get Started</button>
            </div>

            <div className='relative right-[-425px] mt-[-150px]'>
             <img 
             src={mis}
             alt="" />
            </div>
        </div>
        

    )
}