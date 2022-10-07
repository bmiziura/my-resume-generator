import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { Document, PDFViewer } from "@react-pdf/renderer"
import MyDocument from "./MyDocument"

import langEN from "./lang/lang_en.json"
import langPL from "./lang/lang_pl.json"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <PDFViewer width={1920} height={1500}>
      <Document>
        <MyDocument language={langEN} />
        <MyDocument language={langPL} />
      </Document>
    </PDFViewer>
  </React.StrictMode>
)
