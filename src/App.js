import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import './app.css';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Error from "./pages/Error";
import Home from "./pages/Home";

//export ShowNavBarContext context
export const ShowNavBarContext = React.createContext();

/**
 * Component for render the application interface
 * 
 * @returns {React.ReactElement} 
 */
function App() {
  //state to handle if the nav bar and side bar is show or hide
  const [showNavBar, setShowNavBar] = useState(true);

  return (
    <>
      <ShowNavBarContext.Provider value={{show: showNavBar, setShow: setShowNavBar}}>
        {/* navbar */}
        {showNavBar && <NavBar />}

        {/* side bar */}
        {showNavBar && <SideBar />}

        {/* router */}
        <BrowserRouter>
          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>

        {/* outlet */}
        <Outlet />
      </ShowNavBarContext.Provider>
    </>
  );
}

//export the App component
export default App;