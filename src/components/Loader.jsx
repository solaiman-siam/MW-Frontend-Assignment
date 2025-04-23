import React from 'react'
import { BarLoader } from 'react-spinners'

function Loader() {
  return (
    <div className='h-[400px] w-full flex  wjustify-center items-start'>
        <BarLoader color={'#0060af'} ></BarLoader>
    </div>
  )
}

export default Loader