import { Route, Routes } from "react-router-dom";
// Pages
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

function App() {

    return (
        <>
            <Routes>
                    <Route  path="/signup" element={<SignupPage />} />
                    <Route  path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default App
