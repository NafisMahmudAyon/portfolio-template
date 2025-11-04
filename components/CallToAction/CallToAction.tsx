'use client'
import { poppins } from '@/app/fonts'
import { Modal, ModalAction, ModalContent, useToast } from '@/components/aspect-ui'
import { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
import { X } from 'lucide-react'
// import 'react-toastify/dist/ReactToastify.css'
import ContactForm from './ContactForm'

const CallToAction = () => {
  //eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (isModalOpen: boolean) => setIsOpen(isModalOpen)

  const { toast, ToastContainer } = useToast()

  const handleClick = (type: 'success' | 'error', message: string) => {
    setIsOpen(false)
    toast({
      className: "",
      message: message,
      messageClassName: "",
      type: type
    })
  }
  return (
    <div className="px-4" id='contact'>
      <div className="container mx-auto my-20 max-w-[800px] rounded-lg bg-[#172635] px-6 py-10 drop-shadow-md md:px-10 lg:px-14">
        <div className="flex flex-col items-center gap-4 text-headingDarkText md:!grid md:grid-cols-5 md:place-items-center">
          <span className="col-start-1 col-end-2 text-xl">Get in Touch</span>
          <span
            className={`text-balance text-center text-base font-normal md:col-start-2 md:col-end-5 ${poppins.className}`}
          >
            <span className="hidden md:block">
              Interested in working together? Just <br /> drop a message
            </span>
            <span className="md:hidden">
              Interested in working together? Just drop a message
            </span>
          </span>
          <Modal isOpenExternal={isOpen} onToggle={handleOpen}>
            <ModalAction className='p-0'><span className="cursor-design flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor/10 px-8 py-2 text-center whitespace-nowrap backdrop-blur-xl text-primaryColor" onClick={() => setIsOpen(true)}>Contact Me</span></ModalAction>

            <ModalContent className="bg-[#f1f6fa] dark:bg-[#272727] relative rounded-md w-[90%] lg:w-auto pb-4 ">
              <ContactForm handleToastAndClose={handleClick} />

              <ModalAction className='p-0'><span className="absolute top-2 group right-2 leading-none size-[30px] flex items-center justify-center rounded-full  transition-colors duration-150 ease-in-out p-0" onClick={() => setIsOpen(false)}>
                <X className='w-6 group-hover:text-red-500 dark:group-hover:text-red-500 group-hover:scale-125' />
              </span></ModalAction>
            </ModalContent>
          </Modal>
          {/* <button
            onClick={handleOpen}
            className="cursor-design flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-8 py-2 text-center whitespace-nowrap backdrop-blur-xl"
          >
            Contact Us
          </button> */}
        </div>
        {/* {isOpen && (
          <>
            <div className="und relative mx-auto my-10"></div>
            <ContactForm handleToastAndClose={handleToastAndClose} />
          </>
        )} */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default CallToAction
