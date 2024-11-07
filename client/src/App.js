import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import UserContext from './context/UserContext';
import Home from './components/Home';
import NewUser from './components/forms/NewUser';
import NewVolunteer from './components/forms/NewVolunteer';
import UsuariosAsignados from './components/pages/UsuariosAsignados';
import DetalleUsuario from './components/pages/DetalleUsuario';
import LogOut from './components/LogOut';
import CrearEventos from './components/forms/CrearEventos';
import NewEvent from './components/forms/NewEvent';
import Talleres from './components/pages/Talleres';
import Reports from './components/pages/Reports';
import DetalleEvento from './components/pages/DetalleEvento';
import Stats from './components/pages/Stats';

function App() {

  const [user, setUser] = useState("")

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <LogOut/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuevoUsuario" element={<NewUser />} />
            <Route path="/nuevoVoluntario" element={<NewVolunteer />} />
            <Route path="/usuariosAsignados" element={<UsuariosAsignados />} />
            <Route path="/detalleUsuario/:id" element={<DetalleUsuario />} />
            <Route path="/crearEventos" element={<CrearEventos />} />
            <Route path="/NewEvent" element={<NewEvent/>} />
            <Route path="/talleres" element={<Talleres/>} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/detalleEvento/:id" element={<DetalleEvento />} />
            <Route path="/stats/" element={<Stats />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
