import { useState } from 'react'
import  {Slider}  from './components/slider';
import mainpage from './images/mainpage.jfif';

function App() {

  return (
    
    <div className=" flex flex-col  bg-slate-600 w-screen h-screen">
      <div className='flex justify-center items-center bg-pink-400 p-1 w-full '>
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG WITH PURCHASES $250+ 
      </div>
      <div className=''>
      {/* <img src={mainpage} className="w-full h-1/2"></img> */}
      <Slider/>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}

export default App
