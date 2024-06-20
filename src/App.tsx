import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeRoute from "./routes/HomeRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </>
  );
}

export default App;
