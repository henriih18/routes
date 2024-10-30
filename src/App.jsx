import { Routes, Route } from "react-router-dom"
import { Container } from "./componentes/Layouts/Container/Container"
import { Home } from "./componentes/Pages/Home/Home"
import { ContactUs } from './componentes/Pages/ContactUs/ContactUs'
import { AboutUs } from './componentes/Pages/AboutUs/AboutUs'
import { OtherRoutes } from './componentes/Pages/OtherRoutes/OtherRoutes'
import { Navbar } from "./componentes/UI/Navbar/Navbar"



function App() {

  return (
    <>      
      <Navbar />
      <Container>       
      </Container>
    </>
  )
}

export default App