import React, { useState } from 'react'


export default function Counter() {


    const [counter, setCounter] = useState(0);
    function decreaseHandler() {
        // if(counter<=0){
        //   return;
        // }
        // counter =counter-1;
        setCounter(counter - 1);

    }
    function incrementHandler() {
        // counter = counter +1;
        setCounter(counter + 1);
    }
    function resetHandler() {
        setCounter(0);
    }
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col  justify-center items-center bg-[#344151] gap-10' >
            <div className='text-[#0398d4] text-2xl font-medium'>Increment & Decrement</div>

            <div className='flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
                <button onClick={decreaseHandler} className='text-center text-5xl border-r-2 w-20 border-[#bfbfbf]'>
                    -
                </button>
                <div className='font-bold gap-12 text-5xl'>
                    {counter}
                </div>
                <button onClick={incrementHandler} className='text-center text-5xl  border-l-2 w-20 border-[#bfbfbf]'>
                    +
                </button>




            </div>
            <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
                Reset

            </button>

        </div>

    )
}
