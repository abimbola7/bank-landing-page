import React, { SetStateAction } from 'react'
import './App.css'
import Advice from './components/advice'
import Carousel from './components/carousel'
import Footer from './components/footer'
import Header from './components/header'
import Managers from './components/managers'
import Parallax from './components/parallax'
import Press from './components/press'
import Pricing from './components/pricing'
import Question from './components/question'
import Services from './components/services'
import Sidebar from './components/sidebar'

export interface SheetProps {
  sheetOpen? : boolean;
  setSheetOpen : React.Dispatch<SetStateAction<boolean>>
  className : string;
}


function App() {
  const [ sheetOpen, setSheetOpen ] = React.useState<boolean>(false);
  return (
    <div className='!bg-white relative'>
      {/* { */}
        {/* // sheetOpen && ( */}
          <Sidebar
          className={`md:hidden`}
          sheetOpen={sheetOpen}
          setSheetOpen={setSheetOpen}
          />
        {/* ) */}
      {/* } */}
      <Header setSheetOpen={setSheetOpen}/>
      <Carousel />
      <Services/>
      <Pricing />
      <Question />
      <Parallax />
      <Managers />
      <Advice />
      <Press />
      <Footer />
    </div> 
  )
}

export default App
