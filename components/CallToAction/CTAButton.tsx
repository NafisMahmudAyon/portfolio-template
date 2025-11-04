'use client'
import React, { useState } from 'react'
// import ContactForm from './ContactForm';

const CTAButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div className=''>
      <button
        onClick={handleOpen}
        className='cursor-design flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor/10 px-8 py-2 text-center backdrop-blur-xl'
      >
        Contact Us
      </button>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,_0,_0,_0.5)]'>
          <div className='popup-content'>
            <button onClick={handleClose} className='close-button'>
              X
            </button>
            {/* <ContactForm handleClose={handleClose} /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CTAButton
