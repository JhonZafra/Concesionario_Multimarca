import AuthLayout from "layout/AuthLayout";
import PrivateLayout from "layout/PrivateLayout";
import PublicLayout from "layout/PublicLayout";
import Admin from "pages/admin/Index.jsx";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import Clientes from "pages/admin/Clientes";
import Vehiculos from "pages/admin/Vehiculos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "styles/styles.css";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
