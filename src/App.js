import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import './app.css';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" end element={<Profile />}/>
        </Routes>
      </BrowserRouter>

      {/* navbar */}
      <NavBar/>
      {/* side bar */}

      {/* outlet */}
    </>
  );
}

export default App;