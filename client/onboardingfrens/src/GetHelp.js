import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
//import axios from "axios";


const GetHelp = () => {
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
          <h2>Help</h2>
          <br/> <br/>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Select your issue in the drop-down below
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    </div>
  );
}
export default GetHelp