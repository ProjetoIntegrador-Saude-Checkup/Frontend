import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import SobreProjeto from './components/seçoes/sobreProjeto/SobreProjeto'
import HomePosts from './components/seçoes/homePosts/HomePosts'
import Carrossel from './components/carrossel/Carrossel'
import Devs from './components/seçoes/desenvolvedores/Devs'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <SobreProjeto />
          <HomePosts/>
          <Devs />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App