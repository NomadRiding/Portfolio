import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./HomePage/HomePage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
