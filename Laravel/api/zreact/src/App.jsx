import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./contexts/AuthProvider";

export default function App() {
    console.log("invoked");
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<h1>hehe</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}
