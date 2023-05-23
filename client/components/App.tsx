import { Route, Routes } from 'react-router-dom'
import Me from './Me'
import Contact from './Contact'



function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Me/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App
