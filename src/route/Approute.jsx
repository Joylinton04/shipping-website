import Layout from "../Layout/Layout";
import Services from "../pages/Services"
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";

const Approute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="services" element={<Services />}/>
      </Route>
    </Routes>
  )
}

export default Approute;