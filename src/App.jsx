
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{display:"flex"}}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>Dashbord</h1>} />
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