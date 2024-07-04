import './App.css'
import Advice from './components/advice'
import Footer from './components/footer'
import Header from './components/header'
import Managers from './components/managers'
import Parallax from './components/parallax'
import Press from './components/press'
import Pricing from './components/pricing'
import Question from './components/question'
import Services from './components/services'


function App() {
  return (
    <div className='!bg-white'>
      <Header />
      <div className='w-full min-h-screen'></div>
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
