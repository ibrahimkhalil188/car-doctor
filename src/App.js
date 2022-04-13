import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service/:serviceDetails' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
