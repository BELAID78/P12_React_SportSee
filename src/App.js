import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

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

      {/* side bar */}

      {/* outlet */}
    </>
  );
}
export default App;