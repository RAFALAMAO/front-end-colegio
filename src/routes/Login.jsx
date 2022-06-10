import React from 'react'
import { Link } from "react-router-dom";
import { Container, H1, Links, Img, Form, Select, Button, ButtonContainer } from './LoginSyles';

import LoginIcon from "../assets/images/login.png";

export default function Home() {
  return (
    <Container>
        <H1>Login</H1>
        <Img src={LoginIcon} alt="" />
        <Form>
          <li><span>User</span></li>
          <li><input type="text" placeholder='Refalamao' /></li>
          <br />
          <br />
          <li><span>Password</span></li>
          <li><input type="password" placeholder='**********' /></li>
          <p>User type:&nbsp;<Select name="selectedRTSP" id="selectedRTSP">
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </Select> </p>
        </Form>
        <ButtonContainer>
          <Button onClick={() => {
            console.log('first')
          }}>Submit</Button>
        </ButtonContainer>
        <Links>
            <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/front-end-colegio/about"><span>About</span></Link></li>
            <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/front-end-colegio/"><span>Home</span></Link></li>
            <li><a href="https://github.com/RAFALAMAO/front-end-colegio/tree/master" target="_blank" style={{ textDecoration: 'none', float: 'left' }}><span>Source Code</span></a></li>
        </Links>
    </Container>
  )
}
