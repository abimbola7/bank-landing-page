
import { SheetProps } from "../App";
import { LiaTimesSolid } from "react-icons/lia";

const Sidebar = ({ className, setSheetOpen, sheetOpen } : SheetProps) => {
  return (
    <div className={`absolute h-screen w-full max-w-xs border bg-white top-0 left-0 z-[1100] ${className} sideebar transition-all duration-300 ${ sheetOpen ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0" }`}>
      <div 
      onClick={() => setSheetOpen(prevState=>!prevState)}
      className="absolute top-4 right-3">
        <LiaTimesSolid size={28} />
      </div>
      <div className="w-full mt-20 h-full relative">
        {
          [ "home", "about", "services", "clients", "team" ].map(item => (
            <div className="p-3 uppercase text-center transition-colors duration-200 hover:text-[#009CFF] cursor-pointer">{ item }</div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
