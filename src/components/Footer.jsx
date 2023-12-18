import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16'>
      <div className=' bg-red-600 text-white py-8 px-4 min-h-[288px] flex justify-center items-center flex-col gap-8'>
        <p className='text-center text-5xl ssm:text-3xl font-header font-semibold'>Looking for leading shipping company for you business ?</p>
        <div>
        <button className="px-7 py-3 ssm:px-4 ssm:py-2 bg-white text-red-500 font-medium rounded cursor-pointer outline border-none">Book a call</button>
        </div>
      </div>
      <div className='py-10 px-8 flex flex-col justify-between'>
        <div className='flex justify-between ssm:flex-wrap ssm:gap-4'>
          <div className='flex flex-col gap-4'>
            <h1 className="text-sky-500 font-header font-bold italic text-4xl">Shippy</h1>
            <p>Shippy is a shipping company that allows you to <br/> transport your logistics without worry anymore</p>
          </div>
          <div className='flex gap-8'>
            <div>
              <h3 className='font-semibold pb-2 text-lg'>Services</h3>
              <ul className='flex flex-col gap-2'>
                <li>Inland Shipment</li>
                <li>Overseas Shipment</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold pb-2 text-lg'>About</h3>
              <ul className='flex flex-col gap-2'>
                <li>Terms and conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <p>&copy;{new Date().getFullYear()} shippy. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;