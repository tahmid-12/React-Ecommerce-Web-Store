import { Outlet } from "react-router-dom";
import './App.css'
// import { Main } from './Components'

function App() {

  return (
    <div className='App'>
      {/* <Main>

      </Main> */}
      <Outlet />
    </div>
  )
}

export default App
