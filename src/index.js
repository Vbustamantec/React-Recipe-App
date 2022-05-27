import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApiContextProvider } from "./api/ApiContextProvider";
import './index.css'
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
    <ApiContextProvider>
        <App />
    </ApiContextProvider>
    </BrowserRouter>
)
