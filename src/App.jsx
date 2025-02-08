
import { Route, Routes } from 'react-router-dom'
import Paste from './components/Paste'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import Navbar from './components/Navbar'
function App() {


  return (
    <div className='w-full'>
      <Navbar></Navbar>
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/pastes' element={<Paste></Paste>}></Route>
          <Route path='/pastes/:pasteId' element={<Home></Home>}></Route>
        </Routes>

      </div>
    </div>
  )
}

export default App
