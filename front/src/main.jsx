import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from "./App";
import Glossary from "./Glossary";
import Graph from "./Graph";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Glossary />} />
        <Route path="graph" element={<Graph />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
