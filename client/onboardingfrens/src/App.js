import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Navbar.js';
import Home from './Home.js'
import GetHelp from './GetHelp.js'
import Agents from './Agents.js'
import Reports from './Reports.js'
import { useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    //const rockgageWallet = new ethers.Contract(RockgageWalletAddress.address, RockgageWalletAbi.abi, signer)
  
    setLoading(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Navigation web3Handler={web3Handler} account={account} />
        <div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <Spinner animation="border" style={{ display: 'flex' }} />
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Home />
              } />
              <Route path="/get-help" element={
                <GetHelp />
              } />             
              <Route path="/agents" element={
                <Agents />
              } />            
              <Route path="/reports" element={
                <Reports />
              } />

            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
