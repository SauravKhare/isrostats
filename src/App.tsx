import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Spacecrafts from './pages/Spacecrafts';
import Launchers from './pages/Launchers';
import Centers from './pages/Centers';
import CustomerLaunches from './pages/CustomerLaunches';

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spacecrafts' element={<Spacecrafts />} />
        <Route path='/launchers' element={<Launchers />} />
        <Route path='/centers' element={<Centers />} />
        <Route path='/customer-launches' element={<CustomerLaunches />} />
      </Routes>
    </>
  )
}

export default App
