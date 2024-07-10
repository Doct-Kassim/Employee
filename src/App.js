import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Regist from './Pages/Regist';
import Employe from './Pages/Employe';
import Add from './Pages/Add';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Report from './Pages/Report';
import SideBar from './Components/SideBar'; 
import MenuIcon from './Components/MenuIcon';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar/>
        <NavBar/>
        <MenuIcon/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='regist' element={<Regist/>} />
          <Route path='employe' element={<Employe/>} />
          <Route path='add' element={<Add/>} />
          <Route path='report' element={<Report/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
