import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './componet/Login'
import Profile from './componet/Profile'


function App() {

  return (
    <UserContextProvider>
     <h1>React Context Api heh</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
