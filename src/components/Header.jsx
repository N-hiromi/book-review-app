import * as React from 'react'
//bootstrap
import { Container, Navbar } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, Link } from "react-router-dom";
import  { signOut } from "../authSlice";
import Button from 'react-bootstrap/Button';

export const Header = ()=> {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie("token");
    nav("/login");
  }

	return (
		<Navbar bg="success" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Book Review App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {auth ? <Button variant="primary" onClick={handleSignOut}>サインアウト</Button> : <></>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}
	
