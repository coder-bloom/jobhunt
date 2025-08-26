import  {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'  
import REgister from './pages/REgister'
 function App() {
   return (
     <div>
        <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<REgister/>}></Route>
</Routes>
</BrowserRouter>
     </div>
   )
 }
 
 export default App
 