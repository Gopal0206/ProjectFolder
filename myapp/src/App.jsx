import 'bootstrap/dist/css/bootstrap.min.css'
import { Add } from './Components/Pages'
import {BrowserRouter} from 'react-router'
import AppRoutes from './Components/AppRoutes/AppRoutes'
import NavBar from './Components/Layout/NavBar'
import FootBar from './Components/Layout/FootBar'

function App() {
  

  return (
    <>
     <BrowserRouter>
            <NavBar/>
              <AppRoutes/>
            <FootBar/>
     </BrowserRouter>
    </>
  )
}

export default App
