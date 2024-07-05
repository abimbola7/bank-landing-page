
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import Nav from './nav'
import { CiMenuFries } from "react-icons/ci";
import { SetStateAction } from 'react';

const Header = ({ setSheetOpen } : { setSheetOpen : React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <header className='w-full'>
      <div className='flex items-center justify-between p-3 mx-auto space-x-3 max-w-7xl'>
        <div className="!uppercase cursor-pointer bg-black !text-white py-1 px-4 hover:bg-[#333333] transition-colors duration-200 hidden md:block">
          <HoverCard>
            <HoverCardTrigger className="">ONLINE BANKING</HoverCardTrigger>
            <HoverCardContent className="!left-10 bg-black !border-none">
              <ul className='!transition-colors !duration-200'>
                <li className='hover:bg-[#333333] px-3 py-1 !transition-colors !duration-300'>internet banking</li>
                <li className='hover:bg-[#333333] px-3 py-1 !transition-colors !duration-300'>mobile banking</li>
                <li className='hover:bg-[#333333] px-3 py-1 !transition-colors !duration-300'>tradedirect</li>
              </ul>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div 
        onClick={() => setSheetOpen(prevState=>!prevState)}
        className=''>
          <CiMenuFries size={20} className='cursor-pointer md:hidden'/>
        </div>
        <Nav />
        <div className="cursor-pointer">
          <h1 className='text-2xl font-bold'>CORONATION</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
