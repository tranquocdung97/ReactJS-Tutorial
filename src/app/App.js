import "./App.css";
import SignIn from "../views/SignIn/SignIn";
import SignUp from "../views/SignUp/SignUp";
import HomePage from "../views/HomePage";
import { styled } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataManagement from "../views/DataManagement/DataManagement";
import ModelManagement from "../views/ModelManagement/ModelManagement";
import Dashboard from "../views/Dashboard/Dashboard";

const AppContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});


function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/data-management' element={<DataManagement />} />
          <Route path='/model-management' element={<ModelManagement />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}
export default App;
