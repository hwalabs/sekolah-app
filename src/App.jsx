
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./components/sidebar/Dashboard"
export default function App() {
  return (
    <BrowserRouter>
      <div style={{display:"flex"}}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}
// import HelloWorld from './components/Hello-World'
// import Asalelo from './components/Hello'

// export default function App() {
//   return (
//     <>
//       <HelloWorld />
//       <Asalelo />
//     </>
//   )
// }