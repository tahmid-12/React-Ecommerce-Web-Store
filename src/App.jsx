import { Outlet } from "react-router-dom";
import './App.css'
// import { Main } from './Components'
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("Cart, totalAmount, cart", cart, totalAmount, totalPrice)

  return (
    <div className='App'>
      {/* <Main>

      </Main> */}
      <Outlet />
    </div>
  )
}

export default App
