import AuthLayout from "layout/AuthLayout";
import PrivateLayout from "layout/PrivateLayout";
import PublicLayout from "layout/PublicLayout";
import Admin from "pages/admin/Index.jsx";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import Clientes from "pages/admin/Clientes";
import Vehiculos from "pages/admin/Vehiculos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "styles/styles.css";
import { DarkModeContext } from "context/darkmode";
import { useState, useEffect } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="/registro"
              element={
                <AuthLayout>
                  <Registro />
                </AuthLayout>
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateLayout>
                  <Admin />
                </PrivateLayout>
              }
            />
            <Route
              path="/admin/vehiculos"
              element={
                <PrivateLayout>
                  <Vehiculos />
                </PrivateLayout>
              }
            />
            <Route
              path="/admin/clientes"
              element={
                <PrivateLayout>
                  <Clientes />
                </PrivateLayout>
              }
            />
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Index />
                </PublicLayout>
              }
            />
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
