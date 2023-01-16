import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import HomeCRUD from './Components/HomeCRUD'
import Users from './Components/Users'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <HomeCRUD/>
            <Routes>
                <Route path='/createusers' element={<CreateUser/>} />
                <Route path='/users' element={<Users/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App