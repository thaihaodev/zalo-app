import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { publicRoutes } from "./Router";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    location.pathname === "/" && navigate("/message");
  }, []);
  return useRoutes(publicRoutes);
}

export default App;
