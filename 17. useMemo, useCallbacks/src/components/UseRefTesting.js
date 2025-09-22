import React from 'react'

const UseRefTesting = () => {
    // const [count, setCount] = React.useState(0);
    // let counter = 0;
    // let ref = React.useRef(0);

    const [time, setTime] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    const timerRef = React.useRef(null);

    const handleStart = () => {
        const currentTime = Date.now();

        setTime(currentTime);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(()=> {
            setCurrentTime(Date.now());
        }, 100)
    }

    const handleEnd = () => {
        clearInterval(timerRef.current);
    }

    const timeElapsed = parseFloat((currentTime - time)/1000).toFixed(2);
  return (
    <div className='flex gap-2 items-center'>
        {/* <button className='bg-red-200 rounded-lg p-4' onClick={()=> {
            counter+=1;
            console.log("counter", counter);
        }}>
            Click me
        </button>

        <button className='bg-yellow-700 rounded-lg p-4' onClick={()=> {
            setCount(count+1);
        }}>
            clicked state variable {count}
        </button>

        <button className='bg-pink-500 rounded-lg p-4' onClick={()=> ref.current = ref.current + 1}>
            clicked useRef {ref.current}
        </button> */}

        Elapsed Duration {timeElapsed}
        <button className='bg-green-500 rounded-lg p-4' onClick={handleStart}>
            start
        </button>

        <button className='bg-red-500 rounded-lg p-4' onClick={handleEnd}>
            End
        </button>


    </div>

  )
}

export default UseRefTesting