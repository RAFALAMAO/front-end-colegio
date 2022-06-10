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
          <li><input type="text" placeholder='Refalamao' id='user' /></li>
          <br />
          <br />
          <li><span>Password</span></li>
          <li><input type="password" placeholder='**********' id='password' /></li>
          <p>User type:&nbsp;<Select name="selectedRTSP" id="userType">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </Select> </p>
        </Form>
        <ButtonContainer>
          <Button onClick={() => {
            const userType = document.getElementById("userType");
            const user = document.getElementById("user");
            const password = document.getElementById("password");

            if( user.value === "" ){
              alert("User is needed");
            } else if( password.value === "" ){
              alert("Password is needed");
            } else {
              let data = {
                User: user.value,
                Password: password.value,
                UserType: userType.value
              }
              let message = `
                You submitted:\n
                ${JSON.stringify(data, null, 1)}\n
                Login cooming soon!
              `
              alert(message);
            }

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
