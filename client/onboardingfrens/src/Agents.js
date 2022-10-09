import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
//import axios from "axios";


const Agents = () => {
const [loading, setLoading] = useState(false)

const loadOnboardingFrens = async() => {
}

useEffect(() => {
      loadOnboardingFrens()
})

if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
)
  
return (
    <div className="flex justify-center">
        <div className="px-5 container">
          <br/><br/>
          <h2>Agents</h2>
          <br/> <br/>
        </div>
    </div>
  );
}
export default Agents