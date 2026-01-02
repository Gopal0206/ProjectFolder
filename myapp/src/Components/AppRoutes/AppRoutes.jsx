import React from 'react' 
import {Routes, Route} from 'react-router'
import { Home, Add, Update, Show, Delete, AppError, Contact, About, Form } from '../Pages'


function AppRoutes() {
  // http://localhost:5173/delete/bfaf
  return (
    <div>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add'  element={<Add/>} />
            <Route path='/update/:userId' element={<Update/>} />
            <Route path='/show' element={<Show/>} />
            <Route path='/delete/:userId' element={<Delete/>}/>
            <Route path='/*' element={<AppError/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route path='/form' element={<Form/>}/> */}

       </Routes>
    </div>
  )
}

export default AppRoutes
