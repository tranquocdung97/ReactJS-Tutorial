import "./App.css";
import SignIn from "../views/SignIn/SignIn";
import SignUp from "../views/SignUp/SignUp";
import HomePage from "../views/HomePage";
import { styled } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}
export default App;
