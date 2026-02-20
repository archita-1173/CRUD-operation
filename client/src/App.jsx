import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import bootstrap from 'bootstrap'
import Users from './Users'
import CreateUsers from './CreateUsers'
import UpdateUsers from './UpdateUsers'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route> path='/' element={<Users/>}</Route>
      <Route> path='/create' element={<CreateUsers/>}</Route>
      <Route> path='/update/:id' element={<UpdateUsers/>}</Route>

    </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
