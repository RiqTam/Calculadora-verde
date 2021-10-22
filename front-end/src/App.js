import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import NavbarLandpage from "./components/NavbarLandpage";
import AuthContext from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import useProviderAuth from "./hooks/useProviderAuth";
import Routes from "./routes/Routes";

export default function App() {
  return (
    <div className="text-black">
      <AuthContext.Provider value={useProviderAuth()} >
        <BrowserRouter>
              <Routes/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}