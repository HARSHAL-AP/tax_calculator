import React from 'react'
import {Route,Routes} from "react-router-dom"
import Hracalculater from "./Hracalculater"
import Advancecalculator from "./Advancecalculator"

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hracalculater/>}/>
      <Route path="/advancecal" element={<Advancecalculator/>}/>

    </Routes>
    
  )
}

export default Allroutes