import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { PDFViewer } from "@react-pdf/renderer"
import MyDocument from "./MyDocument"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <PDFViewer width={1920} height={1500}>
      <MyDocument />
    </PDFViewer>
  </React.StrictMode>
)
