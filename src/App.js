import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import './app.css';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* side bar */}
      <SideBar />

      {/* router */}
      <BrowserRouter>
        <Routes>
          <Route path="/user/:id" end element={<Profile />}/>
        </Routes>
      </BrowserRouter>

      {/* outlet */}
      <Outlet />
    </>
  );
}

export default App;