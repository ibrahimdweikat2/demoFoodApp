import {useContext} from 'react';
import Header from './Components/Layout/Header';
import Meal from './Components/Meal/Meal';
import Cart from './Components/Cart/Cart';
import AuthContext from './Components/Store/AuthContext';
import CartContextProvider from './Components/Store/CartContextProvider';

const App = () => {
  const ctx=useContext(AuthContext);
  return <CartContextProvider>
    {ctx.cartIsShown && <Cart />}
    <Header />
    <main>
      <Meal />
    </main>
  </CartContextProvider>
}

export default App