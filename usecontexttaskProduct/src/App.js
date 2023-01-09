import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { CountProvider } from './context/CountContext';

function App() {
  
  return (
    <>
      <CountProvider>

      <Navbar/>
      <Outlet/>
      </CountProvider>
    </>
  )

} 


export default App;
 