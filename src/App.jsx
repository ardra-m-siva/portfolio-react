
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MoreAbout from './MoreAbout'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/more' element={<MoreAbout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
