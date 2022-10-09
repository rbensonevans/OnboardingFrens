import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
//import Web3Auth from "@web3auth/web3auth";
//import axios from "axios";


const Home = () => {
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
          <h2>OnboardingFrens</h2>
          <br/> <br/>
          

        </div>
    </div>
  );
}
export default Home