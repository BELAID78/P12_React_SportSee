import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import './app.css';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

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
      <NavBar />

      {/* side bar */}
      <SideBar />

      {/* outlet */}
      <Outlet />
    </>
  );
}

export default App;