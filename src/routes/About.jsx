import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Grid, H1, Links, Table, Text } from './AboutSyles';

import { Spinner } from "../components/Spinner";

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
    // if( true ){
      return <Spinner/>;
    }
  }

  return (
    <Container>
      <H1>About</H1>
      <hr/>
      <Grid>
        <Text>
          <p>In this web application you can login as a Student or Teacher and make the following things:</p>
          <h4>Teacher</h4>
          <p>Add, delete, modify and consult information about each student, also change password.</p>
          <h4>Student</h4>
          <p>Check grades by subject and change password.</p>
          <p>This page has its own REST API Back-End developed with NodeJs, Express and MySLQ.</p>
          <p>The following table shows some teacher's and student's accounts got it from Back-End.</p>
        </Text>
        <Text>
          <h4>Teachers</h4>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Password</th>
              </tr>
              {Teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.nombre}</td>
                  <td>{teacher.contrasena}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4>Students</h4>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Password</th>
              </tr>
              {Students.map((student) => (
                <tr key={student.id}>
                  <td>{student.nombre}</td>
                  <td>{student.contrasena}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Text>

      </Grid>
      <Links>
          <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/front-end-colegio/"><span>Home</span></Link></li>
          <li><Link style={{ textDecoration: 'none', float: 'left' }} to="/front-end-colegio/login"><span>Login</span></Link></li>
          <li><a href="https://github.com/RAFALAMAO/front-end-colegio/tree/master" target="_blank" style={{ textDecoration: 'none', float: 'left' }}><span>Source Code</span></a></li>
      </Links>
    </Container>
  )
}
