import React from "react"
import ReactDom from "react-dom/client"
import AppRouter from "./routes/Router"

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)