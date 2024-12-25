import './App.css'
import Navbar from './components/Navbar'
import Login from "./pages/Login"
import Signup from "./pages/Register"
import {Routes,Route} from "react-router-dom"
import Indexpage from "./pages/Indexpage"
import { UserContextProvider } from './context/Usercontext'
import CreatePost from './pages/CreatePost'
import PostPage from "./pages/PostPage"
import EditPost from './pages/EditPost'

function App() {

  return (
    <UserContextProvider>
      <div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Indexpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditPost/>}/>
        </Routes>
      </div>
    </UserContextProvider>
  )
}

export default App
