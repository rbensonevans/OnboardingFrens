import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import onboarding from './OBF_logo_tw.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img src={onboarding} width="40" height="40" className="" alt="" />
                    &nbsp; OnboardingFrens
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/get-help">Get Help</Nav.Link>
                    <Nav.Link as={Link} to="/agents">Agents</Nav.Link>
                    <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <NavDropdown.Item
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </NavDropdown.Item>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;