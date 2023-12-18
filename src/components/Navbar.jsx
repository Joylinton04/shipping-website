import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="px-8 py-6 border-b ssm:px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-sky-500 font-header font-bold italic text-4xl">Shippy</h1>
            <div className="flex gap-6 text-lg cursor-pointer ssm:hidden">
              <NavLink to="/">Home</NavLink>
              <p>Services</p>
              <p>Resources</p>
            </div>
            <div className="flex gap-4 items-center"> 
              <div className="px-7 py-3 ssm:px-4 ssm:py-2 bg-red-700 text-white font-medium rounded cursor-pointer">
                Book a call
              </div>
            {/* <div className="hidden ssm:block" onClick={() => setIsOpen(prev => !prev)}><MenuIcon fontSize="large"/></div> */}
            <div className='z-30 hidden ssm:block' onClick={() => setIsOpen(prev => !prev)}>
              {isOpen 
              ? <CloseIcon fontSize='large' sx={isOpen ? {color: "white"} : {color: ""}}/>
              : <MenuIcon fontSize='large' sx={isOpen ? {color: "white"} : {color: ""}}/>
              }
            </div>
                { isOpen &&
                    <div className='fixed z-20 top-0 right-0 bg-[#272727cc] h-full w-full text-white flex justify-end'>
                        <ul className='pt-28 bg-black w-40 text-end px-6 flex flex-col gap-2 text-lg'>
                            <li className='border-b border-[#1a1a1a] hover:scale-110 duration-200'>Home</li>
                            <li className='border-b border-[#1a1a1a] hover:scale-110 duration-200'>Services</li>
                            <li className='border-b border-[#1a1a1a] hover:scale-110 duration-200'>Work</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar;