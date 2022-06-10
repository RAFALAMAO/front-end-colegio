import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Grid, H1, Links, Text } from './AboutSyles';

import axios from "axios";

export default function Home() {

  const [Students, setStudents] = useState([]);
  const [Teachers, setTeachers] = useState([]);

  const [Loading, setLoading] = useState({
    students: true,
    teachers: true
  });

  const getData = async(dataEnd) => {
    await axios.get(`https://back-end-colegio.herokuapp.com/${dataEnd}`,{
      crossDomain: true
    })
    .then(function (response) {
      if( dataEnd === 'alumnos' ){
        setStudents(response.data);
        setLoading({...Loading.students=false})
      } else if ( dataEnd === 'profesores' ){
        setTeachers(response.data);
        setLoading({...Loading.teachers=false})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getData('alumnos');
    getData('profesores');
  }, [])

  {
    if( Loading.teachers === true || Loading.students === true   ){
      return null;
    }
  }

  return (
    null ? Loading === true : (
    <Container>
      <H1>About</H1>
      <hr/>
      <Grid>
        <Text>
          <p>In this web application you can login as a Student or Teacher and make the following things:</p>
          <h4>Teacher:</h4>
          <p>Add, delete, modify and consult information about each student, also change password.</p>
          <h4>Student:</h4>
          <p>Consult marks by subject and change password.</p>
          <p>This page have its own REST API Back-End developed in NodeJs with a MySLQ database.</p>
          <p>The following table shows some teacher and student accounts.</p>
        </Text>
        <Text>
          <h4>Teachers Table</h4>
          <table>
            <tr>
              <th>Name</th>
              <th>Password</th>
            </tr>
          {Teachers.map((teacher) => (
              <tr>
                <td>{teacher.nombre}</td>
                <td>{teacher.contrasena}</td>
              </tr>
              // <p key={teacher.id}>{teacher.nombre}</p>
          ))}
          </table>

          <h4>Students Table</h4>
          <table>
            <tr>
              <th>Name</th>
              <th>Password</th>
            </tr>
          {Students.map((student) => (
            <tr>
              <td>{student.nombre}</td>
              <td>{student.contrasena}</td>
            </tr>
              // <p key={student.id}>{student.nombre}</p>
          ))}
          </table>
        </Text>

      </Grid>
      <Links>
          <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/"><span>Home</span></Link></li>
          <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/login"><span>Login</span></Link></li>
          <li><a href="https://www.w3schools.com" target="_blank" style={{ textDecoration: 'none', float: 'left' }}><span>Source Code</span></a></li>
      </Links>
    </Container>
    )
  )
}
