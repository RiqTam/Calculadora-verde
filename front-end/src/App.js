import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import RoutesLandpage from "./routes/RoutesLandpage";

function App() {
  return (
    <BrowserRouter>
      <div className="text-black">
        <RoutesLandpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
