import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [file, setFile] = useState(0);
    const [src, setSrc] = useState("");

    const handleFileSelect = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:8000", formData).then((res) => {
            setSrc(res.data);
        });
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <img
                width="200px"
                src={
                    src ||
                    "https://easydrawingguides.com/wp-content/uploads/2017/04/How-to-draw-a-duck-20.png"
                }
                alt="no image hehe"
            />
            <label style={{ marginRight: "10px" }}>
                Upload some goddamned image!
            </label>
            <input
                type="file"
                accept=".png, .jpg"
                onChange={handleFileSelect}
            />
            <button onClick={handleSubmit}>upload it bitch</button>
        </div>
    );
}

export default App;
