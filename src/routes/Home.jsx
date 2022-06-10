import React from 'react'
import { Link } from "react-router-dom";
import { Container, H1, Links, Img } from './HomeSyles';

import HomeIcon from "../assets/images/vitReact.png";

export default function Home() {
  return (
    <Container>
        <H1>Welcome to VitReact College</H1>
        <Img src={HomeIcon} alt="" />
        <Links>
            <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/about"><span>About</span></Link></li>
            <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/login"><span>Login</span></Link></li>
            <li><a href="https://www.w3schools.com" target="_blank" style={{ textDecoration: 'none', float: 'left' }}><span>Source Code</span></a></li>
        </Links>
    </Container>
  )
}
