import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import List from "./pages/list/List.jsx"
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Admin from "./pages/admin/Admin.jsx";
import AdminUser from "./pages/adminUser/AdminUser.jsx";
import AdminHotel from "./pages/adminHotel/AdminHotel.jsx";
import AdminRoom from "./pages/adminRoom/AdminRoom.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminUser' element={<AdminUser/>}/>
        <Route path='/adminHotel' element={<AdminHotel/>}/>
        <Route path='/adminRoom' element={<AdminRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
