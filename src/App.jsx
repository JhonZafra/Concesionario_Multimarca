import Admin from "pages/Admin";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "styles/styles.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
