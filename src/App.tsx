import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ManitaMagicasApp from './assets/components/Etapas'
import Home from './assets/components/Home'
import LoginPage from './assets/components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etapas" element={<ManitaMagicasApp />} />
          <Route path='login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
