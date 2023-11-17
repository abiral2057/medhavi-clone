import { BrowserRouter, Routes , Route} from "react-router-dom"
import Layout from "./Pages/Components/Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"


function App() {
  <>
 <BrowserRouter>
 <Routes>
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="Login" element={<Login/>}/>
  <Route path="Signup" element={<Signup/>}/>


</Route>

 </Routes>
 
 </BrowserRouter>
<p>Hello</p>
  </>
}

export default App
